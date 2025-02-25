---
id: constructs
title: '@constructs'
sidebar_label: '@constructs'
---

## 개요

객체 리터럴을 사용하여 클래스를 정의할 때(예: `@lends` 태그와 함께) `@constructs` 태그는 특정 함수가 해당 클래스의 인스턴스를 생성하는 데 사용될 것임을 문서화할 수 있게 해줍니다.

## 문법

`@constructs [<name>]`

## 예시

@lends와 함께 @constructs 태그 사용

```js
var Person = makeClass(
  /** @lends Person.prototype */
  {
    /** @constructs */
    initialize: function (name) {
      this.name = name
    },
    /** 나를 설명해주세요. */
    say: function (message) {
      return this.name + '가 말하기: ' + message
    },
  }
)
```

@lends 없이 클래스 이름을 제공해야 합니다.

```js
makeClass(
  'Menu',
  /**
   * @constructs Menu
   * @param items
   */
  function (items) {},
  {
    /** @memberof Menu# */
    show: function () {},
  }
)
```

## 관련 링크

[@lends](./lends.md)