import { VNode } from 'snabbdom'
import { PropArgType } from './_types.d'
import { ComponentOptionType } from './_types'
import { patch } from './patch'

export const defineComponent = (options: ComponentOptionType):
  (props: Record<string, any>) => VNode => {
  // user defines how the template (VNodes) are created with options.data
  // call render function to get the initial VNode and patch
  // create proxies on options.data
  // use proxy setters to detect changes and call patch
  return (props: PropArgType): VNode => {
    const r = options.render
    
    const dataHandler: ProxyHandler<any> = {
      set(obj, prop, value) {
        if (obj[prop as string] !== value) {
          obj[prop as string] = value
          nextNode = r(props, watchedData)

          prevNode = patch(prevNode, nextNode)
        }
  
        return true;
      },
    }
    const watchedData = new Proxy(options.data || {}, dataHandler)

    let prevNode = r(props, watchedData)
    let nextNode = prevNode

    return nextNode
  }
}