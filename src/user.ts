import { div, p } from '../framework/element'
import { defineComponent } from '../framework/component'

export const User = defineComponent({
  props: {
    firstName: String,
    lastName: String
  },
  data: {
    trailingChar: '!'
  },
  render: function ({ firstName, lastName }) {
    const handleClick = () => {
      this.trailingChar = '?'
    }
    const element = div({
      onclick: handleClick,
      style: {
        cursor: "pointer"
      }
    })`Hello, ${firstName} ${lastName}!`
    return element.node
  }
})
