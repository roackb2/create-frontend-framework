import { VNode } from "snabbdom"

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