---
id: instance
title: '@instance'
sidebar_label: '@instance'
---

## 개요

@instance 태그를 사용하면 기호를 상위 기호의 인스턴스 멤버로 표시합니다. 이는 "Parent#Child"로 참조할 수 있음을 의미합니다.

@instance를 사용하면 doclet의 기본 범위를 재정의합니다(전역 범위에 있는 경우에는 전역으로 남습니다).

## 예제

다음 예제는 "@function MyNamespace#myFunction"을 작성하는 긴 방법입니다:

가상 doclet을 인스턴스 멤버로 만들기 위해 @instance 사용

```js
/** @namespace MyNamespace */
/**
 * myFunction은 이제 MyNamespace#myFunction입니다.
 * @function myFunction
 * @memberof MyNamespace
 * @instance
 */
```

더 유용하게, @instance 태그를 사용하여 JSDoc이 유추하는 범위를 재정의할 수 있습니다. 예를 들어, 정적 멤버가 인스턴스 멤버로 사용된다는 것을 나타낼 수 있습니다:

인스턴스 멤버를 식별하기 위해 @instance 사용

```js
/** @namespace */
var BaseObject = {
  /**
   * foo는 이제 BaseObject.foo가 아니라 BaseObject#foo입니다.
   * @instance
   */
  foo: null,
}

/** BaseObject 인스턴스를 생성합니다. */
function fooFactory(fooValue) {
  var props = { foo: fooValue }
  return Object.create(BaseObject, props)
}
```

## 관련 링크

- [@global](./global.md)
- [@inner](./inner.md)
- [@static](./static.md)