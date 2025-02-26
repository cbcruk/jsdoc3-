---
id: private
title: '@private'
sidebar_label: '@private'
---

## 구문

JSDoc 태그 사전(기본적으로 활성화됨)에서:

`@private`

[Closure Compiler](https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler#jsdoc-tags) 태그 사전에서:

`@private [{typeExpression}]`

## 개요

`@private` 태그는 기호를 비공식(private)으로 표시하며, 일반적인 사용을 위한 것이 아님을 나타냅니다. 비공식 멤버는 JSDoc가 `-p/--private` 명령줄 옵션으로 실행되지 않는 한 생성된 출력에 표시되지 않습니다. JSDoc 3.3.0 이후로는 [`-a/--access` 명령줄 옵션](../about/commandline.md)을 사용하여 이 동작을 변경할 수 있습니다.

`@private` 태그는 자식 멤버에게 상속되지 않습니다. 예를 들어, 네임스페이스에 `@private` 태그가 추가된 경우, 네임스페이스의 멤버는 여전히 생성된 출력에 나타날 수 있습니다. 네임스페이스가 비공식이기 때문에, 멤버의 이름 경로는 네임스페이스를 포함하지 않습니다.

`@private` 태그는 `@access private`과 동등합니다.

## 예제

다음 예제에서는 `Documents`와 `Documents.Newspaper`는 생성된 문서에 나타나지만, `Documents.Diary`는 나타나지 않습니다.

`@private` 태그 사용

```js
/** @namespace */
var Documents = {
  /**
   * 일반 신문입니다.
   */
  Newspaper: 1,
  /**
   * 나의 일기입니다.
   * @private
   */
  Diary: 2,
}
```

## 관련 링크

- [@access](./access.md)
- [@global](./global.md)
- [@instance](./instance.md)
- [@package](./package.md)
- [@protected](./protected.md)
- [@public](./public.md)
- [@static](./static.md)