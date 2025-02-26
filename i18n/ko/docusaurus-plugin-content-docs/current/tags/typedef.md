---
id: typedef
title: '@typedef'
sidebar_label: '@typedef'
---

## 문법

`@typedef [<type>] <namepath>`

## 개요

@typedef 태그는 사용자 정의 타입을 문서화하는 데 유용합니다. 특히 이 타입을 반복적으로 참조하려는 경우에 유용합니다. 이러한 타입은 [@type](./type.md) 또는 [@param](./param.md)과 같이 타입을 기대하는 다른 태그 내에서 사용될 수 있습니다.

콜백 함수의 타입을 문서화하려면 [@callback](./callback.md) 태그를 사용하십시오.

## 예제

이 예제는 숫자나 숫자를 나타내는 문자열을 포함할 수 있는 매개변수를 위한 유니온 타입을 정의합니다.

@typedef 태그 사용

```js
/**
 * 숫자 또는 숫자를 포함하는 문자열.
 * @typedef {(number|string)} NumberLike
 */

/**
 * 마법의 숫자를 설정합니다.
 * @param {NumberLike} x - 마법의 숫자.
 */
function setMagicNumber(x) {}
```

이 예제는 여러 속성을 가진 복잡한 타입인 객체를 정의하고 그 이름 경로를 설정하여 해당 타입을 사용하는 클래스와 함께 표시되도록 합니다. 타입 정의가 실제로 클래스에 의해 노출되지 않기 때문에, 보통 타입 정의를 내부 멤버로 문서화하는 것이 관례입니다.

클래스를 위한 복잡한 타입을 문서화하기 위해 @typedef 사용

```js
/**
 * 완전한 트라이포스 또는 트라이포스의 하나 이상의 구성 요소.
 * @typedef {Object} WishGranter~Triforce
 * @property {boolean} hasCourage - 용기의 구성 요소가 존재하는지 여부를 나타냅니다.
 * @property {boolean} hasPower - 힘의 구성 요소가 존재하는지 여부를 나타냅니다.
 * @property {boolean} hasWisdom - 지혜의 구성 요소가 존재하는지 여부를 나타냅니다.
 */

/**
 * 트라이포스에 의해 전력화된 소원을 이루어주는 클래스.
 * @class
 * @param {...WishGranter~Triforce} triforce - 트라이포스의 모든 세 가지 구성 요소를 포함하는 하나에서 세 개의 {@link WishGranter~Triforce} 객체.
 */
function WishGranter(triforce) {}
```

## 관련 링크

- [@callback](./callback.md)
- [@param](./param.md)
- [@type](./type.md)