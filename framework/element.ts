import { 
  TagType, ElementType, ElementInterpolationTypes, ElementOptionType
} from './_types'
import { h } from 'snabbdom/h'

const stringReducer = (args: ElementInterpolationTypes[]) =>
  (res: ElementInterpolationTypes, cur: ElementInterpolationTypes, i: number): string => {
    if (typeof cur !== 'string') return ''

    return res + cur + (args[i] || '')
  }

const createElement = (tagName: TagType) => (options: ElementOptionType) => (content: TemplateStringsArray, ...args: ElementInterpolationTypes[]): ElementType => {
  console.log(args)
  const template = content.reduce(stringReducer(args), '')

  const { onclick, style, children } = options

  const vnodeData = {}
  if (onclick) Object.assign(vnodeData, { on: { click: onclick } })
  if (style) Object.assign(vnodeData, { style })
  console.log(vnodeData)

  if (children) {
    return{
      tagName,
      node: h(
        tagName,
        vnodeData,
        children.map(child => child.node)
      )
    }
  }

  return {
    tagName,
    node: h(
      tagName,
      vnodeData,
      template
    )
  }
}


export const div = createElement('div')
export const p = createElement('p')