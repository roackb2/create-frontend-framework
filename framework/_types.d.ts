import { VNode } from "snabbdom/vnode"

export type TagType = 'div' | 'p'


export interface ElementType {
  type: 'element',
  node: VNode
}


export interface ComponentOptionType {
  props: Record<string, any>
  data: Record<string, any>
  render: (props: Record<string, any>) => VNode
}