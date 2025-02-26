---
id: amd-modules
title: AMD 모듈
sidebar_label: AMD 모듈
---

## 개요

JSDoc 3는 [비동기 모듈 정의(AMD) API](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)를 사용하는 모듈을 문서화할 수 있도록 합니다. 이 API는 [RequireJS](http://requirejs.org/)와 같은 라이브러리에서 구현됩니다. 이 페이지에서는 모듈이 사용하는 코딩 규칙에 따라 JSDoc에서 AMD 모듈을 문서화하는 방법을 설명합니다.

CommonJS 또는 Node.js 모듈을 문서화하는 경우 [CommonJS 모듈](./commonjs-modules.md)을 참조하십시오.

## 모듈 식별자

AMD 모듈을 문서화할 때는 [`@exports` 태그](../tags/exports.md) 또는 [`@module` 태그](../tags/module.md)를 사용하여 `require()` 함수에 전달되는 식별자를 문서화합니다. 예를 들어, 사용자가 `require('my/shirt', /* callback */)`를 호출하여 모듈을 로드하면, `@exports my/shirt` 또는 `@module my/shirt` 태그를 포함하는 JSDoc 주석을 작성할 수 있습니다. 아래의 예제가 이 태그 중 어떤 것을 사용할지 결정하는 데 도움이 될 수 있습니다.

값이 없는 `@exports` 또는 `@module` 태그를 사용할 경우, JSDoc는 파일 경로를 기반으로 올바른 모듈 식별자를 추측하려고 시도합니다.

다른 JSDoc 주석에서 모듈을 참조하기 위해 JSDoc [namepath](../about/namepaths.md)를 사용하는 경우, 접두사 `module:`를 추가해야 합니다. 예를 들어, `my/pants` 모듈의 문서가 `my/shirt` 모듈에 연결되기를 원한다면, 다음과 같이 [`@see` 태그](../tags/see.md)를 사용할 수 있습니다:

```js
/**
 * 바지 모듈.
 * @module my/pants
 * @see module:my/shirt
 */
```

유사하게, 모듈의 각 멤버에 대한 namepath는 `module:`로 시작하고, 그 다음 모듈 이름이 옵니다. 예를 들어, `my/pants` 모듈이 `Jeans` 생성자를 내보내고, `Jeans`에 `hem`이라는 인스턴스 메소드가 있다면, 인스턴스 메소드의 긴 이름은 `module:my/pants.Jeans#hem`이 됩니다.

## 객체 리터럴을 반환하는 함수

AMD 모듈을 객체 리터럴을 반환하는 함수로 정의하는 경우, [`@exports` 태그](../tags/exports.md)를 사용하여 모듈의 이름을 문서화합니다. JSDoc는 객체의 속성이 모듈의 멤버임을 자동으로 감지합니다.

객체 리터럴을 반환하는 함수

```js
define("my/shirt", function() {
  /**
   * 셔트를 나타내는 모듈.
   * @exports my/shirt
   */
  var shirt = {
    /** 모듈의 `color` 속성. */
    color: "black",

    /**
     * 새 터틀넥을 생성합니다.
     * @class
     * @param {string} size - 사이즈(`XS`, `S`, `M`, `L`, `XL`, 또는 `XXL`).
     */
    Turtleneck: function(size) {
      /** 클래스의 `size` 속성. */
      this.size = size;
    }
  };

  return shirt;
});
```

## 다른 함수를 반환하는 함수

모듈을 생성자로서 다른 함수를 내보내는 함수로 정의하는 경우, 독립적인 주석에 [`@module` 태그](../tags/module.md)를 사용하여 모듈을 문서화할 수 있습니다. 그런 다음 [`@alias` 태그](../tags/alias.md)를 사용하여 JSDoc에 함수가 모듈과 동일한 긴 이름을 사용한다고 알릴 수 있습니다.

생성자를 반환하는 함수

```js
/**
 * 재킷을 나타내는 모듈.
 * @module my/jacket
 */
define("my/jacket", function() {
  /**
   * 새 재킷을 생성합니다.
   * @class
   * @alias module:my/jacket
   */
  var Jacket = function() {
    // ...
  };

  /** 재킷을 zip 합니다. */
  Jacket.prototype.zip = function() {
    // ...
  };

  return Jacket;
});
```

## 반환 문에서 선언된 모듈

함수의 `return` 문에서 모듈 객체를 선언하는 경우, 독립적인 주석에 [`@module` 태그](../tags/module.md)를 사용하여 모듈을 문서화합니다. 그런 다음 [`@alias` 태그](../tags/alias.md)를 추가하여 JSDoc에 모듈 객체가 모듈과 동일한 긴 이름을 가진다고 알릴 수 있습니다.

반환 문에서 선언된 모듈

```js
/**
 * 셔트를 나타내는 모듈.
 * @module my/shirt
 */

define("my/shirt", function() {
  // 여기에서 설정 작업을 수행합니다.

  return /** @alias module:my/shirt */ {
    /** 색상. */
    color: "black",
    /** 사이즈. */
    size: "unisize"
  };
});
```

## 함수에 전달된 모듈 객체

모듈 객체가 모듈을 정의하는 함수에 전달되는 경우, 함수 매개변수에 [`@exports` 태그](../tags/exports.md)를 추가하여 모듈을 문서화할 수 있습니다. 이 패턴은 JSDoc 3.3.0 이상에서 지원됩니다.

함수에 전달된 모듈 객체

```js
define("my/jacket", function(
  /**
   * 재킷을 위한 유틸리티 함수.
   * @exports my/jacket
   */
  module
) {
  /**
   * 재킷을 zip 합니다.
   * @param {Jacket} jacket - zip 할 재킷.
   */
  module.zip = function(jacket) {
    // ...
  };
});
```

## 한 파일에 정의된 여러 모듈

하나의 JavaScript 파일에서 두 개 이상의 AMD 모듈을 정의하는 경우, [`@exports` 태그](../tags/exports.md)를 사용하여 각 모듈 객체를 문서화합니다.

한 파일에 정의된 여러 AMD 모듈

```js
// 하나의 모듈
define("html/utils", function() {
  /**
   * DOM 요소 작업을 쉽게 해주는 유틸리티 함수.
   * @exports html/utils
   */
  var utils = {
    /**
     * 요소의 속성 값을 가져옵니다.
     * @param {HTMLElement} element - 요소.
     * @param {string} propertyName - 속성 이름.
     * @return {*} 속성 값.
     */
    getStyleProperty: function(element, propertyName) {}
  };

  /**
   * 요소가 문서 머리에 있는지 판단합니다.
   * @param {HTMLElement} element - 요소.
   * @return {boolean} 요소가 문서 머리에 있으면 `true`를 반환하고,
   * 그렇지 않으면 `false`를 반환합니다.
   */
  utils.isInHead = function(element) {};

  return utils;
});

// 또 다른 모듈
define("tag", function() {
  /** @exports tag */
  var tag = {
    /**
     * 새 태그를 생성합니다.
     * @class
     * @param {string} tagName - 태그 이름.
     */
    Tag: function(tagName) {
      // ...
    }
  };

  return tag;
});
```

## 관련 링크

- [JSDoc 3와 함께 namepaths 사용하기](../about/namepaths.md)
- [@exports](../tags/exports.md)
- [@module](../tags/module.md)