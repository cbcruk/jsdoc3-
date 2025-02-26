---
id: es2015-modules
title: ES 2015 모듈
sidebar_label: ES 2015 모듈
---

JSDoc 3은 [ECMAScript 2015 사양](http://www.ecma-international.org/ecma-262/6.0/#sec-modules)을 따르는 모듈을 문서화하는 것을 가능하게 합니다. ES 2015 모듈은 JSDoc 3.4.0 이상에서 지원됩니다.

## 모듈 식별자

ES 2015 모듈을 문서화할 때, 모듈의 식별자를 문서화하기 위해 [`@module` 태그](../tags/module.md)를 사용합니다. 예를 들어, 사용자가 `import * as myShirt from 'my/shirt'`를 호출하여 모듈을 로드하는 경우, `@module my/shirt` 태그를 포함하는 JSDoc 주석을 작성합니다.

값 없이 `@module` 태그를 사용하는 경우, JSDoc는 파일 경로를 기반으로 올바른 모듈 식별자를 추측하려고 시도합니다.

다른 JSDoc 주석에서 모듈을 언급하기 위해 JSDoc [namepath](../about/namepaths.md)를 사용하는 경우, `module:` 접두사를 추가해야 합니다. 예를 들어, 모듈 `my/pants`의 문서가 모듈 `my/shirt`에 링크되도록 하려면, [`@see` 태그](../tags/see.md)를 사용하여 `my/pants`를 다음과 같이 문서화할 수 있습니다:

```js
/**
 * 바지 모듈.
 * @module my/pants
 * @see module:my/shirt
 */
```

마찬가지로, 모듈의 각 멤버에 대한 namepath는 `module:`으로 시작하고 뒤에 모듈 이름이 옵니다. 예를 들어, `my/pants` 모듈이 `Jeans` 클래스를 내보내고, `Jeans`에 `hem`이라는 인스턴스 메서드가 있다면, 인스턴스 메서드의 전체 이름은 `module:my/pants.Jeans#hem`이 됩니다.

## 내보낸 값

다음 예시는 ES 2015 모듈에서 다양한 종류의 내보낸 값을 문서화하는 방법을 보여줍니다. 대부분의 경우, 내보낸 값을 정의하는 `export` 문에 간단히 JSDoc 주석을 추가할 수 있습니다. 다른 이름으로 값을 내보내는 경우, 해당 `export` 블록 내에서 내보낸 값을 문서화할 수 있습니다.

모듈에 의해 내보낸 값 문서화

```js
/** @module color/mixer */

/** 모듈의 이름. */
export const name = "mixer";

/** 가장 최근의 혼합 색상. */
export var lastColor = null;

/**
 * 두 색상을 혼합합니다.
 * @param {string} color1 - 첫 번째 색상, 16진수 형식.
 * @param {string} color2 - 두 번째 색상, 16진수 형식.
 * @return {string} 혼합된 색상.
 */
export function blend(color1, color2) {}

// 색상을 RGB 값 배열(0-255)로 변환
function rgbify(color) {}

export {
  /**
   * 색상의 빨간색, 초록색 및 파란색 값을 가져옵니다.
   * @function
   * @param {string} color - 색상, 16진수 형식.
   * @returns {Array.<number>} 빨간색, 초록색 및 파란색 값의 배열,
   * 각각 0에서 255 사이의 값을 가집니다.
   */
  rgbify as toRgb
};
```

## 관련 링크

- [JSDoc 3에서 namepaths 사용하기](../about/namepaths.md)
- [@module](../tags/module.md)