---
id: private
title: @private
sidebar_label: @private
---

## Syntax

With the JSDoc tag dictionary (enabled by default):

`@private`

With the [Closure Compiler](https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler#jsdoc-tags) tag dictionary:

`@private [{typeExpression}]`

## Overview

The `@private` tag marks a symbol as private, or not meant for general use. Private members are not shown in the generated output unless JSDoc is run with the `-p/--private` command-line option. In JSDoc 3.3.0 and later, you can also use the [`-a/--access` command-line option](../about/commandline.md) to change this behavior.

The `@private` tag is not inherited by child members. For example, if the `@private` tag is added to a namespace, members of the namespace can still appear in the generated output; because the namespace is private, the members' namepath will not include the namespace.

The `@private` tag is equivalent to `@access private`.

## Examples

In the following example, `Documents` and `Documents.Newspaper` appear in the generated documentation, but not `Documents.Diary`.

Using the @private tag

```js
/** @namespace */
var Documents = {
  /**
   * An ordinary newspaper.
   */
  Newspaper: 1,
  /**
   * My diary.
   * @private
   */
  Diary: 2
};
```

## Related Links

- [@access](./access.md)
- [@global](./global.md)
- [@instance](./instance.md)
- [@package](./package.md)
- [@protected](./protected.md)
- [@public](./public.md)
- [@static](./static.md)
