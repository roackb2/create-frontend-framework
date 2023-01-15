import { type ElementType } from './_types'
import { patch } from './patch'

export const setup = (selector: string, component: ElementType): void => {
  const app = document.querySelector(selector)
  if (!app) return

  patch(app, component.node)
}