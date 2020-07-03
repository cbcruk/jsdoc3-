---
id: global
title: @global
sidebar_label: @global
---

## Overview

The @global tag specifies that a symbol should appear in the documentation as a _global_ symbol. JSDoc ignores the symbol's actual scope within the source file. This tag is especially useful for symbols that are defined locally, then assigned to a global symbol.

## Examples

Use the @global tag to specify that a symbol should be documented as global.

Document an inner variable as a global

```js
(function() {
  /** @global */
  var foo = "hello foo";

  this.foo = foo;
}.apply(window));
```

## Related Links

- [@inner](./inner.md)
- [@instance](./instance.md)
- [@memberof](./memberof.md)
- [@static](./static.md)
