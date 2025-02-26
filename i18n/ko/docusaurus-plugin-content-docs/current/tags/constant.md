---
id: constant
title: '@constant'
sidebar_label: '@constant'
---

## 동의어

`@const`

## 문법

`@constant [<type> <name>]`

## 개요

@constant 태그는 상수인 심볼에 속하는 문서로 마크하는 데 사용됩니다.

## 예제

이 예제에서는 문자열 상수를 문서화하고 있습니다. 코드가 `const` 키워드를 사용하고 있지만, 이는 JSDoc에서 필수는 아닙니다. JavaScript 호스트 환경이 아직 상수 선언을 지원하지 않는 경우, @const 문서는 `var` 선언에도 효과적으로 사용할 수 있습니다.

빨간색을 나타내는 문자열 상수

```js
/** @constant
        @type {string}
        @default
    */
const RED = 'FF0000'

/** @constant {number} */
var ONE = 1
```

예제에서 @type 태그에 타입이 제공된다는 점에 유의하세요. 이는 선택적입니다. 또한 선택적 @default 태그도 여기에서 사용되며, 이는 문서에 할당된 값을 자동으로 추가합니다 (예: 'FF0000').

## 관련 링크

- [@default](./default.md)
- [@type](./type.md)