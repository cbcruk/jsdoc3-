---
id: version
title: '@version'
sidebar_label: '@version'
---

## 개요

항목의 버전을 문서화합니다. @version 태그 뒤의 텍스트는 항목의 버전을 나타내는 데 사용됩니다.

## 예제

@version 태그 사용

```js
/**
 * a * x = b 형태의 방정식을 풉니다. x의 값을 반환합니다.
 * @version 1.2.3
 * @tutorial solver
 */
function solver(a, b) {
  return b / a
}
```

## 관련 링크

[@since](./since.md)