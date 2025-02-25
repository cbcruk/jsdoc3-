---
id: global
title: '@global'
sidebar_label: '@global'
---

## 개요

`@global` 태그는 기호가 문서에서 _전역_ 기호로 나타나야 함을 명시합니다. JSDoc는 소스 파일 내에서 기호의 실제 범위를 무시합니다. 이 태그는 로컬로 정의된 다음 전역 기호에 할당되는 기호에 특히 유용합니다.

## 예제

`@global` 태그를 사용하여 기호가 전역으로 문서화되어야 함을 지정합니다.

내부 변수를 전역으로 문서화하기

```js
;(function () {
  /** @global */
  var foo = 'hello foo'

  this.foo = foo
}.apply(window))
```

## 관련 링크

- [@inner](./inner.md)
- [@instance](./instance.md)
- [@memberof](./memberof.md)
- [@static](./static.md)