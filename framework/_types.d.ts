import { VNode } from "snabbdom/vnode"

export type TagType = 'div' | 'p'

export interface ElementType {
  tagName: TagType
  node: VNode
}
export type ElementOptionKeyType = 'onclick' | 'style'
export interface ElementOptionType {
  onclick?: EventListener
  style?: Record<string, string | Record<string, any>>
  children?: Array<ElementType>
}
export type ElementInterpolationTypes = string


export type PropValueTypes = StringConstructor | NumberConstructor
export type PropValidatorType = Record<string, PropValueTypes>
export type PropArgType = Record<string, any>
export type DataValueTypes = string | number
export type DataType = Record<string, DataValueTypes>
export type EventType = (...args: any[]) => void

export interface ComponentOptionType {
  props?: PropValidatorType
  data?: DataType
  events?: Record<string, EventType>
  render: (props: PropArgType, data: DataType) => VNode
}