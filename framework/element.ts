import { 
  TagType, ElementType, ElementInterpolationTypes, ElementOptionType
} from './_types'
import { v4 as uuid } from 'uuid'
import { h } from 'snabbdom'

const stringReducer = (args: ElementInterpolationTypes[]) =>
  (res: ElementInterpolationTypes, cur: ElementInterpolationTypes, i: number): string => {
    if (typeof cur !== 'string') return ''

    return res + cur + (args[i] || '')
  }

const createElement = (tagName: TagType) => (options: ElementOptionType) => (content: TemplateStringsArray, ...args: ElementInterpolationTypes[]): ElementType => {
  const template = content.reduce(stringReducer(args), '')

  const { onclick, style, children } = options
  const identifier = uuid()

  const vnodeData = {
    dataset: {
      ffid: identifier
    }
  }
  if (onclick) Object.assign(vnodeData, { on: { click: onclick } })
  if (style) Object.assign(vnodeData, { style })


  if (children) {
    return{
      tagName,
      identifier,
      node: h(
        tagName,
        vnodeData,
        children.map(child => child.node)
      )
    }
  }

  return {
    tagName,
    identifier,
    node: h(
      tagName,
      vnodeData,
      template
    )
  }
}


export const div = createElement('div')
export const p = createElement('p')
export const span = createElement('span')
