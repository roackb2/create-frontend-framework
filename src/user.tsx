import { jsx, defineComponent } from '../framework'

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
      <div onclick={handleClick} $style={{ cursor: 'pointer' }}>
        Hello, {firstName} {lastName}{data.trailingChar as string}
      </div>
    )
  }
})
