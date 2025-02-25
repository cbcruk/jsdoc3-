---
id: fires
title: '@fires'
sidebar_label: '@fires'
---

## Synonyms

`@emits`

## Syntax

`@fires <className>#[event:]<eventName>`

## Overview

The @fires tag indicates that a method can fire a specified type of event when it is called. Use the [@event tag](./event.md) to document the event's content.

## Examples

Method that fires a 'drain' event

```js
/**
 * Drink the milkshake.
 *
 * @fires Milkshake#drain
 */
Milkshake.prototype.drink = function () {
  // ...
}
```

## Related Links

- [@event](./event.md)
- [@listens](./listens.md)
