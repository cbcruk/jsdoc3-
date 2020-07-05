---
id: protected
title: '@protected'
sidebar_label: '@protected'
---

## Syntax

With the JSDoc tag dictionary (enabled by default):

`@protected`

With the [Closure Compiler](https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler#jsdoc-tags) tag dictionary:

`@protected [{typeExpression}]`

## Overview

The `@protected` tag marks a symbol as protected. Typically, this tag indicates that a symbol is only available, or should only be used, within the current module.

By default, symbols marked with the `@protected` tag will appear in your documentation. In JSDoc 3.3.0 and later, you can use the [`-a/--access` command-line option](../about/commandline.md) to change this behavior.

The `@protected` tag is equivalent to `@access protected`.

## Examples

In the following example, the instance member `Thingy#_bar` appears in the generated documentation, but with an annotation indicating that it is protected:

Using the @protected tag

```js
/** @constructor */
function Thingy() {
  /** @protected */
  this._bar = 1
}
```

## Related Links

- [@access](./access.md)
- [@global](./global.md)
- [@instance](./instance.md)
- [@package](./package.md)
- [@private](./private.md)
- [@public](./public.md)
- [@static](./static.md)
