---
id: configuring-jsdoc
title: 구성 파일을 사용한 JSDoc 설정
sidebar_label: 구성 파일을 사용한 JSDoc 설정
---

## 구성 파일 포맷

JSDoc의 동작을 사용자 정의하려면, 다음 형식 중 하나로 JSDoc에 구성 파일을 제공할 수 있습니다:

- JSON 파일. JSDoc 3.3.0 이상에서는 이 파일에 주석이 포함될 수 있습니다.
- 단일 구성 객체를 내보내는 CommonJS 모듈. 이 형식은 JSDoc 3.5.0 이상에서 지원됩니다.

구성 파일을 사용하여 JSDoc을 실행하려면 [`-c` 명령줄 옵션](./commandline.md)을 사용하세요 (예: `jsdoc -c /path/to/conf.json` 또는 `jsdoc -c /path/to/conf.js`).

다음 예제는 JSDoc의 [Markdown 플러그인](./plugins-markdown.md)을 활성화하는 간단한 구성 파일을 보여줍니다. JSDoc의 구성 옵션은 다음 섹션에서 자세히 설명합니다.

JSON 구성 파일

```json
{
  "plugins": ["plugins/markdown"]
}
```

JavaScript 구성 파일

```js
'use strict'

module.exports = {
  plugins: ['plugins/markdown'],
}
```

