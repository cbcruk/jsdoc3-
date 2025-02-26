---
id: member
title: '@member'
sidebar_label: '@member'
---

## 동의어

`@var`

## 구문

`@member [<type>] [<name>]`

## 개요

@member 태그는 "class", "function", "constant"과 같이 더 전문화된 종류가 없는 모든 멤버를 식별합니다. 멤버는 선택적으로 타입과 이름을 가질 수 있습니다.

## 예제

Data#point와 함께 @member 사용하기

```js
/** @class */
function Data() {
  /** @member {Object} */
  this.point = {}
}
```

@member의 동의어인 @var를 사용하여 (가상) 변수 'foo'를 문서화하는 예입니다.

가상 멤버를 문서화하기 위해 @var 사용하기

```js
/**
 * 전역 네임스페이스에서 'foo'라는 변수.
 * @var {number} foo
 */
```

위의 예는 다음과 동등합니다:

```js
/**
 * 전역 네임스페이스에서 'foo'라는 변수.
 * @type {number}
 */
var foo
```