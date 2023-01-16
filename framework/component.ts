import { ElementType, PropArgType } from './_types.d';
import { ComponentOptionType } from './_types'
import { patch } from './patch'

export const defineComponent = (options: ComponentOptionType):
  (props: Record<string, any>) => ElementType => {
  // user defines how the template (VNodes) are created with options.data
  // call render function to get the initial VNode and patch
  // create proxies on options.data
  // use proxy setters to detect changes and call patch
  return (props: PropArgType): ElementType => {
    const r = options.render
    
    const dataHandler = {
      set(obj, prop, value) {
        if (obj[prop as string] !== value) {
          obj[prop as string] = value
          nextElem = r(props, obj)

          prevNode = patch(prevNode, nextElem.node)
        }
  
        return true;
      },
    }
    const watchedData = new Proxy(options.data || {}, dataHandler)

    let prevElem = r(props, watchedData)
    let nextElem = prevElem
    let prevNode = prevElem.node

    return nextElem
  }
}