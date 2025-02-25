---
id: ignore
title: '@ignore'
sidebar_label: '@ignore'
---

## 개요

`@ignore` 태그는 코드 내의 기호가 문서에 나타나지 않아야 함을 나타냅니다. 이 태그는 모든 다른 태그보다 우선합니다.

기본 템플릿을 포함한 대부분의 JSDoc 템플릿에서 `@ignore` 태그는 다음과 같은 효과를 가집니다:

- `@class` 또는 `@module` 태그와 함께 `@ignore` 태그를 사용하면 전체 클래스나 모듈이 문서에서 생략됩니다.
- `@namespace` 태그와 함께 `@ignore` 태그를 사용하면 자식 클래스와 네임스페이스에도 `@ignore` 태그를 추가해야 합니다. 그렇지 않으면 문서에 자식 클래스와 네임스페이스가 나타나지만 이름이 불완전하게 표시됩니다.

## 예시

다음 예시에서 `Jacket`와 `Jacket#color`는 문서에 나타나지 않습니다.

`@ignore` 태그가 있는 클래스

```js
/**
 * @class
 * @ignore
 */
function Jacket() {
  /** 자켓의 색상. */
  this.color = null
}
```

다음 예시에서 `Clothes` 네임스페이스는 `Jacket` 클래스를 포함합니다. `@ignore` 태그는 `Clothes`와 `Clothes.Jacket` 모두에 추가해야 합니다. `Clothes`, `Clothes.Jacket`, 및 `Clothes.Jacket#color`는 문서에 나타나지 않습니다.

자식 클래스가 있는 네임스페이스

```js
/**
 * @namespace
 * @ignore
 */
var Clothes = {
  /**
   * @class
   * @ignore
   */
  Jacket: function () {
    /** 자켓의 색상. */
    this.color = null
  },
}
```