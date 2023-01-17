import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
} from "snabbdom";

const modules = [
  // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
]

export const patch = init(modules, undefined, {
  experimental: {
    fragments: true,
  }
});
