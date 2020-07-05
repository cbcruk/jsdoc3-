---
id: yields
title: '@yields'
sidebar_label: '@yields'
---

## Synonyms

`@yield`

## Syntax

`@yields [{type}] [description]`

## Overview

The `@yields` tag documents the value that is yielded by a generator function. This tag is available in JSDoc 3.5.0 and later.

If you are documenting a regular function, use the [`@returns` tag](./returns.md) instead of this tag.

## Examples

@yields tag with a type

```js
/**
 * Generate the Fibonacci sequence of numbers.
 *
 * @yields {number}
 */
function* fibonacci() {}
```

@yields tag with a type and description

```js
/**
 * Generate the Fibonacci sequence of numbers.
 *
 * @yields {number} The next number in the Fibonacci sequence.
 */
function* fibonacci() {}
```

## Related Links

[@returns](./returns.md)
