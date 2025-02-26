---
id: namespace
title: '@namespace'
sidebar_label: '@namespace'
---

## 문법

`@namespace [[{<type>}] <SomeName>]`

## 개요

@namespace 태그는 객체가 자신의 구성원을 위한 네임스페이스를 생성함을 나타냅니다. 코드에서 사용되는 네임스페이스를 정의하는 가상 JSDoc 주석을 작성할 수도 있습니다.

네임스페이스가 객체 리터럴이 아닌 기호로 정의되는 경우, @namespace 태그와 함께 타입 표현식을 포함할 수 있습니다. @namespace 태그에 타입이 포함된 경우, 이름도 포함해야 합니다.

"#" 또는 "!"와 같은 특이한 문자가 포함된 네임스페이스의 이름을 문서화해야 할 경우, 해당 특이한 문자가 포함된 네임스페이스의 일부 주위에 따옴표를 추가해야 합니다. 자세한 내용은 아래 예제를 참조하십시오.

## 예제

객체와 함께 @namespace 태그 사용

```js
/**
 * 내 네임스페이스.
 * @namespace
 */
var MyNamespace = {
  /** MyNamespace.foo로 문서화됨 */
  foo: function () {},
  /** MyNamespace.bar로 문서화됨 */
  bar: 1,
}
```

가상 주석을 위한 @namespace 태그 사용

```js
/**
 * 네임스페이스.
 * @namespace MyNamespace
 */

/**
 * MyNamespace의 함수 (MyNamespace.myFunction).
 * @function myFunction
 * @memberof MyNamespace
 */
```

@namespace에 특이한 문자 이름을 가진 기호가 포함된 경우, 기호의 이름을 큰 따옴표로 묶어야 합니다. 기호의 이름에 이미 하나 이상의 큰 따옴표가 포함된 경우, 큰 따옴표를 선행 백슬래시 (\\)로 이스케이프해야 합니다.

특이한 구성원 이름과 함께 @namespace 태그 사용

```js
/** @namespace window */

/**
 * alert 함수의 약어입니다.
 * {@link window."!"}로 참조하십시오 (큰 따옴표에 유의).
 */
window['!'] = function (msg) {
  alert(msg)
}
```

## 관련 링크

[@module](./module.md)