---
id: default
title: '@default'
sidebar_label: '@default'
---

## 동의어

`@defaultvalue`

## 구문

`@default [<some value>]`

## 개요

@default 태그는 기호의 할당된 값을 문서화할 수 있게 해줍니다. 이 태그에 값을 직접 제공하거나, JSDoc이 소스 코드에서 값을 자동으로 문서화하도록 허용할 수 있습니다. 후자는 문서화된 기호가 문자열, 숫자, 불리언 또는 null 중 하나의 단일 간단한 값으로 할당되는 경우에만 가능합니다.

## 예제

이 예제에서는 상수를 문서화합니다. 상수의 값은 `0xff0000`입니다. @default 태그를 추가함으로써 이 값이 문서에 자동으로 추가됩니다.

상수의 숫자 값을 문서화하기

```js
/**
 *  @constant
 *  @default
 */
const RED = 0xff0000
```