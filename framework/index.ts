import { type ElementType } from './_types'
import { patch } from './patch'

export const setup = (selector: string, component: ElementType): void => {
  const app = document.querySelector(selector)
  if (!app) return

  const content = document.createElement('div')
  app.appendChild(content)

  const initialNode = patch(content, component.node)
}

