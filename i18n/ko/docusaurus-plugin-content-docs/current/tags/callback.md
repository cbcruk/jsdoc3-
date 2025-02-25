---
id: callback
title: '@callback'
sidebar_label: '@callback'
---

## 구문

`@callback <namepath>`

## 개요

`@callback` 태그는 다른 함수에 전달될 수 있는 콜백 함수에 대한 정보를 제공하며, 콜백의 매개변수와 반환 값을 포함합니다. `@method`에 제공할 수 있는 모든 태그를 포함할 수 있습니다.

콜백을 정의한 후, `@typedef` 태그로 정의된 사용자 지정 유형과 같은 방식으로 사용할 수 있습니다. 특히, 콜백의 이름을 타입 이름으로 사용할 수 있습니다. 이를 통해 함수 매개변수가 특정 유형의 콜백을 포함해야 함을 나타낼 수 있습니다.

콜백이 특정 클래스의 타입 정의와 함께 표시되도록 하려면, 해당 클래스의 내부 함수임을 나타내는 이름 경로를 콜백에 부여할 수 있습니다. 또한 여러 클래스에서 참조되는 전역 콜백 타입을 정의할 수도 있습니다.

## 예제

클래스 특정 콜백 문서화

```js
/**
 * @class
 */
function Requester() {}

/**
 * 요청을 보냅니다.
 * @param {Requester~requestCallback} cb - 응답을 처리하는 콜백입니다.
 */
Requester.prototype.send = function (cb) {
  // 코드
}

/**
 * 이 콜백은 Requester 클래스의 일부로 표시됩니다.
 * @callback Requester~requestCallback
 * @param {number} responseCode
 * @param {string} responseMessage
 */
```

전역 콜백 문서화

```js
/**
 * @class
 */
function Requester() {}

/**
 * 요청을 보냅니다.
 * @param {requestCallback} cb - 응답을 처리하는 콜백입니다.
 */
Requester.prototype.send = function (cb) {
  // 코드
}

/**
 * 이 콜백은 전역 구성원으로 표시됩니다.
 * @callback requestCallback
 * @param {number} responseCode
 * @param {string} responseMessage
 */
```

## 관련 링크

- [@function](./function.md)
- [@typedef](./typedef.md)