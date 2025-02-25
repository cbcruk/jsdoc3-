---
id: abstract
title: '@abstract'
sidebar_label: '@abstract'
---

## 동의어

`@virtual`

## 개요

@abstract 태그는 멤버를 상속받는 객체가 반드시 구현(또는 재정의)해야 하는 멤버를 식별합니다.

## 예시

추상 메서드를 가진 부모 클래스와 메서드를 구현하는 자식 클래스

```js
/**
 * 일반적인 유제품.
 * @constructor
 */
function DairyProduct() {}

/**
 * 유제품이 실온에서 고체인지 여부를 확인합니다.
 * @abstract
 * @return {boolean}
 */
DairyProduct.prototype.isSolid = function () {
  throw new Error('서브클래스에서 구현해야 합니다!')
}

/**
 * 시원하고 상쾌한 우유.
 * @constructor
 * @augments DairyProduct
 */
function Milk() {}

/**
 * 우유가 실온에서 고체인지 여부를 확인합니다.
 * @return {boolean} 항상 false를 반환합니다.
 */
Milk.prototype.isSolid = function () {
  return false
}
```