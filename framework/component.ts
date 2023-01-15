import { ElementType } from './_types.d';
import { ComponentOptionType } from './_types'
import { patch } from './patch'

export const defineComponent = (options: ComponentOptionType): (props: Record<string, any>) => ElementType => {
  // user defines how the template (VNodes) are created with options.data
  // call render function to get the initial VNode and patch
  // create proxies on options.data
  // use proxy setters to detect changes and call patch

  function renderer (props) {
    const inst = this
    Object.entries(options.data || {}).forEach( ([key, value]) => {
      inst[key] = value
    })
    console.log(this)
    return {
      tagName: 'div',
      node: options.render(props)
    }
  }

  return renderer.bind(this)
}