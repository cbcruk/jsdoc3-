---
id: yields
title: '@yields'
sidebar_label: '@yields'
---

## 동의어

`@yield`

## 구문

`@yields [{type}] [description]`

## 개요

`@yields` 태그는 제너레이터 함수가 생성하는 값을 문서화합니다. 이 태그는 JSDoc 3.5.0 이상에서 사용 가능합니다.

일반 함수에 대해 문서화하는 경우, 이 태그 대신 [`@returns` 태그](./returns.md)를 사용하세요.

## 예시

형식이 있는 @yields 태그

```js
/**
 * 피보나치 수열을 생성합니다.
 *
 * @yields {number}
 */
function* fibonacci() {}
```

형식 및 설명이 있는 @yields 태그

```js
/**
 * 피보나치 수열을 생성합니다.
 *
 * @yields {number} 피보나치 수열의 다음 숫자입니다.
 */
function* fibonacci() {}
```

## 관련 링크

[@returns](./returns.md)