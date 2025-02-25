---
id: override
title: '@override'
sidebar_label: '@override'
---

## 개요

`@override` 태그는 기호가 부모 클래스에서 동일한 이름을 가진 기호를 오버라이드(재정의)함을 나타냅니다.

이 태그는 [Closure Compiler](https://developers.google.com/closure/compiler/)와의 호환성을 위해 제공됩니다. 기본적으로 JSDoc은 부모를 오버라이드하는 기호를 자동으로 식별합니다.

JSDoc 주석에 [`@inheritdoc` 태그](./inheritdoc.md)가 포함되어 있는 경우, `@override` 태그를 포함할 필요가 없습니다. `@inheritdoc` 태그의 존재는 `@override` 태그의 존재를 암시합니다.

## 예시

다음 예시는 메서드가 부모 클래스의 메서드를 오버라이드함을 나타내는 방법을 보여줍니다:

부모를 오버라이드하는 메서드

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

/**
 * 소켓을 엽니다.
 * @override
 */
Socket.prototype.open = function () {
  // ...
}
```

## 관련 링크

[@inheritdoc](./inheritdoc.md)