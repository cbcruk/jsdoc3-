---
id: memberof
title: '@memberof'
sidebar_label: '@memberof'
---

## 구문

- `@memberof <부모 이름 경로>`
- `@memberof! <부모 이름 경로>`

## 개요

`@memberof` 태그는 부모 심볼에 속하는 멤버 심볼을 식별합니다.

기본적으로 `@memberof` 태그는 멤버 심볼을 정적 멤버로 문서화합니다. 내부 멤버 및 인스턴스 멤버의 경우, 이름 경로 뒤에 범위 구분 기호를 사용할 수 있으며, 또는 [@inner](./inner.md) 또는 [@instance](./instance.md) 태그를 추가할 수 있습니다.

"강제" `@memberof` 태그인 `@memberof!`는 객체가 다른 부모를 가진 것처럼 보여도 특정 부모에 속하는 것으로 문서화되도록 강제합니다.

## 예제

다음 예제에서 `hammer` 함수는 일반적으로 전역 함수로 문서화됩니다. 사실 이 함수는 전역 함수이지만, 또한 `Tools` 네임스페이스의 멤버이므로 그렇게 문서화하고자 하는 것입니다. 해결책은 `@memberof` 태그를 추가하는 것입니다:

`@memberof` 사용하기

```js
/** @namespace */
var Tools = {}

/** @memberof Tools */
var hammer = function () {}

Tools.hammer = hammer
```

클래스의 인스턴스 멤버의 경우, "@memberof ClassName.prototype" 또는 "@memberof ClassName#" 구문을 사용합니다. 또는 "@memberof ClassName"과 "@instance" 태그를 결합할 수 있습니다.

클래스 프로토타입과 함께 `@memberof` 사용하기

```js
/** @class Observable */
create('Observable', {
  /**
   * 이것은 정적 멤버인 Observable.cache가 됩니다.
   * @memberof Observable
   */
  cache: [],

  /**
   * 이것은 인스턴스 멤버인 Observable#publish가 됩니다.
   * @memberof Observable.prototype
   */
  publish: function (msg) {},

  /**
   * 이것은 또한 인스턴스 멤버인 Observable#save가 됩니다.
   * @memberof Observable#
   */
  save: function () {},

  /**
   * 이것은 또한 인스턴스 멤버인 Observable#end가 됩니다.
   * @memberof Observable
   * @instance
   */
  end: function () {},
})
```

다음 예제는 강제된 `@memberof` 태그인 `@memberof!`를 사용하여 클래스(Data)의 인스턴스 멤버인 객체의 속성(Data#point)을 문서화합니다.

`@property` 태그를 사용하여 속성을 문서화할 때, 해당 속성을 긴 이름으로 링크할 수 없습니다. `@alias`와 `@memberof!`를 사용하여 속성이 `Data#point.y`가 아니라 "Data#"의 "point.y" 멤버로 문서화되어야 한다고 JSDoc에 알림으로써 속성을 링크할 수 있게 강제할 수 있습니다.

객체 속성에 대해 `@memberof!` 사용하기

```js
/** @class */
function Data() {
  /**
   * @type {object}
   * @property {number} y 이것은 `Data#point`의 속성으로 표시되지만,
   * {@link Data#point.y}로 링크할 수 없습니다.
   */
  this.point = {
    /**
     * @alias와 @memberof! 태그는 JSDoc이
     * 속성을 `point.x` (rather than `x`)로 문서화하고
     * `Data#`의 멤버가 되도록 강제합니다. 
     * {@link Data#point.x}로 속성을 링크할 수 있습니다.
     * @alias point.x
     * @memberof! Data#
     */
    x: 0,
    y: 1,
  }
}
```

## 관련 링크

[@name](./name.md)