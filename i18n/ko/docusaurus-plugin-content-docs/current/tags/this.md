---
id: this
title: '@this'
sidebar_label: '@this'
---

## 문법

`@this <namePath>`

## 개요

@this 태그는 다른 기호 내에서 사용될 때 `this` 키워드가 무엇을 참조하는지를 나타냅니다.

## 예제

다음 예제에서 @this 태그는 "this.name"이 전역 기호 "name"이 아닌 "Greeter#name"으로 문서화되도록 합니다.

```js
/** @constructor */
function Greeter(name) {
  setName.apply(this, name)
}

/** @this Greeter */
function setName(name) {
  /** 문서화 해주세요 */
  this.name = name
}
```

## 관련 링크

[@memberof](./memberof.md)