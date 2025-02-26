---
id: name
title: '@name'
sidebar_label: '@name'
---

## 문법

`@name <namePath>`

## 개요

@name 태그는 JSDoc에게 주어진 이름과 JSDoc 주석의 나머지를 연결하도록 강제하며, 주변 코드는 무시합니다. 이 태그는 코드에서 쉽게 볼 수 없는 기호, 예를 들어 런타임에 생성되는 메서드와 같은 "가상 주석"에 사용하면 좋습니다.

@name 태그를 사용할 때는, 문서화하고 있는 기호의 종류, 기호가 다른 기호의 구성원인지 여부 등을 JSDoc에게 알려주는 추가 태그를 제공해야 합니다. 이 정보를 제공하지 않으면 기호가 올바르게 문서화되지 않습니다.

**경고**: @name 태그를 사용함으로써 JSDoc에게 _주변 코드를 무시하고_ 문서화 주석을 독립적으로 처리하도록 지시하는 것입니다. 많은 경우, 기호의 이름을 문서에서 변경하지만 기호에 대한 다른 정보는 보존하는 [@alias 태그](./alias.md)를 사용하는 것이 더 좋습니다.

## 예시

다음 예시는 JSDoc이 일반적으로 인식하지 못하는 함수를 문서화하기 위해 @name 태그를 사용하는 방법을 보여줍니다.

@name 태그 사용

```js
/**
 * @name highlightSearchTerm
 * @function
 * @global
 * @param {string} term - 강조할 검색어.
 */
eval('window.highlightSearchTerm = function(term) {};')
```

## 관련 링크

- [JSDoc 3와 함께 namepath 사용하기](../about/namepaths.md)
- [@alias](./alias.md)