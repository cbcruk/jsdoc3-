---
id: author
title: '@author'
sidebar_label: '@author'
---

## 구문

`@author <이름> [<이메일주소>]`

## 개요

@author 태그는 항목의 저자를 식별합니다. JSDoc 3.2 이후로 저자의 이름 뒤에 각괄호로 묶인 이메일 주소가 오는 경우, 기본 템플릿은 이메일 주소를 `mailto:` 링크로 변환합니다.

## 예제

항목의 저자를 문서화하기

```js
/**
 * @author Jane Smith <jsmith@example.com>
 */
function MyClass() {}
```

## 관련 링크

- [@file](./file.md)
- [@version](./version.md)