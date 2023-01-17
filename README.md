## What's this

This is a small project to practice about how to implement reactivity in a self-built front-end framework.
It utilizes existing Virtual DOM library [snabbdom](https://www.npmjs.com/package/@herp-inc/snabbdom-jsx) to patch DOM effectively,
and [@herp-inc/snabbdom-jsx](https://www.npmjs.com/package/@herp-inc/snabbdom-jsx) to support using JSX to create VNodes.

I made the framework more Vue 2 alike. Users use `defineComponent` to create a new component, with options to inject data that is watched
for reactivity. Currently supports primitive data values.

---
### Original document from the [front-end framwork mini book](https://mfrachet.github.io/create-frontend-framework/)

[Slides available here](https://docs.google.com/presentation/d/1QeK3f9Ycae0oLG5CCgrLsYbxTNd7iamPBGkotvxWCzI/edit?usp=sharing)

_This project aims to provide a step by step implementation of a "frontend framework". It's only for learning purpose and allows to take a first shot of internal stuff such as templating, state management, and the use of Virtual DOMs._

[NEW: here's another way to implement it using React API and JSX](https://github.com/mfrachet/create-frontend-framework/tree/jsx)

**NEW: the project is now available on github pages! https://mfrachet.github.io/create-frontend-framework/**
