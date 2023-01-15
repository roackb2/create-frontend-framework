import * as snabbdom from 'snabbdom'
import { type ElementType } from './_types'

const patch = snabbdom.init([])

export const init = (selector: string, component: ElementType): void => {
  const app = document.querySelector(selector)
  if (!app) return

  patch(app, component.node)
}