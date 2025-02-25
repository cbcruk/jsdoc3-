---
id: class
title: '@class'
sidebar_label: '@class'
---

## 동의어

`@constructor`

## 구문

`@class [<type> <name>]`

## 개요

@class 태그는 함수를 생성자로 표시하며, 새로운 인스턴스를 반환하기 위해 new 키워드와 함께 호출되어야 합니다.

## 예시

Person 인스턴스를 생성하는 함수.

```js
/**
 * 새로운 Person을 생성합니다.
 * @class
 */
function Person() {}

var p = new Person()
```

## 관련 링크

[@constructs](./constructs.md)