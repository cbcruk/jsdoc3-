---
id: inner
title: '@inner'
sidebar_label: '@inner'
---

## 개요

@inner 태그를 사용하면 기호를 상위 기호의 내부 멤버로 표시합니다. 이는 "부모~자식" 형태로 참조할 수 있음을 의미합니다.

@inner를 사용하면 doclet의 기본 범위를 재정의합니다 (전역 범위에 있는 경우를 제외하고, 이 경우 전역으로 남아 있습니다).

## 예제

@inner를 사용하여 가상 doclet을 내부 멤버로 만드는 경우

```js
/** @namespace MyNamespace */
/**
 * myFunction은 이제 MyNamespace~myFunction입니다.
 * @function myFunction
 * @memberof MyNamespace
 * @inner
 */
```

위의 경우 @memberof 및 @inner 태그 대신 "@function MyNamespace~myFunction"을 사용할 수 있었음을 주의하세요.

@inner 사용

```js
/** @namespace */
var MyNamespace = {
  /**
   * foo는 이제 MyNamespace~foo이며 MyNamespace.foo가 아닙니다.
   * @inner
   */
  foo: 1,
}
```

위 예제에서는 @inner를 사용하여 네임스페이스의 멤버가 내부 멤버로 문서화되도록 강제합니다 (기본적으로 이는 정적 멤버가 됩니다). 이는 `foo`가 이제 `MyNamespace.foo` 대신 `MyNamespace~foo`라는 긴 이름을 갖게 됨을 의미합니다.

## 관련 링크

- [@global](./global.md)
- [@instance](./instance.md)
- [@static](./static.md)