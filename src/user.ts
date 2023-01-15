import { ElementType } from '../framework/_types'
import { div, p } from '../framework/element'

export const User = (firstName: string, lastName: string): ElementType => {
  const element = div`Hello, ${firstName} ${lastName}!`
  return element
}
