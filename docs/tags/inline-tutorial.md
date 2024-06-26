---
id: inline-tutorial
title: '@tutorial'
sidebar_label: '@tutorial'
---

## Syntax

```js
{@tutorial tutorialID}
[link text]{@tutorial tutorialID}
{@tutorial tutorialID|link text}
{@tutorial tutorialID link text (after the first space)}
```

## Overview

The `@tutorial` inline tag creates a link to the tutorial identifier that you specify. When you use the `@tutorial` tag, you can also provide link text, using one of several different formats. If you don't provide any link text, JSDoc uses the tutorial's title as the link text.

If you need to link to a namepath or a URL, use the [`@link` inline tag](./inline-link.md) instead of the `@tutorial` tag.

## Examples

The following example shows all of the ways to provide link text for the `@tutorial` tag:

Providing link text

```js
/**
 * See {@tutorial gettingstarted} and [Configuring the Dashboard]{@tutorial dashboard}.
 * For more information, see {@tutorial create|Creating a Widget} and
 * {@tutorial destroy Destroying a Widget}.
 */
function myFunction() {}
```

If all of these tutorials are defined, and the title of the `gettingstarted` tutorial is "Getting Started," the example above produces output similar to the following:

Output for @link tags

```html
See <a href="tutorial-gettingstarted.html">Getting Started</a> and
<a href="tutorial-dashboard.html">Configuring the Dashboard</a>. For more
information, see <a href="tutorial-create.html">Creating a Widget</a> and
<a href="tutorial-destroy.html">Destroying a Widget</a>.
```

## Related Links

[@tutorial](./tutorial.md)
