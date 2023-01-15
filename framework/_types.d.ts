import { VNode } from "snabbdom/vnode"

export type TagType = 'div' | 'p'


export interface ElementType {
  type: 'element',
  node: VNode
}


export interface ComponentOptionType {
  data: Record<string, any>
  render?: () => VNode
}