import { type ElementType } from './_types'
import { patch } from './patch'

let app: Element | null = null
export const setup = (selector: string, component: ElementType): void => {
  app = document.querySelector(selector)
  if (!app) return

  patch(app, component.node)
}

