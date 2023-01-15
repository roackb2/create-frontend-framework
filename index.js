import { init } from './framework'
import { div, p } from './framework/element'

const firstName = 'Jay'
const lastName = 'Liang'

const element = div`Hello, ${firstName} ${lastName}!`

init('#app', element)