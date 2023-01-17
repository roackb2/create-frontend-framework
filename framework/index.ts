import { patch } from './patch'
export { jsx } from '@herp-inc/snabbdom-jsx';
import type { VNode } from 'snabbdom'

export const setup = (selector: string, component: VNode): void => {
  const app = document.querySelector(selector)
  if (!app) return

  const content = document.createElement('div')
  app.appendChild(content)

  patch(content, component)
}
