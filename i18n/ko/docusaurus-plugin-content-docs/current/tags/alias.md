---
id: alias
title: '@alias'
sidebar_label: '@alias'
---

## 문법

`@alias <aliasNamepath>`

## 개요

@alias 태그는 JSDoc이 멤버에 대한 모든 참조를 해당 멤버가 다른 이름을 가진 것처럼 처리하게 합니다. 이 태그는 특히 내부 함수 내에서 클래스를 정의하는 경우 유용하며, 이 경우 @alias 태그를 사용하여 JSDoc에 클래스가 애플리케이션에서 어떻게 노출되는지를 알릴 수 있습니다.

@alias 태그는 @name 태그와 유사하게 들릴 수 있지만 이 태그들은 매우 다르게 작동합니다. @name 태그는 JSDoc에게 주석과 관련된 코드를 무시하도록 지시합니다. 예를 들어, JSDoc이 다음 코드를 처리할 때, `bar`에 대한 주석이 함수에 연결되어 있다는 사실을 무시합니다:

```js
/**
 * Bar 함수.
 * @name bar
 */
function foo() {}
```

@alias 태그는 JSDoc에게 멤버 A가 실제로는 멤버 B라는 것을 가장하도록 지시합니다. 예를 들어, JSDoc이 다음 코드를 처리할 때 `foo`가 함수임을 인식하고 문서에서 `foo`의 이름을 `bar`로 바꿉니다:

```js
/**
 * Bar 함수.
 * @alias bar
 */
function foo() {}
```

## 예제

클래스를 정의할 때 생성자 함수를 전달하는 것을 기대하는 클래스 프레임워크를 사용한다고 가정해 보겠습니다. @alias 태그를 사용하여 JSDoc에 클래스가 애플리케이션에서 어떻게 노출될 것인지를 알릴 수 있습니다.

다음 예제에서 @alias 태그는 JSDoc에게 익명 함수를 "trackr.CookieManager" 클래스의 생성자인 것처럼 처리하라고 지시합니다. 함수 내에서 JSDoc은 `this` 키워드를 trackr.CookieManager에 상대적으로 해석하므로 "value" 메소드는 이름 경로 "trackr.CookieManager#value"를 갖습니다.

익명 생성자 함수와 함께 @alias 사용

```js
Klass(
  'trackr.CookieManager',

  /**
   * @class
   * @alias trackr.CookieManager
   * @param {Object} kv
   */
  function (kv) {
    /** 값. */
    this.value = kv
  }
)
```

즉시 호출된 함수 표현식(IIFE) 내에서 생성된 멤버와 함께 @alias 태그를 사용할 수도 있습니다. @alias 태그는 JSDoc에게 이러한 멤버가 IIFE의 범위 외부에 노출된다고 알립니다.

네임스페이스의 정적 멤버에 대한 @alias 사용

```js
/** @namespace */
var Apple = {}

;(function (ns) {
  /**
   * @namespace
   * @alias Apple.Core
   */
  var core = {}

  /** Apple.Core.seed로 문서화됨 */
  core.seed = function () {}

  ns.Core = core
})(Apple)
```

객체 리터럴 내에서 정의된 멤버에 대해 @alias 태그를 사용할 수 있으며, 이는 [@lends](./lends.md) 태그의 대안으로 사용할 수 있습니다.

객체 리터럴에 대한 @alias 사용

```js
// @alias로 objectA 문서화

var objectA = (function () {
  /**
   * objectA로 문서화됨
   * @alias objectA
   * @namespace
   */
  var x = {
    /**
     * objectA.myProperty로 문서화됨
     * @member
     */
    myProperty: 'foo',
  }

  return x
})()

// @lends로 objectB 문서화

/**
 * objectB로 문서화됨
 * @namespace
 */
var objectB = (function () {
  /** @lends objectB */
  var x = {
    /**
     * objectB.myProperty로 문서화됨
     * @member
     */
    myProperty: 'bar',
  }

  return x
})()
```

## 관련 링크

- [@name](./name.md)
- [@lends](./lends.md)