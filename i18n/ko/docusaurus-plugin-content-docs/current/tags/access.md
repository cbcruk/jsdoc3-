---
id: access
title: '@access'
sidebar_label: '@access'
---

## Syntax

`@access <package|private|protected|public>`

## Overview

The `@access` tag specifies the access level of a member. You can use the `@access` tag as a synonym for other tags:

- `@access package` is the same as `@package`. This option is available in JSDoc 3.5.0 and later.
- `@access private` is the same as `@private`.
- `@access protected` is the same as `@protected`.
- `@access public` is the same as `@public`.

Private members are not shown in the generated output unless JSDoc is run with the `-p/--private` command-line option. In JSDoc 3.3.0 and later, you can also use the [`-a/--access` command-line option](../about/commandline.md) to change this behavior.

Note that a doclet's _access level_ is different from its _scope_. For example, if `Parent` has an inner variable named `child` that is documented as `@public`, the `child` variable will still be treated as an inner variable with the namepath `Parent~child`. In other words, the `child` variable will have an inner scope, even though the variable is public. To change a doclet's scope, use the [`@instance`](./instance.md), [`@static`](./static.md), and [`@global`](./global.md) tags.

## Examples

Using @access as a synonym for other tags

```js
/** @constructor */
function Thingy() {
  /** @access private */
  var foo = 0

  /** @access protected */
  this._bar = 1

  /** @access package */
  this.baz = 2

  /** @access public */
  this.pez = 3
}

// same as...

/** @constructor */
function OtherThingy() {
  /** @private */
  var foo = 0

  /** @protected */
  this._bar = 1

  /** @package */
  this.baz = 2

  /** @public */
  this.pez = 3
}
```

## Related Links

- [@global](./global.md)
- [@instance](./instance.md)
- [@package](./package.md)
- [@private](./private.md)
- [@protected](./protected.md)
- [@public](./public.md)
- [@static](./static.md)
