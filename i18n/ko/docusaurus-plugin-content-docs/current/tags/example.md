---
id: example
title: '@example'
sidebar_label: '@example'
---

## 개요

문서화된 항목을 사용하는 방법에 대한 예제를 제공합니다. 이 태그 뒤에 오는 텍스트는 강조된 코드로 표시됩니다.

## 예제

문서화된 요소는 여러 개의 예제를 가질 수 있습니다.

예제 문서화

```js
/**
 * a * x = b 형태의 방정식을 풉니다.
 * @example
 * // 2를 반환합니다.
 * globalNS.method1(5, 10);
 * @example
 * // 3을 반환합니다.
 * globalNS.method(5, 15);
 * @returns {Number} 방정식의 x 값을 반환합니다.
 */
globalNS.method1 = function (a, b) {
  return b / a
}
```

예제는 `@example` 태그 뒤에 `<caption></caption>`을 사용하여 캡션을 추가할 수도 있습니다.

캡션이 있는 예제 문서화

```js
/**
 * a * x = b 형태의 방정식을 풉니다.
 * @example <caption>method1의 예제 사용.</caption>
 * // 2를 반환합니다.
 * globalNS.method1(5, 10);
 * @returns {Number} 방정식의 x 값을 반환합니다.
 */
globalNS.method1 = function (a, b) {
  return b / a
}
```