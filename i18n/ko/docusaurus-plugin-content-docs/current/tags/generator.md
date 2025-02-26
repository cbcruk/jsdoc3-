---
id: generator
title: '@generator'
sidebar_label: '@generator'
---

## 문법

`@generator`

## 개요

`@generator` 태그는 함수가 [제너레이터 함수](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)임을 나타내며, 이는 `function* foo() {}` 구문을 사용하여 선언되었다는 것을 의미합니다. 이 태그는 JSDoc 3.5.0 이상에서 사용할 수 있습니다.

일반적으로 이 태그를 사용할 필요는 없습니다. JSDoc은 자동으로 제너레이터 함수를 감지하고 생성된 문서에서 이를 식별합니다. 그러나 코드에 나타나지 않는 제너레이터 함수에 대한 가상 주석을 작성하는 경우, 이 태그를 사용하여 JSDoc에 해당 함수가 제너레이터 함수임을 알릴 수 있습니다.

## 예시

다음 예시는 `@generator` 태그를 사용하는 가상 주석을 보여줍니다:

`@generator` 태그를 가진 가상 주석

```js
/**
 * 피보나치 수열에서 숫자를 생성합니다.
 *
 * @generator
 * @function fibonacci
 * @yields {number} 피보나치 수열의 다음 숫자.
 */
```