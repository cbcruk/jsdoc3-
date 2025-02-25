---
id: public
title: '@public'
sidebar_label: '@public'
---

## 개요

`@public` 태그는 심볼이 공개(public)된 것으로 문서화되어야 함을 나타냅니다.

기본적으로 JSDoc는 모든 심볼을 공개로 간주하므로 이 태그를 사용하는 것이 생성된 문서에 일반적으로 영향을 미치지 않습니다. 그러나 심볼을 공개로 만들고자 했다는 것을 다른 사람들이 분명히 알 수 있도록 `@public` 태그를 명시적으로 사용하는 것이 좋습니다.

JSDoc 3에서 `@public` 태그는 심볼의 범위(scope)에 영향을 미치지 않습니다. 심볼의 범위를 변경하려면 [`@instance`](./instance.md), [`@static`](./static.md), 및 [`@global`](./global.md) 태그를 사용하십시오.

## 예제

`@public` 태그 사용

```js
/**
 * Thingy 클래스는 모두에게 제공됩니다.
 * @public
 * @class
 */
function Thingy() {
  /**
   * Thingy~foo 멤버. 'foo'는 여전히 'Thingy'의 내부 멤버임을 주의하십시오.
   * @public
   */
  var foo = 0
}
```

## 관련 링크

- [@access](./access.md)
- [@global](./global.md)
- [@instance](./instance.md)
- [@package](./package.md)
- [@private](./private.md)
- [@protected](./protected.md)
- [@static](./static.md)