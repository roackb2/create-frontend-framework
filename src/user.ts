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
    console.log('data in user', data)
    const handleClick = () => {
      data.trailingChar = '?'
      console.log('data after clicked', data)
    }
    const element = p({
      onclick: handleClick,
      style: {
        cursor: "pointer"
      }
    })`Hello, ${firstName} ${lastName}${data.trailingChar as string}`
    return element.node
  }
})
