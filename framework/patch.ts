import {
  init
} from "snabbdom"

export const patch = init([
  require('snabbdom/modules/class').default,
  require('snabbdom/modules/hero').default,
  require('snabbdom/modules/style').default,
  require('snabbdom/modules/eventlisteners').default,
]);
