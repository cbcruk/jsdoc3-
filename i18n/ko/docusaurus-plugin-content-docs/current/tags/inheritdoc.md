---
id: inheritdoc
title: '@inheritdoc'
sidebar_label: '@inheritdoc'
---

## 개요

`@inheritdoc` 태그는 심볼이 부모 클래스의 문서를 상속받아야 함을 나타냅니다. JSDoc 주석에 포함하는 다른 태그는 무시됩니다.

이 태그는 [Closure Compiler](https://developers.google.com/closure/compiler/)와 호환성을 위해 제공됩니다. 기본적으로, 심볼에 JSDoc 주석을 추가하지 않으면, 심볼은 부모로부터 문서를 상속받습니다.

`@inheritdoc` 태그의 존재는 [`@override` 태그](./override.md)의 존재를 의미합니다.

## 예시

다음 예시는 클래스가 부모 클래스의 문서를 상속받는 방법을 보여줍니다:

부모 클래스로부터 상속받는 클래스

```js
/**
 * @classdesc 네트워크 연결을 나타내는 추상 클래스입니다.
 * @class
 */
function Connection() {}

/**
 * 연결을 엽니다.
 */
Connection.prototype.open = function () {
  // ...
}

/**
 * @classdesc 소켓 연결을 나타내는 클래스입니다.
 * @class
 * @augments Connection
 */
function Socket() {}

/** @inheritdoc */
Socket.prototype.open = function () {
  // ...
}
```

`Socket#open`에서 JSDoc 주석을 생략하여 같은 결과를 얻을 수 있습니다:

`@inheritdoc` 태그 없이 문서 상속하기

```js
/**
 * @classdesc 네트워크 연결을 나타내는 추상 클래스입니다.
 * @class
 */
function Connection() {}

/**
 * 연결을 엽니다.
 */
Connection.prototype.open = function () {
  // ...
}

/**
 * @classdesc 소켓 연결을 나타내는 클래스입니다.
 * @class
 * @augments Connection
 */
function Socket() {}

Socket.prototype.open = function () {
  // ...
}
```

## 관련 링크

[@override](./override.md)