import { jsx, defineComponent } from '../framework'
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
