---
id: listens
title: '@listens'
sidebar_label: '@listens'
---

## 문법

`@listens <eventName>`

## 개요

`@listens` 태그는 기호가 지정된 사건을 듣고 있음을 나타냅니다. 사건의 내용을 문서화하려면 [`@event 태그`](./event.md)를 사용하세요.

## 예제

다음 예제는 `module:hurler~event:snowball`이라는 이름의 사건과 이 사건을 듣고 있는 `module:playground/monitor.reportThrowage`라는 메서드를 문서화하는 방법을 보여줍니다.

사건과 그 리스너 문서화하기

```js
define('hurler', [], function () {
  /**
   * 눈덩이가 던져졌다는 사건을 보고합니다.
   *
   * @event module:hurler~snowball
   * @property {number} velocity - 눈덩이의 속도(초당 미터).
   */

  /**
   * 눈덩이를 던지는 모듈입니다.
   *
   * @module hurler
   */
  var exports = {
    /**
     * 무고한(혹은 유죄인) 사람에게 눈덩이를 던집니다.
     *
     * @method
     * @fires module:hurler~snowball
     */
    attack: function () {
      this.emit('snowball', { velocity: 10 })
    },
  }

  return exports
})

define('playground/monitor', [], function () {
  /**
   * 눈덩이를 던지는 사람을 감시합니다.
   *
   * @module playground/monitor
   */
  var exports = {
    /**
     * 눈덩이가 던져졌다고 보고합니다.
     *
     * @method
     * @param {module:hurler~event:snowball} e - 눈덩이 사건.
     * @listens module:hurler~event:snowball
     */
    reportThrowage: function (e) {
      this.log('눈덩이가 던져졌습니다: 속도 ' + e.velocity)
    },
  }

  return exports
})
```

## 관련 링크

- [@event](./event.md)
- [@fires](./fires.md)