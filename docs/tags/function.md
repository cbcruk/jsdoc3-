# @function

[[toc]]

## Synonyms

- `@func`
- `@method`

## Syntax

`@function [<FunctionName>]`

## Overview

This marks an object as being a function, even though it may not appear to be one to the parser. It sets the doclet's [@kind](./kind.md) to 'function'.

## Examples

Using @function to mark a function.

```js
/** @function */
var paginate = paginateFactory(pages);
```

Without the @function tag, the `paginate` object would be documented as a generic object (a [@member](./member.md)), because it isn't possible to tell from examining the line of code what type of value `paginate` will hold when it is run.

Using @function with a name.

```js
/** @function myFunction */

// the above is the same as:
/** @function
 * @name myFunction */
```
