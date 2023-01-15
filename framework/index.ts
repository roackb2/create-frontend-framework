import { type ComponentType } from './_types'

export const init = (selector: string, component: ComponentType): void => {
  const app = document.querySelector(selector)
  const node = document.createElement(component.type)
  const content = document.createTextNode(component.template)
  node.append(content)
  app?.append(node)
}