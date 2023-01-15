import { div, p } from '../framework/element'
import { defineComponent } from '../framework/component'
import { User } from './user'

export const App = defineComponent({
  data: {},
  render: () => {
    const element = div({
      children: [User({
        firstName: 'Jay',
        lastName: 'Liang'
      })]
    })``
    return element.node
  }
})
