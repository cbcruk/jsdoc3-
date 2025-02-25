---
id: async
title: '@async'
sidebar_label: '@async'
---

## 문법

`@async`

## 개요

`@async` 태그는 함수가 [비동기](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)임을 나타내며, 이는 `async function foo() {}` 문법을 사용하여 선언되었음을 의미합니다. 콜백을 제공하는 함수와 같은 다른 유형의 비동기 함수에는 이 태그를 사용하지 마십시오. 이 태그는 JSDoc 3.5.0 이상에서 사용할 수 있습니다.

일반적으로 JSDoc은 비동기 함수를 자동으로 감지하고 생성된 문서에서 이를 식별하므로 이 태그를 사용할 필요가 없습니다. 그러나 코드에 나타나지 않는 비동기 함수에 대한 가상 주석을 작성하는 경우, 이 태그를 사용하여 JSDoc에 함수가 비동기임을 알릴 수 있습니다.

## 예제

다음 예제는 `@async` 태그를 사용하는 가상 주석을 보여줍니다:

@async 태그가 있는 가상 주석

```js
/**
 * 지정된 URL에서 데이터를 다운로드합니다.
 *
 * @async
 * @function downloadData
 * @param {string} url - 다운로드할 URL입니다.
 * @return {Promise<string>} URL에서 가져온 데이터입니다.
 */
```