JSON 구성 파일의 더 포괄적인 예는 파일 [`conf.json.EXAMPLE`](https://github.com/jsdoc3/jsdoc/blob/master/conf.json.EXAMPLE)를 참조하십시오.

## 기본 구성 옵션

구성 파일을 지정하지 않으면 JSDoc은 다음 구성 옵션을 사용합니다:

```json
{
  "plugins": [],
  "recurseDepth": 10,
  "source": {
    "includePattern": ".+\\.js(doc|x)?$",
    "excludePattern": "(^|\\/|\\\\)_"
  },
  "sourceType": "module",
  "tags": {
    "allowUnknownTags": true,
    "dictionaries": ["jsdoc", "closure"]
  },
  "templates": {
    "cleverLinks": false,
    "monospaceLinks": false
  }
}
```

이는 다음을 의미합니다:

- 플러그인이 로드되지 않습니다 (`plugins`).
- [`-r` 명령줄 플래그](./commandline.md)를 사용하여 재귀가 활성화된 경우, JSDoc은 10단계 깊이까지 파일을 검색합니다 (`recurseDepth`).
- `.js`, `.jsdoc`, 및 `.jsx`로 끝나는 파일만 처리됩니다 (`source.includePattern`).
- 밑줄로 시작하는 파일이나, 밑줄로 시작하는 디렉토리에 있는 파일은 무시됩니다 (`source.excludePattern`).
- JSDoc은 [ES2015 모듈](../howto/es2015-modules.md)을 사용하는 코드를 지원합니다 (`sourceType`).
- JSDoc은 인식되지 않는 태그를 사용할 수 있습니다 (`tags.allowUnknownTags`).
- 표준 JSDoc 태그와 [Closure Compiler 태그](https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler#jsdoc-tags)가 모두 활성화됩니다 (`tags.dictionaries`).
- [인라인 `@link` 태그](../tags/inline-link.md)는 일반 텍스트로 렌더링됩니다 (`templates.cleverLinks`, `templates.monospaceLinks`).

이 옵션과 기타 옵션은 다음 섹션에서 설명됩니다.

## 플러그인 구성

플러그인을 활성화하려면, JSDoc 폴더에 대한 상대 경로로 `plugins` 배열에 경로를 추가하세요.

예를 들어, 다음 JSON 구성 파일은 Markdown 플러그인과 "summarize" 플러그인을 활성화합니다:

플러그인이 포함된 JSON 구성 파일

```json
{
  "plugins": ["plugins/markdown", "plugins/summarize"]
}
```

더 많은 정보는 [플러그인 참조](./plugins.md)를 참조하고, [JSDoc의 `plugins` 디렉토리](https://github.com/jsdoc3/jsdoc/tree/master/plugins)에서 JSDoc에 내장된 플러그인을 확인하십시오.

Markdown 플러그인은 구성 파일에 `markdown` 객체를 추가하여 구성할 수 있습니다. 자세한 내용은 [Markdown 플러그인 구성](./plugins-markdown.md)를 참조하십시오.

## 재귀 깊이 지정

`recurseDepth` 옵션은 JSDoc이 소스 파일 및 튜토리얼을 재귀적으로 검색할 깊이를 제어합니다. 이 옵션은 JSDoc 3.5.0 이상에서 사용할 수 있습니다. 이 옵션은 [`-r` 명령줄 플래그](./commandline.md)를 지정할 경우에만 사용됩니다.

```json
{
  "recurseDepth": 10
}
```

## 입력 파일 지정

`source` 옵션 세트는 JSDoc에 명령줄에서 지정된 경로와 결합되어 문서를 생성하는 데 사용되는 입력 파일 세트를 결정합니다.

```json
{
  "source": {
    "include": [
      /* 문서를 생성할 파일의 경로 배열 */
    ],
    "exclude": [
      /* 제외할 경로 배열 */
    ],
    "includePattern": ".+\\.js(doc|x)?$",
    "excludePattern": "(^|\\/|\\\\)_"
  }
}
```

- `source.include`: JSDoc가 문서를 생성해야 하는 파일을 포함한 경로의 선택적 배열입니다. 명령줄에서 JSDoc에 제공된 경로가 이 경로와 결합됩니다. [`-r` 명령줄 옵션](./commandline.md)을 사용하여 하위 디렉토리로 재귀적으로 들어갈 수 있습니다.
- `source.exclude`: JSDoc가 무시해야 하는 경로의 선택적 배열입니다. JSDoc 3.3.0 이상에서는 이 배열에 `source.include`의 하위 디렉토리를 포함할 수 있습니다.
- `source.includePattern`: 선택적 문자열로, 정규 표현식으로 해석됩니다. 존재할 경우 모든 파일 이름은 이 정규 표현식과 일치해야 JSDoc에 의해 처리됩니다. 기본적으로 이 옵션은 ".+\\.js(doc|x)?$"로 설정되어 있어 `.js`, `.jsdoc`, 및 `.jsx` 확장자로 끝나는 파일만 처리됩니다.
- `source.excludePattern`: 선택적 문자열로, 정규 표현식으로 해석됩니다. 존재할 경우 이 정규 표현식과 일치하는 모든 파일은 무시됩니다. 기본적으로 이 옵션은 밑줄로 시작하는 파일(또는 밑줄로 시작하는 디렉토리 내의 모든 파일)을 무시하도록 설정되어 있습니다.

이 옵션은 다음 순서대로 해석됩니다:

1. 명령줄 및 `source.include`에 제공된 모든 경로에서 시작합니다.
2. 1단계에서 찾은 각 파일에 대해, 정규 표현식 `source.includePattern`이 있을 경우, 파일 이름은 이 정규 표현식과 일치해야 하며, 일치하지 않으면 무시됩니다.
3. 2단계에서 남은 각 파일에 대해, 정규 표현식 `source.excludePattern`이 있을 경우, 이 정규 표현식과 일치하는 모든 파일 이름은 무시됩니다.
4. 3단계에서 남은 각 파일에 대해, 파일의 경로가 `source.exclude`에 있는 경우, 무시됩니다.

이 네 단계를 거친 후 남은 모든 파일은 JSDoc에 의해 처리됩니다.

예를 들어, 다음과 같은 파일 구조가 있다고 가정해 보겠습니다:

```bash
    myProject/
    |- a.js
    |- b.js
    |- c.js
    |- _private
    |  |- a.js
    |- lib/
       |- a.js
       |- ignore.js
       |- d.txt
```

또한 `conf.json` 파일이 다음과 같다고 가정해 보겠습니다:

```json
{
  "source": {
    "include": ["myProject/a.js", "myProject/lib", "myProject/_private"],
    "exclude": ["myProject/lib/ignore.js"],
    "includePattern": ".+\\.js(doc|x)?$",
    "excludePattern": "(^|\\/|\\\\)_"
  }
}
```

`myProject` 폴더를 포함하는 파일에서 `jsdoc myProject/c.js -c /path/to/my/conf.json -r`을 실행하면, JSDoc은 다음 파일에 대한 문서를 생성합니다:

- `myProject/a.js`
- `myProject/c.js`
- `myProject/lib/a.js`

이유는 다음과 같습니다:

1. JSDoc은 `source.include`와 명령줄에서 주어진 경로를 기반으로 다음 파일들로 시작합니다:
    - `myProject/c.js` (명령줄에서)
    - `myProject/a.js` (`source.include`에서)
    - `myProject/lib/a.js`, `myProject/lib/ignore.js`, `myProject/lib/d.txt` (`source.include`에서 및 `-r` 옵션 사용)
    - `myProject/_private/a.js` (`source.include`에서)
2. JSDoc은 `source.includePattern`을 적용하여, 위 파일들 중 `.js`, `.jsdoc`, 또는 `.jsx`로 끝나지 않는 `myProject/lib/d.txt`를 제외합니다.
3. JSDoc은 `source.excludePattern`을 적용하여 `my