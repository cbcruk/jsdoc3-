---
id: es2015-classes
title: ES 2015 클래스
sidebar_label: ES 2015 클래스
---

JSDoc 3는 [ECMAScript 2015 사양](http://www.ecma-international.org/ecma-262/6.0/#sec-class-definitions)을 따르는 클래스를 문서화하는 것을 쉽게 만들어줍니다. ES 2015 클래스와 함께 `@class` 및 `@constructor`와 같은 태그를 사용할 필요가 없습니다. JSDoc는 코드를 파싱하여 클래스와 그 생성자를 자동으로 식별합니다. ES 2015 클래스는 JSDoc 3.4.0 이상에서 지원됩니다.

## 간단한 클래스 문서화하기

다음 예제는 생성자, 두 개의 인스턴스 메서드 및 하나의 정적 메서드를 가진 간단한 클래스를 문서화하는 방법을 보여줍니다:

간단한 ES 2015 클래스

```js
/** 점을 나타내는 클래스. */
class Point {
  /**
   * 점을 생성합니다.
   * @param {number} x - x 값.
   * @param {number} y - y 값.
   */
  constructor(x, y) {
    // ...
  }

  /**
   * x 값을 가져옵니다.
   * @return {number} x 값.
   */
  getX() {
    // ...
  }

  /**
   * y 값을 가져옵니다.
   * @return {number} y 값.
   */
  getY() {
    // ...
  }

  /**
   * 쉼표로 구분된 두 숫자를 포함하는 문자열을 점으로 변환합니다.
   * @param {string} str - 쉼표로 구분된 두 숫자를 포함하는 문자열.
   * @return {Point} Point 객체.
   */
  static fromString(str) {
    // ...
  }
}
```

클래스를 변수 또는 상수에 할당하는 클래스 표현식으로 정의된 클래스도 문서화할 수 있습니다:

ES 2015 클래스 표현식

```js
/** 점을 나타내는 클래스. */
const Point = class {
  // 계속
};
```

## 클래스 확장하기

기존 클래스를 확장하기 위해 `extends` 키워드를 사용할 때, 어떤 클래스를 확장하는지 JSDoc에 알려주어야 합니다. 이를 [`@augments` (또는 `@extends`) 태그](../tags/augments.md)로 수행합니다.

예를 들어, 위에서 설명한 `Point` 클래스를 확장하는 경우:

ES 2015 클래스 확장하기

```js
/**
 * 점을 나타내는 클래스.
 * @extends Point
 */
class Dot extends Point {
  /**
   * 점을 생성합니다.
   * @param {number} x - x 값.
   * @param {number} y - y 값.
   * @param {number} width - 점의 폭(픽셀 단위).
   */
  constructor(x, y, width) {
    // ...
  }

  /**
   * 점의 폭을 가져옵니다.
   * @return {number} 점의 폭(픽셀 단위).
   */
  getWidth() {
    // ...
  }
}
```

## 관련 링크

[@augments](../tags/augments.md)