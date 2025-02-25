---
id: module
title: '@module'
sidebar_label: '@module'
---

## 구문

`@module [[{<type>}] <moduleName>]`

JSDoc 3.3.0 이상에서는 `<moduleName>`에 `module:` 접두사를 포함할 수 있습니다. 이전 버전에서는 이 접두사를 생략해야 합니다.

참고: 타입을 제공하는 경우, 반드시 이름도 제공해야 합니다.

## 개요

@module 태그는 현재 파일이 자체 모듈임을 표시합니다. 파일 내의 모든 기호는 따로 문서로 문서화하지 않는 한 모듈의 구성원으로 간주됩니다.

"module:moduleName"을 사용하여 모듈에 링크할 수 있습니다 (예: [@link](./inline-link.md) 또는 [@see](./see.md) 태그 내에서). 예를 들어, "@module foo/bar"는 "@link module:foo/bar"를 통해 링크할 수 있습니다.

모듈 이름이 제공되지 않으면 모듈의 경로와 파일 이름에서 유도됩니다. 예를 들어, `src` 디렉토리에 있는 `test.js` 파일이 `/** @module */` 블록 주석을 포함한다고 가정해 봅시다. JSDoc을 실행할 때의 몇 가지 시나리오와 test.js의 결과 모듈 이름은 다음과 같습니다:

제공되지 않은 경우 유도된 모듈 이름.

```bash
# src/에서:
jsdoc ./test.js   # 모듈 이름 'test'

# src의 부모 디렉토리에서:
jsdoc src/test.js # 모듈 이름 'src/test'
jsdoc -r src/     # 모듈 이름 'test'
```

## 예시

다음 예시는 모듈 내 기호에 사용되는 이름 경로를 보여줍니다. 첫 번째 기호는 모듈-프라이빗 또는 "내부" 변수입니다. 이 변수는 모듈 내에서만 접근할 수 있습니다. 두 번째 기호는 모듈에 의해 내보내지는 정적 함수입니다.

기본 @module 사용

```js
/** @module myModule */

/** module:myModule~foo가 될 것입니다. */
var foo = 1

/** module:myModule.bar가 될 것입니다. */
var bar = function () {}
```

내보내진 기호가 `module.exports`, `exports` 또는 `this`의 구성원으로 정의되면, JSDoc은 이 기호가 모듈의 정적 구성원이라고 추론합니다.

다음 예시에서 Book 클래스는 정적 구성원 "module:bookshelf.Book"으로 문서화되며, 하나의 인스턴스 구성원인 "module:bookshelf.Book#title"을 갖습니다.

'this'의 구성원으로 내보내진 기호 정의

```js
/** @module bookshelf */
/** @class */
this.Book = function (title) {
  /** 제목. */
  this.title = title
}
```

다음 예시에서 두 함수는 "module:color/mixer.blend"와 "module:color/mixer.darken" 이름 경로를 갖습니다.

'module.exports' 또는 'exports'의 구성원으로 내보내진 기호 정의

```js
/** @module color/mixer */
module.exports = {
  /** 두 색상을 혼합합니다. */
  blend: function (color1, color2) {},
}
/** 색상을 어둡게 합니다. */
exports.darken = function (color, shade) {}
```

자세한 예시는 [JavaScript 모듈 문서화](../howto/commonjs-modules.md)를 참조하세요.

## 관련 링크

- [@exports](./exports.md)
- [CommonJS 모듈](../howto/commonjs-modules.md)
- [AMD 모듈](../howto/amd-modules.md)