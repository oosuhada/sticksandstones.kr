import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'

const baseUrl = 'https://www.stks.kr'
const publicDir = 'public'
const sourceFiles = ['index-BBm3pHfk.js', 'index-DV5qI-60.css']

const extraAssets = [
  '/assets/favicon/favicon.png',
  '/assets/files/SticksandStones_CompanyBrochure.pdf',
  ...['about', 'services', 'portfolio', 'clients', 'logo'].flatMap((name) => [
    `/assets/images/${name}.png`,
    `/assets/images/${name}.gif`,
  ]),
  ...[
    'amorepacific',
    'cheil',
    'hsad',
    'hyundai',
    'innocean',
    'kia',
    'lg',
    'pledis',
    'samsung',
    'skhynix',
    'tbwa',
  ].map((name) => `/assets/images/clients/${name}.png`),
  ...['bag', 'cards', 'discussion', 'doorlogo', 'lighting', 'notepad'].map(
    (name) => `/assets/images/space/${name}.jpg`,
  ),
]

const concreteAssetPattern = /\/assets\/[^"'`),\s]+/g
const assets = new Set(extraAssets)

for (const file of sourceFiles) {
  const source = await readFile(file, 'utf8')
  for (const match of source.matchAll(concreteAssetPattern)) {
    const assetPath = match[0]
    if (!assetPath.includes('${')) assets.add(assetPath)
  }
}

let downloaded = 0
let skipped = 0
let failed = 0

for (const assetPath of [...assets].sort()) {
  const outputPath = join(publicDir, assetPath)
  if (existsSync(outputPath)) {
    skipped += 1
    continue
  }

  await mkdir(dirname(outputPath), { recursive: true })

  try {
    const response = await fetch(`${baseUrl}${assetPath}`)
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)
    const bytes = new Uint8Array(await response.arrayBuffer())
    await writeFile(outputPath, bytes)
    downloaded += 1
    console.log(`downloaded ${assetPath}`)
  } catch (error) {
    failed += 1
    console.warn(`failed ${assetPath}: ${error.message}`)
  }
}

console.log(`assets complete: ${downloaded} downloaded, ${skipped} skipped, ${failed} failed`)
