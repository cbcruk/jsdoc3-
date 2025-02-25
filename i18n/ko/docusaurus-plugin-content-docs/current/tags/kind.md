---
id: kind
title: '@kind'
sidebar_label: '@kind'
---

## 문법

`@kind <kindName>`

여기서 `<kindName>`은 다음 중 하나입니다:

- class
- constant
- event
- external
- file
- function
- member
- mixin
- module
- namespace
- typedef

## 개요

@kind 태그는 어떤 _종류_의 심볼이 문서화되고 있는지를 문서화하는 데 사용됩니다 (예: 클래스 또는 모듈). 심볼의 _종류_는 심볼의 _타입_ (예: 문자열 또는 불리언)과 다릅니다.

일반적으로 @kind 태그는 필요하지 않습니다. 심볼의 종류는 doclet의 다른 태그에 의해 결정됩니다. 예를 들어, @class 태그를 사용하면 자동으로 "@kind class"가 암시되고, @namespace 태그를 사용하면 "@kind namespace"가 암시됩니다.

## 예제

@kind 사용하기

```js
// 다음 예제는 동일한 결과를 생성합니다:

/**
 * 상수입니다.
 * @kind constant
 */
const asdf = 1

/**
 * 상수입니다.
 * @constant
 */
const asdf = 1
```

상충하는 종류를 가진 태그의 경우 (예: @module과 함께 사용하여 종류를 "module"로 설정하고 "@kind constant"를 사용하여 종류를 "constant"로 설정하는 경우), 마지막 태그가 종류를 결정합니다.

상충하는 @kind 문장

```js
/**
 * 이는 상수로 표시됩니다.
 * @module myModule
 * @kind constant
 */

/**
 * 이는 모듈로 표시됩니다.
 * @kind constant
 * @module myModule
 */
```

## 관련 링크

[@type](./type.md)