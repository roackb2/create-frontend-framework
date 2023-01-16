import { span } from '../framework/element'
import { defineComponent } from '../framework/component'
import { User } from './user'

export const App = defineComponent({
  data: {},
  render: () => {
    return span({
      children: [User({
        firstName: 'Jay',
        lastName: 'Liang'
      })]
    })``
  }
})
