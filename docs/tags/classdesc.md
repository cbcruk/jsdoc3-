---
id: classdesc
title: @classdesc
sidebar_label: @classdesc
---

## Syntax

`@classdesc <some description>`

## Overview

The @classdesc tag is used to provide a description for a class, separate from the constructor function's description. Use the @classdesc tag in combination with the [@class (or @constructor) tag](./class.md).

The functionality of the @classdesc tag in JSDoc 3 duplicates that of the @class in previous versions. As of version 3, the syntax and functionality of the @class tag now exactly matches the @constructor tag, and the @classdesc tag more explicitly communicates its purpose: to document a class's description.

## Examples

As shown below, a class has places for two descriptions, one applies to the function itself, while the other applies to the class in general.

A doclet with both a constructor function description and a class description

```js
/**
 * This is a description of the MyClass constructor function.
 * @class
 * @classdesc This is a description of the MyClass class.
 */
function MyClass() {}
```

## Related Links

- [@class](./class.md)
- [@description](./description.md)
