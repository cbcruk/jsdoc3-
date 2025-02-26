---
id: exports
title: '@exports'
sidebar_label: '@exports'
---

## 구문

`@exports <moduleName>`

JSDoc 3.3.0 이후 버전에서는 `<moduleName>`에 `module:` 접두사를 포함할 수 있습니다. 이전 버전에서는 이 접두사를 생략해야 합니다.

## 개요

JS 모듈에서 "exports" 객체나 "module.exports" 속성 외에 다른 것을 내보낼 때 @exports 태그를 사용합니다.

## 예제

특별한 "exports" 객체를 사용하는 모듈에서는 @exports 태그가 필요하지 않습니다. JSDoc는 이 객체의 멤버가 내보내지고 있음을 자동으로 인식합니다. 마찬가지로, JSDoc는 Node.js 모듈에서 특별한 "module.exports" 속성을 자동으로 인식합니다.

공통JS 모듈

```js
/**
 * 안녕!이라고 말하는 모듈입니다.
 * @module hello/world
 */

/** 인사 말하기. */
exports.sayHello = function () {
  return 'Hello world'
}
```

Node.js 모듈

```js
/**
 * 안녕!이라고 소리치는 모듈입니다.
 * @module hello/world
 */

/** 인사 말하기. */
module.exports = function () {
  return 'HELLO WORLD'
}
```

객체 리터럴을 내보내는 AMD 모듈

```js
define(function () {
  /**
   * 안녕!이라고 속삭이는 모듈입니다.
   * @module hello/world
   */
  var exports = {}

  /** 인사 말하기. */
  exports.sayHello = function () {
    return 'hello world'
  }

  return exports
})
```

생성자를 내보내는 AMD 모듈

```js
define(function () {
  /**
   * 인사하는 사람을 만드는 모듈입니다.
   * @module greeter
   */

  /**
   * @constructor
   * @param {string} subject - 인사할 대상.
   */
  var exports = function (subject) {
    this.subject = subject || 'world'
  }

  /** 대상에게 인사하기. */
  exports.prototype.sayHello = function () {
    return 'Hello ' + this.subject
  }

  return exports
})
```

모듈이 "exports" 또는 "module.exports"가 아닌 이름으로 객체를 내보내는 경우, 내보내는 것을 나타내기 위해 @exports 태그를 사용하세요.

객체를 내보내는 AMD 모듈

```js
define(function () {
  /**
   * 안녕!이라고 말하는 모듈입니다.
   * @exports hello/world
   */
  var ns = {}

  /** 인사 말하기. */
  ns.sayHello = function () {
    return 'Hello world'
  }

  return ns
})
```

## 관련 링크

- [@module](./module.md)
- [CommonJS 모듈](../howto/commonjs-modules.md)
- [AMD 모듈](../howto/amd-modules.md)