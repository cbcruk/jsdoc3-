---
id: event
title: '@event'
sidebar_label: '@event'
---

## 문법

`@event <className>#[event:]<eventName>`

## 개요

@event 태그를 사용하면 발생할 수 있는 이벤트를 문서화할 수 있습니다. 일반적인 이벤트는 정의된 일련의 속성을 가진 객체로 표현됩니다.

특정 유형의 이벤트를 정의하기 위해 @event 태그를 사용한 후, @fires 태그를 사용하여 메서드가 해당 이벤트를 발생시킬 수 있음을 나타낼 수 있습니다. 또한 @listens 태그를 사용하여 기호가 이벤트를 수신하고 있음을 나타낼 수 있습니다.

JSDoc은 각 이벤트 이름 앞에 자동으로 네임스페이스 `event:`를 추가합니다. 일반적으로 다른 문서에서 이벤트에 링크할 때 이 네임스페이스를 포함해야 합니다. (@fires 태그는 예외이며, 네임스페이스를 생략할 수 있습니다.)

**참고**: JSDoc 3은 @event 문서 단위를 사용하여 이벤트의 내용을 문서화합니다. 반면, JSDoc Toolkit 2는 동일한 이름의 이벤트가 발생할 때 실행될 수 있는 함수를 식별하기 위해 @event 문서 단위를 사용했습니다.

## 예제

다음 예제는 `Hurl` 클래스에서 `snowball`이라는 이벤트를 문서화하는 방법을 보여줍니다. 해당 이벤트는 단일 속성을 가진 객체를 포함합니다.

이벤트로 함수 호출 문서화하기

```js
/**
 * 눈덩이를 던집니다.
 *
 * @fires Hurl#snowball
 */
Hurl.prototype.snowball = function () {
  /**
   * 눈덩이 이벤트.
   *
   * @event Hurl#snowball
   * @type {object}
   * @property {boolean} isPacked - 눈덩이가 단단하게 뭉쳐져 있는지를 나타냅니다.
   */
  this.emit('snowball', {
    isPacked: this._snowball.isPacked,
  })
}
```

명명된 문서 단위를 사용하여 이벤트 문서화하기

```js
/**
 * 눈덩이를 던집니다.
 *
 * @fires Hurl#snowball
 */
Hurl.prototype.snowball = function () {
  // ...
}

/**
 * 눈덩이 이벤트.
 *
 * @event Hurl#snowball
 * @type {object}
 * @property {boolean} isPacked - 눈덩이가 단단하게 뭉쳐져 있는지를 나타냅니다.
 */
```

## 관련 링크

- [@fires](./fires.md)
- [@listens](./listens.md)