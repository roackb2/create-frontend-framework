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
  render: function ({ firstName, lastName }, data) {
    const handleClick = () => {
      data.trailingChar += '!'
    }
    return p({
      onclick: handleClick,
      style: {
        cursor: "pointer"
      }
    })`Hello, ${firstName} ${lastName}${data.trailingChar as string}`
  }
})
