import { ElementType } from '../framework/_types'
import { div, p } from '../framework/element'
import { defineComponent } from '../framework/component'

export const User = defineComponent({
  props: {
    firstName: String,
    lastName: String
  },
  data: {},
  render: ({ firstName, lastName }) => {
    const element = div`Hello, ${firstName} ${lastName}!`
    return element.node
  }
})
