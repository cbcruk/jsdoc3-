---
id: commonjs-modules
title: CommonJS 모듈
sidebar_label: CommonJS 모듈
---

## 개요

[CommonJS 모듈](http://wiki.commonjs.org/wiki/Modules/1.1)을 문서화하는 데 도움을 주기 위해, JSDoc 3는 CommonJS 사양에서 사용되는 많은 규칙(예: `exports` 객체에 속성 추가)을 이해합니다. 또한 JSDoc는 CommonJS 표준을 확장하는 [Node.js 모듈](http://nodejs.org/api/modules.html)의 규칙을 인식합니다(예: `module.exports`에 값 할당). 따르는 코딩 규약에 따라, JSDoc이 코드를 이해하는 데 도움이 되는 추가 태그를 제공해야 할 수도 있습니다.

이 페이지에서는 여러 다양한 코딩 규약을 사용하는 CommonJS 및 Node.js 모듈을 문서화하는 방법을 설명합니다. Asynchronous Module Definition (AMD) 모듈(즉, "RequireJS 모듈")을 문서화하려는 경우 [AMD 모듈](./amd-modules.md)을 참조하십시오.

## 모듈 식별자

대부분의 경우, CommonJS 또는 Node.js 모듈은 독립형 JSDoc 주석을 포함해야 하며, 이 주석에는 [`@module` 태그](../tags/module.md)가 포함됩니다. `@module` 태그의 값은 `require()` 함수에 전달되는 모듈 식별자여야 합니다. 예를 들어, 사용자가 `require('my/shirt')`를 호출하여 모듈을 로드하는 경우, JSDoc 주석에는 태그 `@module my/shirt`가 포함됩니다.

값 없이 `@module` 태그를 사용하면, JSDoc은 파일 경로를 기반으로 올바른 모듈 식별자를 추측하려고 합니다.

다른 JSDoc 주석에서 모듈을 참조하기 위해 JSDoc [네임패스](../about/namepaths.md)를 사용할 때는 `module:` 접두사를 추가해야 합니다. 예를 들어, `my/pants` 모듈의 문서가 `my/shirt` 모듈에 링크되도록 하려면, 다음과 같이 [`@see` 태그](../tags/see.md)를 사용할 수 있습니다:

```js
/**
 * 바지 모듈.
 * @module my/pants
 * @see module:my/shirt
 */
```

마찬가지로, 모듈의 각 멤버에 대한 네임패스는 `module:`으로 시작하며, 뒤에는 모듈 이름이 옵니다. 예를 들어, `my/pants` 모듈이 `Jeans` 생성자를 내보내고 `Jeans`에 `hem`이라는 인스턴스 메서드가 있다면, 인스턴스 메서드의 롱네임은 `module:my/pants.Jeans#hem`이 됩니다.

## 'exports' 객체의 속성

`exports` 객체의 속성에 직접 할당된 기호를 문서화하는 것이 가장 쉽습니다. JSDoc은 모듈이 이러한 기호를 내보낸다는 것을 자동으로 인식합니다.

다음 예에서 `my/shirt` 모듈은 `button` 및 `unbutton` 메서드를 내보냅니다. JSDoc은 모듈이 이 메서드를 내보낸다는 것을 자동으로 감지합니다.

exports 객체에 추가된 메서드

```js
/**
 * 셔츠 모듈.
 * @module my/shirt
 */

/** 셔츠에 단추를 채웁니다. */
exports.button = function() {
  // ...
};

/** 셔츠의 단추를 풀습니다. */
exports.unbutton = function() {
  // ...
};
```

## 지역 변수에 할당된 값

일부 경우, 내보낸 기호가 `exports` 객체에 추가되기 전에 지역 변수에 할당될 수 있습니다. 예를 들어, 모듈이 `wash` 메서드를 내보내고 모듈 자체에서 `wash` 메서드를 자주 호출하는 경우, 모듈을 다음과 같이 작성할 수 있습니다:

지역 변수에 할당된 메서드와 exports 객체에 추가된 메서드

```js
/**
 * 셔츠 모듈.
 * @module my/shirt
 */

/** 셔츠를 씻습니다. */
var wash = (exports.wash = function() {
  // ...
});
```

이 경우, JSDoc은 `wash`가 내보낸 메서드로 자동 문서화되지 않습니다. 이는 JSDoc 주석이 지역 변수 `wash` 바로 앞에 위치하기 때문입니다. 하나의 솔루션은 메서드의 정확한 롱네임을 정의하는 [`@alias` 태그](../tags/alias.md)를 추가하는 것입니다. 이 경우, 메서드는 `my/shirt` 모듈의 정적 멤버이므로 올바른 롱네임은 `module:my/shirt.wash`입니다:

@alias 태그로 정의된 롱네임

```js
/**
 * 셔츠 모듈.
 * @module my/shirt
 */

/**
 * 셔츠를 씻습니다.
 * @alias module:my/shirt.wash
 */
var wash = (exports.wash = function() {
  // ...
});
```

또 다른 솔루션은 메서드의 JSDoc 주석을 `exports.wash` 바로 앞에 두는 것입니다. 이 변경으로 JSDoc이 `wash`가 `my/shirt` 모듈에 의해 내보내졌다고 감지할 수 있게 됩니다:

exports.wash 바로 앞에 JSDoc 주석

```js
/**
 * 셔츠 모듈.
 * @module my/shirt
 */

var wash =
  /** 셔츠를 씻습니다. */
  (exports.wash = function() {
    // ...
  });
```

## 'module.exports'에 할당된 값

Node.js 모듈에서는 값을 직접 `module.exports`에 할당할 수 있습니다. 이 섹션에서는 `module.exports`에 할당될 때 다양한 유형의 값을 문서화하는 방법을 설명합니다.

### 'module.exports'에 할당된 객체 리터럴

모듈이 `module.exports`에 객체 리터럴을 할당하는 경우, JSDoc은 해당 모듈이 오로지 이 값만 내보낸다는 것을 자동으로 인식합니다. 또한 JSDoc은 각 속성에 대해 올바른 롱네임을 자동으로 설정합니다:

module.exports에 할당된 객체 리터럴

```js
/**
 * 색상 혼합기.
 * @module color/mixer
 */

module.exports = {
  /**
   * 두 가지 색을 혼합합니다.
   * @param {string} color1 - 첫 번째 색, 16진수 형식.
   * @param {string} color2 - 두 번째 색, 16진수 형식.
   * @return {string} 혼합된 색.
   */
  blend: function(color1, color2) {
    // ...
  },

  /**
   * 주어진 비율로 색을 어둡게 합니다.
   * @param {string} color - 색상, 16진수 형식.
   * @param {number} percent - 비율, 0에서 100까지.
   * @return {string} 어두워진 색.
   */
  darken: function(color, percent) {
    // ..
  }
};
```

또한 객체 리터럴 외부에서 `module.exports`에 속성을 추가할 때 이 패턴을 사용할 수 있습니다:

module.exports에 대한 할당 후 속성 정의

```js
/**
 * 색상 혼합기.
 * @module color/mixer
 */

module.exports = {
  /**
   * 두 가지 색을 혼합합니다.
   * @param {string} color1 - 첫 번째 색, 16진수 형식.
   * @param {string} color2 - 두 번째 색, 16진수 형식.
   * @return {string} 혼합된 색.
   */
  blend: function(color1, color2) {
    // ...
  }
};

/**
 * 주어진 비율로 색을 어둡게 합니다.
 * @param {string} color - 색상, 16진수 형식.
 * @param {number} percent - 비율, 0에서 100까지.
 * @return {string} 어두워진 색.
 */
module.exports.darken = function(color, percent) {
  // ..
};
```

### 'module.exports'에 할당된 함수

함수를 `module.exports`에 할당하면, JSDoc은 해당 함수의 올바른 롱네임을 자동으로 설정합니다:

'module.exports'에 할당된 함수

```js
/**
 * 색상 혼합기.
 * @module color/mixer
 */

/**
 * 두 가지 색을 혼합합니다.
 * @param {string} color1 - 첫 번째 색, 16진수 형식.
 * @param {string} color2 - 두 번째 색, 16진수 형식.
 * @return {string} 혼합된 색.
 */
module.exports = function(color1, color2) {
  // ...
};
```

이와 같은 패턴은 생성자 함수에도 적용됩니다:

'module.exports'에 할당된 생성자

```js
/**
 * 색상 혼합기