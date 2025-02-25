---
id: mixes
title: '@mixes'
sidebar_label: '@mixes'
---

## 구문

`@mixes <OtherObjectPath>`

## 개요

@makes 태그는 현재 객체가 `OtherObjectPath`에서 모든 멤버를 혼합한다는 것을 나타냅니다. 이는 [@mixin](./mixin.md)입니다.

## 예제

먼저, [@mixin](./mixin.md) 태그로 믹스를 문서화합니다:

@mixin의 예

```js
/**
 * 이 메서드는 이벤트 처리를 위해 사용됩니다. 
 * 직접 사용하기 위한 것이 아닙니다.
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
   * 이벤트를 발생시켜 해당 이벤트 이름에 대한 모든 핸들러를 실행합니다.
   * @param {string} eventName - 이벤트 이름.
   * @param {Object} eventData - 각 핸들러에 제공되는 데이터.
   */
  fire: function (eventName, eventData) {
    // 코드...
  },
}
```

이제 FormButton 클래스를 추가하고, 모든 Eventful 함수를 FormButton에 믹스하는 "mix" 함수를 호출하여 FormButton이 이벤트를 발생시키고 리스너를 가질 수 있도록 합니다. 우리는 @mixes 태그를 사용하여 FormButton이 Eventful 함수를 혼합한다고 나타냅니다.

@makes 태그 사용

```js
/**
 * @constructor FormButton
 * @mixes Eventful
 */
var FormButton = function () {
  // 코드...
}
FormButton.prototype.press = function () {
  this.fire('press', {})
}
mix(Eventful).into(FormButton.prototype)
```

## 관련 링크

- [@borrows](./borrows.md)
- [@class](./class.md)
- [@mixin](./mixin.md)