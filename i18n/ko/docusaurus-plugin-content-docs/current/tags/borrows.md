---
id: borrows
title: '@borrows'
sidebar_label: '@borrows'
---

## 문법

`@borrows <that namepath> as <this namepath>`

## 개요

@borrows 태그는 문서에 다른 기호에 대한 문서를 추가할 수 있게 해줍니다.

이 태그는 함수에 대한 참조 방식이 여러 개 있을 때 유용하며, 두 곳에서 동일한 문서를 중복 작성하지 않기를 원할 때 사용됩니다.

## 예제

이 예제에서는 "trstr" 함수에 대한 문서가 존재하지만, "util.trim"은 다른 이름으로 같은 함수를 참조하는 것입니다.

trstr의 문서를 util.trim으로 중복합니다.

```js
/**
 * @namespace
 * @borrows trstr as trim
 */
var util = {
  trim: trstr,
}

/**
 * 문자열 주변의 공백을 제거합니다.
 * @param {string} str
 */
function trstr(str) {}
```