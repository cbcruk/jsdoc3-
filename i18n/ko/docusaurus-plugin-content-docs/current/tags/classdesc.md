---
id: classdesc
title: '@classdesc'
sidebar_label: '@classdesc'
---

## 문법

`@classdesc <some description>`

## 개요

@classdesc 태그는 생성자 함수의 설명과 구분된 클래스에 대한 설명을 제공하는 데 사용됩니다. [@class (또는 @constructor) 태그](./class.md)와 함께 @classdesc 태그를 사용하세요.

JSDoc 3에서 @classdesc 태그의 기능은 이전 버전의 @class와 동일합니다. 버전 3부터 @class 태그의 문법과 기능은 이제 @constructor 태그와 완전히 일치하며, @classdesc 태그는 클래스의 설명을 문서화하기 위한 목적을 보다 명확하게 전달합니다.

## 예시

아래와 같이 클래스에는 두 개의 설명을 위한 자리가 있으며, 하나는 함수 자체에, 다른 하나는 클래스를 일반적으로 적용합니다.

생성자 함수 설명과 클래스 설명이 모두 포함된 문서화 블록

```js
/**
 * 이것은 MyClass 생성자 함수에 대한 설명입니다.
 * @class
 * @classdesc 이것은 MyClass 클래스에 대한 설명입니다.
 */
function MyClass() {}
```

## 관련 링크

- [@class](./class.md)
- [@description](./description.md)