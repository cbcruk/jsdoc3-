---
id: requires
title: '@requires'
sidebar_label: '@requires'
---

## 문법

`@requires <someModuleName>`

## 개요

@requires 태그는 이 코드를 사용하기 위해 모듈이 필요함을 문서화할 수 있게 해줍니다. JSDoc 주석에는 여러 개의 @require 태그가 포함될 수 있습니다. 모듈 이름은 "moduleName" 또는 "module:moduleName"으로 지정할 수 있으며, 두 형태 모두 모듈로 해석됩니다.

JSDoc는 포함된 모듈을 처리하려고 하지 않습니다. 문서에 모듈을 포함시키려면, 처리할 JavaScript 파일 목록에 모듈을 포함해야 합니다.

## 예시

@requires 태그 사용

```js
/**
 * 이 클래스는 {@link module:xyzcorp/helper}와
 * {@link module:xyzcorp/helper.ShinyWidget#polish} 모듈이 필요합니다.
 * @class
 * @requires module:xyzcorp/helper
 * @requires xyzcorp/helper.ShinyWidget#polish
 */
function Widgetizer() {}
```