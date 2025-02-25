---
id: readonly
title: '@readonly'
sidebar_label: '@readonly'
---

## 개요

@readonly 태그는 기호가 읽기 전용임을 나타냅니다. 이는 문서화 목적으로만 사용되며, JSDoc는 코드에서 기호를 실제로 읽기 전용으로 취급했는지 여부를 확인하지 않습니다.

## 예시

@readonly 태그 사용하기

```js
/**
 * 상수입니다.
 * @readonly
 * @const {number}
 */
const FOO = 1
```

getter와 함께 @readonly 태그 사용하기

```js
/**
 * 맛있는 파이 한 조각을 주문하기 위한 옵션입니다.
 * @namespace
 */
var pieOptions = {
  /**
   * 일반적인.
   */
  plain: '파이',
  /**
   * 알라모드.
   * @readonly
   */
  get aLaMode() {
    return this.plain + ' 아이스크림과 함께'
  },
}
```