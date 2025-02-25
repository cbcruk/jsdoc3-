---
id: interface
title: '@interface'
sidebar_label: '@interface'
---

## 구문

JSDoc 태그 사전(기본적으로 활성화됨)을 사용하여:

`@interface [<name>]`

[Closure Compiler](https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler#jsdoc-tags) 태그 사전을 사용하여:

`@interface`

## 개요

`@interface` 태그는 다른 심볼이 구현할 수 있는 인터페이스로 심볼을 표시합니다. 예를 들어, 여러분의 코드는 메소드와 속성이 스텁 처리된 부모 클래스를 정의할 수 있습니다. 자식 클래스가 부모 클래스의 메소드와 속성을 구현해야 함을 나타내기 위해 부모 클래스에 `@interface` 태그를 추가할 수 있습니다.

인터페이스의 최상위 심볼(예: 생성자 함수)에 `@interface` 태그를 추가하세요. 인터페이스의 각 구성원(예: 인터페이스의 인스턴스 메소드)마다 `@interface` 태그를 추가할 필요는 없습니다.

기본적으로 활성화된 JSDoc 태그 사전을 사용하는 경우, 인터페이스를 정의하기 위해 코드 대신 가상 주석을 사용할 수도 있습니다. "[인터페이스를 정의하는 가상 주석](#virtual-comments)"에서 예제를 확인하세요.

## 예제

다음 예제에서 `Color` 함수는 다른 클래스가 구현할 수 있는 인터페이스를 나타냅니다:

@interface 태그 사용

```js
/**
 * 색상을 나타내는 클래스의 인터페이스입니다.
 *
 * @interface
 */
function Color() {}

/**
 * 색상을 0과 1 사이의 소수로 표현된 빨강, 초록, 파랑 값의 배열로 가져옵니다.
 *
 * @returns {Array<number>} 빨강, 초록, 파랑 값이 그 순서대로 포함된 배열입니다.
 */
Color.prototype.rgb = function () {
  throw new Error('구현되지 않음')
}
```

다음 예제는 코드 대신 가상 주석을 사용하여 `Color` 인터페이스를 정의합니다:

인터페이스를 정의하는 가상 주석

```js
/**
 * 색상을 나타내는 클래스의 인터페이스입니다.
 *
 * @interface Color
 */

/**
 * 색상을 0과 1 사이의 소수로 표현된 빨강, 초록, 파랑 값의 배열로 가져옵니다.
 *
 * @function
 * @name Color#rgb
 * @returns {Array<number>} 빨강, 초록, 파랑 값이 그 순서대로 포함된 배열입니다.
 */
```

## 관련 링크

[@implements](./implements.md)