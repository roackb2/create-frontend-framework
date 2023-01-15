import { setup } from './framework'
import { User } from './src/user'

setup('#app', User({
  firstName: 'Jay',
  lastName: 'Liang'
}))