# @tutorial

[[toc]]

## Syntax

`@tutorial`

## Overview

The `@tutorial` tag inserts a link to a tutorial file that is provided as part of the documentation. See the [tutorials overview](../about/tutorials.md) for instructions on creating tutorials.

You can use the `@tutorial` tag more than once in a single JSDoc comment.

## Examples

In the following example, the documentation for `MyClass` will link to the tutorials that have the identifiers `tutorial-1` and `tutorial-2`:

Using the @tutorial tag

```js
/**
 * Description
 * @class
 * @tutorial tutorial-1
 * @tutorial tutorial-2
 */
function MyClass() {}
```

## Related Links

- [Tutorials](../about/tutorials.md)
- [{@tutorial}](./inline-tutorial.md)
- [@see](./see.md)
