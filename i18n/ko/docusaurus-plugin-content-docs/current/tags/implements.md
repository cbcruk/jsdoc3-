---
id: implements
title: '@implements'
sidebar_label: '@implements'
---

## 문법

`@implements {typeExpression}`

## 개요

`@implements` 태그는 특정 기호가 인터페이스를 구현함을 나타냅니다.

인터페이스를 구현하는 최상위 기호(예: 생성자 함수)에 `@implements` 태그를 추가하십시오. 구현의 각 구성원(예: 구현의 인스턴스 메서드)에 `@implements` 태그를 추가할 필요는 없습니다.

구현의 기호 중 하나를 문서화하지 않으면, JSDoc은 해당 기호에 대한 인터페이스의 문서를 자동으로 사용합니다.

## 예제

다음 예제에서 `TransparentColor` 클래스는 `Color` 인터페이스를 구현하고 `TransparentColor#rgba` 메서드를 추가합니다.

`@implements` 태그 사용

```js
/**
 * 색상을 나타내는 클래스의 인터페이스입니다.
 *
 * @interface
 */
function Color() {}

/**
 * 0과 1 사이의 소수점 숫자로 표현된 빨강, 초록, 파랑 값의 배열로 색상을 가져옵니다.
 *
 * @returns {Array<number>} 빨강, 초록, 파랑 값을 포함하는 배열,
 * 그 순서대로.
 */
Color.prototype.rgb = function () {
  throw new Error('구현되지 않음')
}

/**
 * 투명도 정보가 포함된 색상을 나타내는 클래스입니다.
 *
 * @class
 * @implements {Color}
 */
function TransparentColor() {}

// `Color#rgb`에서 문서를 상속받습니다.
TransparentColor.prototype.rgb = function () {
  // ...
}

/**
 * 0과 1 사이의 소수점 숫자로 표현된 빨강, 초록, 파랑 및 알파 값을 배열로 색상을 가져옵니다.
 *
 * @returns {Array<number>} 빨강, 초록, 파랑 및 알파 값을 포함하는 배열,
 * 그 순서대로.
 */
TransparentColor.prototype.rgba = function () {
  // ...
}
```

## 관련 링크

[@interface](./interface.md)