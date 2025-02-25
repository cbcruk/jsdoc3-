---
id: description
title: '@description'
sidebar_label: '@description'
---

## 동의어

`@desc`

## 문법

`@description <some description>`

## 개요

@description 태그를 사용하여 문서화하는 기호에 대한 일반적인 설명을 제공할 수 있습니다. 설명에는 HTML 마크업이 포함될 수 있으며, [Markdown 플러그인](../about/plugins-markdown.md)이 활성화된 경우 Markdown 형식을 포함할 수도 있습니다.

## 예제

JSDoc 주석의 처음 부분에서 기호를 설명할 때, 어떤 블록 태그를 사용하기 전에 @description 태그를 생략할 수 있습니다.

@description 태그 없이 기호 설명하기

```js
/**
 * 두 숫자를 더합니다.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b
}
```

@description 태그를 사용하면 JSDoc 주석의 어디서든 설명을 배치할 수 있습니다.

@description 태그로 기호 설명하기

```js
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @description 두 숫자를 더합니다.
 */
function add(a, b) {
  return a + b
}
```

JSDoc 주석의 처음 부분에 설명이 있고 @description 태그로 제공된 설명이 모두 있을 경우, @description으로 지정된 설명이 주석의 처음 부분에 있는 설명을 덮어쓰게 됩니다.

## 관련 링크

- [@classdesc](./classdesc.md)
- [@summary](./summary.md)