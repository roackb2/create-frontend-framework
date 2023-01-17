import { defineComponent } from '../framework/component'
import { jsx } from '../framework' 

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
    return (
      <div onclick={handleClick}>
        Hello, {firstName} {lastName}{data.trailingChar as string}
      </div>
    )
  }
})
