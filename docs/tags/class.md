---
id: class
title: @class
sidebar_label: @class
---

## Synonyms

`@constructor`

## Syntax

`@class [<type> <name>]`

## Overview

The @class tag marks a function as being a constructor, meant to be called with the new keyword to return an instance.

## Examples

A function that constructs Person instances.

```js
/**
 * Creates a new Person.
 * @class
 */
function Person() {}

var p = new Person();
```

## Related Links

[@constructs](./constructs.md)
