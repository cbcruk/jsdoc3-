---
id: see
title: '@see'
sidebar_label: '@see'
---

## 구문

- `@see <namepath>`
- `@see <text>`

## 개요

@see 태그는 문서화되고 있는 항목과 관련이 있을 수 있는 다른 심볼이나 자원을 참조할 수 있게 해줍니다. 심볼의 namepath 또는 자유 형식의 텍스트 중 하나를 제공할 수 있습니다. namepath를 제공하면, JSDoc의 기본 템플릿은 namepath를 자동으로 링크로 변환합니다.

## 예제

@see 태그 사용하기

```js
/**
 * 이 두 가지는 모두 bar 함수로 링크됩니다.
 * @see {@link bar}
 * @see bar
 */
function foo() {}

// 자유 형식 설명 내에 링크를 포함하기 위해 inline @link 태그를 사용합니다.
/**
 * 추가 정보는 @see {@link foo}를 참조하세요.
 * @see {@link http://github.com|GitHub}
 */
function bar() {}
```

## 관련 링크

[@link](./inline-link.md)