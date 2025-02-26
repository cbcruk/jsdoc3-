---
id: tutorial
title: '@tutorial'
sidebar_label: '@tutorial'
---

## 문법

`@tutorial`

## 개요

`@tutorial` 태그는 문서의 일부로 제공되는 튜토리얼 파일에 대한 링크를 삽입합니다. 튜토리얼을 만드는 방법에 대한 지침은 [튜토리얼 개요](../about/tutorials.md)를 참조하십시오.

하나의 JSDoc 주석에서 `@tutorial` 태그를 여러 번 사용할 수 있습니다.

## 예제

다음 예제에서 `MyClass`에 대한 문서는 `tutorial-1` 및 `tutorial-2` 식별자를 가진 튜토리얼에 링크됩니다:

`@tutorial` 태그 사용

```js
/**
 * 설명
 * @class
 * @tutorial tutorial-1
 * @tutorial tutorial-2
 */
function MyClass() {}
```

## 관련 링크

- [튜토리얼](../about/tutorials.md)
- [@tutorial](./inline-tutorial.md)
- [@see](./see.md)