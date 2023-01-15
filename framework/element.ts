import { type TagType, ElementType } from './_types'
import { h } from 'snabbdom/h'

const createElement = (tagName: TagType) => (content: TemplateStringsArray, ...args: string[]): ElementType => ({
  type: 'element',
  node: h(
    tagName,
    {},
    content.reduce((res, cur, i) =>
      res + cur + (args[i] || '')
    , '')
  )
})


export const div = createElement('div')
export const p = createElement('p')
