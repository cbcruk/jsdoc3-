---
id: instance
title: '@instance'
sidebar_label: '@instance'
---

## Overview

Using the @instance tag will mark a symbol as an instance member of its parent symbol. This means it can be referred to by "Parent#Child".

Using @instance will override a doclet's default scope (unless it is in the global scope, in which case it will remain global).

## Examples

The following example is a longhand way of writing "@function MyNamespace#myFunction":

Using @instance to make a virtual doclet an instance member

```js
/** @namespace MyNamespace */
/**
 * myFunction is now MyNamespace#myFunction.
 * @function myFunction
 * @memberof MyNamespace
 * @instance
 */
```

More usefully, you can use the @instance tag to override the scope that JSDoc infers. For example, you can indicate that a static member is used as an instance member:

Using @instance to identify an instance member

```js
/** @namespace */
var BaseObject = {
  /**
   * foo is now BaseObject#foo rather than BaseObject.foo.
   * @instance
   */
  foo: null,
}

/** Generates BaseObject instances. */
function fooFactory(fooValue) {
  var props = { foo: fooValue }
  return Object.create(BaseObject, props)
}
```

## Related Links

- [@global](./global.md)
- [@inner](./inner.md)
- [@static](./static.md)
