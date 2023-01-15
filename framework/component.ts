import { ElementType } from './_types.d';
import { ComponentOptionType } from './_types'
import { patch } from './patch'

// shallow compare
const isSame = (prevState: Record<string, any>, nextState: Record<string, any>): boolean => Object.entries(prevState).every(([key, val]) => {
  console.log(prevState[key], nextState[key])
  return prevState[key] === nextState[key]
})

export const defineComponent = (options: ComponentOptionType): (props: Record<string, any>) => ElementType => {
  // user defines how the template (VNodes) are created with options.data
  // call render function to get the initial VNode and patch
  // create proxies on options.data
  // use proxy setters to detect changes and call patch


  function renderer (props) {
    let prevState = { ...options.data }
    const watchedData = new Proxy(options.data || {}, {
      set(obj, prop, value) {
        console.log('obj', obj)
        if (!isSame(prevState, obj)) {
          console.log('changed')
          prevState = { ...obj }
          // patch()
        }
        obj[prop as string] = value
        return true;
      },
    })
    console.log('watchedData', watchedData)

    const r = options.render.bind(this)
    
    return {
      tagName: 'div',
      node: r(props, watchedData)
    }
  }

  return renderer.bind(this)
}