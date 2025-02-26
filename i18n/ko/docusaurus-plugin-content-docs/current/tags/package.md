---
id: package
title: '@package'
sidebar_label: '@package'
---

## 문법

JSDoc 태그 사전을 사용하는 경우(기본적으로 활성화됨):

`@package`

[Closure Compiler](https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler#jsdoc-tags) 태그 사전을 사용하는 경우:

`@package [{typeExpression}]`

## 개요

`@package` 태그는 기호를 패키지 전용으로 표시합니다. 일반적으로 이 태그는 기호가 이 기호의 소스 파일과 동일한 디렉토리에 있는 코드에만 사용 가능하다는 것을 나타냅니다. 이 태그는 JSDoc 3.5.0 이상에서 사용할 수 있습니다.

기본적으로 `@package` 태그로 표시된 기호는 문서에 나타납니다. JSDoc 3.3.0 이상에서는 [`-a/--access` 명령줄 옵션](../about/commandline.md)을 사용하여 이 동작을 변경할 수 있습니다.

`@package` 태그는 `@access package`와 동일합니다.

## 예제

다음 예제에서 인스턴스 멤버 `Thingy#_bar`는 생성된 문서에 나타나지만 패키지 전용임을 나타내는 주석이 추가됩니다:

@package 태그 사용

```js
/** @constructor */
function Thingy() {
  /** @package */
  this._bar = 1
}
```

## 관련 링크

- [@access](./access.md)
- [@global](./global.md)
- [@instance](./instance.md)
- [@private](./private.md)
- [@protected](./protected.md)
- [@public](./public.md)
- [@static](./static.md)