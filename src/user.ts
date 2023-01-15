import { ComponentType } from '../framework/_types'
import { div, p } from '../framework/element'

export const User = (firstName: string, lastName: string): ComponentType => {
  const element = div`Hello, ${firstName} ${lastName}!`
  return element
}
