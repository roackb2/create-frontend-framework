import {
  init,
  h
} from "snabbdom"
import { type ElementType } from './_types'

const patch = init([
  require('snabbdom/modules/class').default,
  require('snabbdom/modules/hero').default,
  require('snabbdom/modules/style').default,
  require('snabbdom/modules/eventlisteners').default,
]);



export const setup = (selector: string, component: ElementType): void => {
  const app = document.querySelector(selector)
  if (!app) return

  patch(app, component.node)
}