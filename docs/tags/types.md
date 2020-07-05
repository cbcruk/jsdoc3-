---
id: types
title: '@type'
sidebar_label: '@type'
---

## Syntax

`@type {typeName}`

## Overview

The @type tag allows you to provide a type expression identifying the type of value that a symbol may contain, or the type of value returned by a function. You can also include type expressions with many other JSDoc tags, such as the [@param tag](./param.md).

A type expression can include the JSDoc namepath to a symbol (for example, `myNamespace.MyClass`); a built-in JavaScript type (for example, `string`); or a combination of these. You can use any [Google Closure Compiler type expression](https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler#type-expressions), as well as several other formats that are specific to JSDoc.

If JSDoc determines that a type expression is invalid, it will display an error and stop running. You can turn this error into a warning by running JSDoc with the `--lenient` option.

**Note**: Full support for Google Closure Compiler-style type expressions is available in JSDoc 3.2 and later. Earlier versions of JSDoc included partial support for Closure Compiler type expressions.

Each type is specified by providing a type expression, using one of the formats described below. Where appropriate, JSDoc will automatically create links to the documentation for other symbols. For example, `@type {MyClass}` will link to the MyClass documentation if that symbol has been documented.

<!-- | Type name | Syntax example | Description |
| --------- | -------------- | ----------- | -->

### Symbol name (name expression)

```
{boolean}
{myNamespace.MyClass}
```

Specifies the name of a symbol. If you have documented the symbol, JSDoc creates a link to the documentation for that symbol.

### Multiple types (type union)

**This can be a number or a boolean.**

```
{number | boolean}
```

This means a value can have one of several types, with the entire list of types enclosed in parentheses and separated by `|`.

### Arrays and objects (type applications and record types)

**An array of MyClass instances.**

```
{Array.<MyClass>}
// or:
{MyClass[]}
```

**An object with string keys and number values:**

```
{Object.<string, number>}
```

**An object called 'myObj' with properties 'a' (a number), 'b' (a string) and 'c' (any type).**

```
{{a: number, b: string, c}} myObj
// or:
{Object} myObj
{number} myObj.a
{string} myObj.b
{} myObj.c
```

JSDoc supports Closure Compiler's syntax for defining array and object types.

You can also indicate an array by appending `[]` to the type that is contained in the array. For example, the expression `string[]` indicates an array of strings.

For objects that have a known set of properties, you can use Closure Compiler's syntax for documenting record types. You can document each property individually, which enables you to provide more detailed information about each property.

### Nullable type

**A number or null.**

```
{?number}
```

This indicates that the type is either the specified type, or `null`.

### Non-nullable type

**A number, but never null.**

```
{!number}
```

Indicates that the value is of the specified type, but cannot be `null`.

### Variable number of that type

**This function accepts a variable number of numeric parameters.**

```
@param {...number} num
```

Indicates that the function accepts a variable number of parameters, and specifies a type for the parameters. For example:

```js
/**
 * Returns the sum of all numbers passed to the function.
 * @param {...number} num A positive or negative number
 */
function sum(num) {
  var i = 0,
    n = arguments.length,
    t = 0
  for (; i < n; i++) {
    t += arguments[i]
  }
  return t
}
```

### Optional parameter

**An optional parameter named foo.**

```
@param {number} [foo]
// or:
@param {number=} foo
```

**An optional parameter foo with default value 1.**

```
@param {number} [foo=1]
```

Indicates that the parameter is optional. When using JSDoc's syntax for optional parameters, you can also indicate the value that will be used if a parameter is omitted.

### Callbacks

```js
/**
 * @callback myCallback
 * @param {number} x - ...
 */

;/ @type {myCallback} /
var cb
```

Document a callback using the [@callback](./callback.md) tag. The syntax is identical to the @typedef tag, except that a callback's type is always "function."

### Type definitions

**Documenting a type with properties 'id', 'name', 'age'.**

```js
/**
 * @typedef PropertiesHash
 * @type {object}
 * @property {string} id - an ID.
 * @property {string} name - your name.
 * @property {number} age - your age.
 */

/** @type {PropertiesHash} */
var props
```

You can document complex types using the [@typedef](./typedef.md) tag, then refer to the type definition elsewhere in your documentation.

## Examples

Example

```js
/** @type {(string|Array.)} */
var foo
/** @type {number} */
var bar = 1
```

In many cases, you can include a type expression as part of another tag, rather than including a separate @type tag in your JSDoc comment.

Type expressions can accompany many tags.

```js
/**
 * @type {number}
 * @const
 */
var FOO = 1

// same as:

/** @const {number} */
var FOO = 1
```

## Related Links

- [@callback](./callback.md)
- [@typedef](./typedef.md)
- [@param](./param.md)
- [@property](./property.md)
