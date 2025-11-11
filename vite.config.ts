import { request as httpRequest, type IncomingHttpHeaders } from 'node:http'
import { request as httpsRequest } from 'node:https'
import { defineConfig } from 'vite'

const legacyProxyBase = '/legacy-wp'
const legacyBridgeSrc = '/legacy-wordpress-bridge.js?v=sync-20260502c'
const defaultLegacyHost = 'sticksandstones2.local'

function legacyWordPressProxy() {
  const target = process.env.LEGACY_WP_TARGET ?? 'http://127.0.0.1:10008'
  const host = process.env.LEGACY_WP_HOST ?? defaultLegacyHost
  const rewriteHosts = getRewriteHosts(host)
  const proxiedPrefixes = [
    legacyProxyBase,
    '/wp-admin',
    '/wp-content',
    '/wp-includes',
    '/wp-json',
    '/wp-login.php',
    '/xmlrpc.php',
  ]

  return {
    name: 'legacy-wordpress-proxy',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const requestUrl = req.url ?? '/'
        const shouldProxy = proxiedPrefixes.some((prefix) => requestUrl === prefix || requestUrl.startsWith(`${prefix}/`))
        if (!shouldProxy) {
          next()
          return
        }

        const upstreamPath = requestUrl.startsWith(legacyProxyBase)
          ? requestUrl.replace(legacyProxyBase, '') || '/'
          : requestUrl
        const upstreamUrl = new URL(upstreamPath, target)
        const headers: Record<string, string> = {}

        Object.entries(req.headers).forEach(([key, value]) => {
          if (!value || ['connection', 'host', 'accept-encoding', 'content-length'].includes(key.toLowerCase())) return
          headers[key] = Array.isArray(value) ? value.join(', ') : value
        })
        headers.host = host

        try {
          const requestBody = req.method && !['GET', 'HEAD'].includes(req.method)
            ? await readIncomingBody(req)
            : undefined
          const response = await requestLegacyWordPress(upstreamUrl, req.method ?? 'GET', headers, requestBody)
          const contentType = getHeaderValue(response.headers['content-type']) ?? ''
          const isText = /text|javascript|json|xml|svg/.test(contentType)

          res.statusCode = response.status
          Object.entries(response.headers).forEach(([key, value]) => {
            if (value === undefined) return
            const normalizedKey = key.toLowerCase()
            if (['content-encoding', 'content-length', 'x-frame-options'].includes(normalizedKey)) return
            if (normalizedKey === 'location') {
              const location = getHeaderValue(value)
              if (location) res.setHeader(key, rewriteLegacyUrl(location, rewriteHosts))
              return
            }
            res.setHeader(key, value)
          })

          if (req.method === 'HEAD') {
            res.end()
            return
          }

          const body = response.body
          if (!isText) {
            res.end(body)
            return
          }

          let text = body.toString('utf8')
          text = rewriteLegacyMarkup(text, rewriteHosts)
          if (contentType.includes('text/html') && !text.includes('/legacy-wordpress-bridge.js')) {
            text = text.replace('</body>', `<script src="${legacyBridgeSrc}"></script></body>`)
          }
          res.end(text)
        } catch (error) {
          res.statusCode = 502
          res.setHeader('content-type', 'text/plain; charset=utf-8')
          res.end(
            [
              'Legacy WordPress is not reachable yet.',
              `Expected upstream: ${target}`,
              `Start the LocalWP ${host} site, then reload this frame.`,
              '',
              error instanceof Error ? error.message : String(error),
            ].join('\n'),
          )
        }
      })
    },
  }
}

type LegacyProxyResponse = {
  status: number
  headers: IncomingHttpHeaders
  body: Buffer
}

function readIncomingBody(req: import('node:http').IncomingMessage) {
  return new Promise<Buffer>((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (chunk) => {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
    })
    req.on('end', () => resolve(Buffer.concat(chunks)))
    req.on('error', reject)
  })
}

function requestLegacyWordPress(
  upstreamUrl: URL,
  method: string,
  headers: Record<string, string>,
  body?: Buffer,
) {
  return new Promise<LegacyProxyResponse>((resolve, reject) => {
    const transport = upstreamUrl.protocol === 'https:' ? httpsRequest : httpRequest
    const legacyRequest = transport(
      {
        protocol: upstreamUrl.protocol,
        hostname: upstreamUrl.hostname,
        port: upstreamUrl.port,
        method,
        path: `${upstreamUrl.pathname}${upstreamUrl.search}`,
        headers,
      },
      (legacyResponse) => {
        const chunks: Buffer[] = []
        legacyResponse.on('data', (chunk) => {
          chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
        })
        legacyResponse.on('end', () => {
          resolve({
            status: legacyResponse.statusCode ?? 502,
            headers: legacyResponse.headers,
            body: Buffer.concat(chunks),
          })
        })
      },
    )

    legacyRequest.on('error', reject)
    if (body?.length) legacyRequest.write(body)
    legacyRequest.end()
  })
}

function getHeaderValue(value: string | string[] | number | undefined) {
  if (Array.isArray(value)) return value[0]
  if (typeof value === 'number') return String(value)
  return value
}

function getRewriteHosts(host: string) {
  const normalizedHost = host.replace(/^www\./, '')
  return Array.from(
    new Set([
      host,
      normalizedHost,
      `www.${normalizedHost}`,
      'sticksandstones.local',
      'sticksandstones2.local',
      '127.0.0.1',
      '127.0.0.1:10008',
      'localhost',
      'localhost:10008',
    ]),
  )
}

function rewriteLegacyUrl(value: string, hosts: string[]) {
  return hosts.reduce((next, host) => {
    return next
      .replaceAll(`https://${host}`, legacyProxyBase)
      .replaceAll(`http://${host}`, legacyProxyBase)
  }, value)
}

function rewriteLegacyMarkup(value: string, hosts: string[]) {
  return rewriteLegacyUrl(value, hosts)
    .replaceAll('href="/portfolios/', `href="${legacyProxyBase}/portfolios/`)
    .replaceAll("href='/portfolios/", `href='${legacyProxyBase}/portfolios/`)
    .replaceAll('src="/wp-content/', `src="${legacyProxyBase}/wp-content/`)
    .replaceAll("src='/wp-content/", `src='${legacyProxyBase}/wp-content/`)
}

export default defineConfig({
  base: '/',
  plugins: [legacyWordPressProxy()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 3002,
    strictPort: true,
    open: false,
  },
})
