import { ElementType } from './_types.d';
import { ComponentOptionType } from './_types'
import { patch } from './patch'

export const defineComponent = (options: ComponentOptionType): (props: Record<string, any>) => ElementType => {
  // user defines how the template (VNodes) are created with options.data
  // call render function to get the initial VNode and patch
  // create proxies on options.data
  // use proxy setters to detect changes and call patch


  function renderer (props) {
    const r = options.render.bind(this)

    let prevState = { ...options.data }
    const watchedData = new Proxy(options.data || {}, {
      set(obj, prop, value) {
        console.log('obj', obj, prop, value)
        prevState = { ...obj }
        const prevNode = r(props, prevState)
        obj[prop as string] = value
        const nextNode = r(props, obj)
        console.log('prevNode', prevNode, 'nextNode', nextNode)

        patch(prevNode, nextNode)

        prevState = { ...obj }
        return true;
      },
    })
    console.log('watchedData', watchedData)

    
    return {
      tagName: 'div',
      node: r(props, watchedData)
    }
  }

  return renderer.bind(this)
}