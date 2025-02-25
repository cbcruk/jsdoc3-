---
id: returns
title: '@returns'
sidebar_label: '@returns'
---

## 동의어

`@return`

## 문법

`@returns [{type}] [description]`

## 개요

`@returns` 태그는 함수가 반환하는 값을 문서화합니다.

생성기 함수를 문서화하는 경우, 이 태그 대신 [`@yields` 태그](./yields.md)를 사용하십시오.

## 예제

타입이 있는 반환 값

```js
/**
 * a와 b의 합계를 반환합니다.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sum(a, b) {
  return a + b
}
```

타입과 설명이 있는 반환 값

```js
/**
 * a와 b의 합계를 반환합니다.
 * @param {number} a
 * @param {number} b
 * @returns {number} a와 b의 합계
 */
function sum(a, b) {
  return a + b
}
```

다양한 타입이 있는 반환 값

```js
/**
 * a와 b의 합계를 반환합니다.
 * @param {number} a
 * @param {number} b
 * @param {boolean} retArr true로 설정하면 함수가 배열을 반환합니다.
 * @returns {(number|Array)} a와 b의 합계 또는 a, b 및 a와 b의 합계를 포함하는 배열입니다.
 */
function sum(a, b, retArr) {
  if (retArr) {
    return [a, b, a + b]
  }
  return a + b
}
```

프라미스를 반환합니다.

```js
/**
 * a와 b의 합계를 반환합니다.
 * @param {number} a
 * @param {number} b
 * @returns {Promise} a와 b의 합계를 나타내는 Promise 객체
 */
function sumAsync(a, b) {
  return new Promise(function (resolve, reject) {
    resolve(a + b)
  })
}
```

## 관련 링크

- [@param](./param.md)
- [@yields](./yields.md)