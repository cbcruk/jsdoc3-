---
id: access
title: '@access'
sidebar_label: '@access'
---

## 문법

`@access <package|private|protected|public>`

## 개요

`@access` 태그는 멤버의 접근 수준을 지정합니다. `@access` 태그는 다른 태그의 동의어로 사용할 수 있습니다:

- `@access package`는 `@package`와 동일합니다. 이 옵션은 JSDoc 3.5.0 이상에서 사용 가능합니다.
- `@access private`는 `@private`와 동일합니다.
- `@access protected`는 `@protected`와 동일합니다.
- `@access public`은 `@public`과 동일합니다.

개인 멤버는 `-p/--private` 명령줄 옵션을 사용하여 JSDoc을 실행하지 않는 한, 생성된 출력에 표시되지 않습니다. JSDoc 3.3.0 이상에서는 [`-a/--access` 명령줄 옵션](../about/commandline.md)을 사용하여 이 동작을 변경할 수도 있습니다.

문서 객체의 _접근 수준_은 _범위_와 다르다는 점에 유의하세요. 예를 들어, `Parent`가 `@public`으로 문서화된 내부 변수 `child`를 가지고 있다면, `child` 변수는 여전히 `Parent~child`라는 이름 경로를 가진 내부 변수로 처리됩니다. 즉, 변수는 공개적이지만 여전히 내부 범위를 가집니다. 문서 객체의 범위를 변경하려면 [`@instance`](./instance.md), [`@static`](./static.md) 및 [`@global`](./global.md) 태그를 사용하세요.

## 예제

다른 태그의 동의어로서 @access 사용

```js
/** @constructor */
function Thingy() {
  /** @access private */
  var foo = 0

  /** @access protected */
  this._bar = 1

  /** @access package */
  this.baz = 2

  /** @access public */
  this.pez = 3
}

// 동일한...

/** @constructor */
function OtherThingy() {
  /** @private */
  var foo = 0

  /** @protected */
  this._bar = 1

  /** @package */
  this.baz = 2

  /** @public */
  this.pez = 3
}
```

## 관련 링크

- [@global](./global.md)
- [@instance](./instance.md)
- [@package](./package.md)
- [@private](./private.md)
- [@protected](./protected.md)
- [@public](./public.md)
- [@static](./static.md)