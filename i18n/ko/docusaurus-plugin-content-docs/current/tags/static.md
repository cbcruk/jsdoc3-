---
id: static
title: '@static'
sidebar_label: '@static'
---

## 개요

@static 태그는 기호가 상위에 포함되어 있고 상위를 인스턴스화하지 않고도 접근할 수 있음을 나타냅니다.

@static 태그를 사용하면 기호의 기본 범위가 재정의되며, 한 가지 예외가 있습니다: 전역 범위의 기호는 여전히 전역으로 남아 있습니다.

## 예시

다음 예시는 "@function MyNamespace.myFunction"을 작성하고 @memberof 및 @static 태그를 생략하는 것과 같은 효과를 갖습니다:

가상 설명에서 @static 사용하기

```js
/** @namespace MyNamespace */

/**
 * @function myFunction
 * @memberof MyNamespace
 * @static
 */
```

다음 예시는 모듈의 내부 멤버가 정적 멤버로 문서화되도록 강제합니다:

기본 범위를 재정의하기 위해 @static 사용하기

```js
/** @module Rollerskate */

/**
 * 'wheel' 변수가 Rollerskate~wheel이 아니라 Rollerskate.wheel로 문서화됩니다.
 * @static
 */
var wheel = 1
```

## 관련 링크

- [@global](./global.md)
- [@inner](./inner.md)
- [@instance](./instance.md)