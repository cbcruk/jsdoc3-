---
id: deprecated
title: '@deprecated'
sidebar_label: '@deprecated'
---

## 문법

`@deprecated [<some text>]`

## 개요

@deprecated 태그는 코드 내의 기호가 더 이상 사용되지 않음을 표시합니다.

## 예제

@deprecated 태그를 단독으로 사용할 수 있으며, 사용 중단에 대한 추가 설명을 포함할 수도 있습니다.

구 버전의 함수가 버전 2.0부터 더 이상 사용되지 않음을 문서화합니다.

```js
/**
 * @deprecated since version 2.0
 */
function old() {}
```