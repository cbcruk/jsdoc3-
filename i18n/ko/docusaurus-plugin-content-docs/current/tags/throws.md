---
id: throws
title: '@throws'
sidebar_label: '@throws'
---

## 동의어

`@exception`

## 구문

- `@throws 자유형 설명`
- `@throws {<유형>}`
- `@throws {<유형>} 자유형 설명`

## 개요

@throws 태그는 함수가 발생시킬 수 있는 오류를 문서화할 수 있도록 해줍니다. 단일 JSDoc 주석에서 @throws 태그를 여러 번 포함할 수 있습니다.

## 예제

유형과 함께 @throws 태그 사용

```js
/**
 * @throws {InvalidArgumentException}
 */
function foo(x) {}
```

설명과 함께 @throws 태그 사용

```js
/**
 * @throws 인수가 null일 경우 오류를 발생시킵니다.
 */
function bar(x) {}
```

유형과 설명과 함께 @throws 태그 사용

```js
/**
 * @throws {DivideByZero} 인수 x는 0이 아니어야 합니다.
 */
function baz(x) {}
```