---
id: function
title: '@function'
sidebar_label: '@function'
---

## 동의어

- `@func`
- `@method`

## 구문

`@function [<FunctionName>]`

## 개요

이렇게 하면 개체가 함수로 표시되지만, 구문 분석기에는 그렇게 보이지 않을 수 있습니다. doclet의 [@kind](./kind.md)를 'function'으로 설정합니다.

## 예제

함수를 표시하기 위해 @function 사용하기.

```js
/** @function */
var paginate = paginateFactory(pages)
```

@function 태그가 없으면 `paginate` 객체는 일반 개체(즉, [@member](./member.md))로 문서화됩니다. 이는 코드의 해당 행을 검사하는 것만으로는 `paginate`가 실행될 때 어떤 유형의 값을 보유할지 알 수 없기 때문입니다.

이름과 함께 @function 사용하기.

```js
/** @function myFunction */

// 위 코드는 다음과 동일합니다:
/** @function
 * @name myFunction */
```