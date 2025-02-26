---
id: mixin
title: '@mixin'
sidebar_label: '@mixin'
---

## 구문

`@mixin [<MixinName>]`

## 개요

믹스인은 다른 객체에 추가하기 위한 기능을 제공합니다. 원하면, @mixin 태그를 사용하여 객체가 믹스인임을 나타낼 수 있습니다. 그런 다음 믹스인을 사용하는 객체에 @mixes 태그를 추가할 수 있습니다.

## 예제

@mixin 사용하기

```js
/**
 * 이는 이벤트 처리를 위해 사용되는 메서드를 제공합니다. 직접 사용하기 위한 것이 아닙니다.
 *
 * @mixin
 */
var Eventful = {
  /**
   * 이 이벤트가 발생할 때 호출될 핸들러 함수를 등록합니다.
   * @param {string} eventName - 이벤트 이름.
   * @param {function(Object)} handler - 호출할 핸들러.
   */
  on: function (eventName, handler) {
    // 코드...
  },

  /**
   * 이벤트를 발생시켜 해당 이벤트 이름의 모든 핸들러가 실행되도록 합니다.
   * @param {string} eventName - 이벤트 이름.
   * @param {Object} eventData - 각 핸들러에 제공되는 데이터.
   */
  fire: function (eventName, eventData) {
    // 코드...
  },
}
```

## 관련 링크

- [@borrows](./borrows.md)
- [@class](./class.md)
- [@mixes](./mixes.md)