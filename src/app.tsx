import { defineComponent } from '../framework/component'
import { jsx } from '../framework'
import { User } from './user'


export const App = defineComponent({
  data: {},
  render: () => {
    return (
      <div>
        <User
          firstName="Jay"
          lastName="Liang"
        />
      </div>
    )
  }
})
