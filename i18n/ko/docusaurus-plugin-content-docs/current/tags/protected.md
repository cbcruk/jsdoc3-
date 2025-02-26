---
id: protected
title: '@protected'
sidebar_label: '@protected'
---

## 문법

JSDoc 태그 사전(기본적으로 활성화됨)에서는:

`@protected`

[Closure Compiler](https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler#jsdoc-tags) 태그 사전에서는:

`@protected [{typeExpression}]`

## 개요

`@protected` 태그는 기호를 보호된 것으로 표시합니다. 일반적으로 이 태그는 기호가 현재 모듈 내에서만 사용 가능하거나 사용되어야 함을 나타냅니다.

기본적으로 `@protected` 태그가 표시된 기호는 문서에 나타납니다. JSDoc 3.3.0 이후부터는 [`-a/--access` 명령어 옵션](../about/commandline.md)을 사용하여 이 동작을 변경할 수 있습니다.

`@protected` 태그는 `@access protected`와 동일합니다.

## 예제

다음 예제에서 인스턴스 멤버 `Thingy#_bar`는 생성된 문서에 나타나지만, 그것이 보호됨을 나타내는 주석이 포함됩니다:

@protected 태그 사용

```js
/** @constructor */
function Thingy() {
  /** @protected */
  this._bar = 1
}
```

## 관련 링크

- [@access](./access.md)
- [@global](./global.md)
- [@instance](./instance.md)
- [@package](./package.md)
- [@private](./private.md)
- [@public](./public.md)
- [@static](./static.md)