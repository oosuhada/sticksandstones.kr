export function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  className?: string,
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tagName)
  if (className) element.className = className
  return element
}

export function setHtml(element: Element, html: string): void {
  element.innerHTML = html
}
