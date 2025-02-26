---
id: fires
title: '@fires'
sidebar_label: '@fires'
---

## 동의어

`@emits`

## 구문

`@fires <className>#[event:]<eventName>`

## 개요

@fires 태그는 메서드가 호출될 때 지정된 유형의 이벤트를 발생시킬 수 있음을 나타냅니다. 이벤트의 내용을 문서화하려면 [@event 태그](./event.md)를 사용하세요.

## 예시

'drain' 이벤트를 발생시키는 메서드

```js
/**
 * 밀크셰이크를 마십니다.
 *
 * @fires Milkshake#drain
 */
Milkshake.prototype.drink = function () {
  // ...
}
```

## 관련 링크

- [@event](./event.md)
- [@listens](./listens.md)