import { ComponentOptionType } from './_types'

export const defineComponent = (options: ComponentOptionType) => {
  // user defines how the template (VNodes) are created with options.data
  // call render function to get the initial VNode and patch
  // create proxies on options.data
  // use proxy setters to detect changes and call patch
}