import { type TagType, ComponentType } from './_types'

const createElement = (tagType: TagType) => (content: TemplateStringsArray, ...args: string[]): ComponentType => ({
  type: tagType,
  template: content.reduce((res, cur, i) =>
  res + cur + (args[i] || '')
, '')
})


export const div = createElement('div')
export const p = createElement('p')
