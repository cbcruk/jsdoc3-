---
id: tutorials
title: 튜토리얼
sidebar_label: 튜토리얼
---

JSDoc는 API 문서와 함께 튜토리얼을 포함할 수 있는 기능을 제공합니다. 이 기능을 사용하여 API를 사용하는 데 대한 자세한 지침을 제공할 수 있습니다. 예를 들어 "시작하기" 가이드나 기능 구현을 위한 단계별 과정을 포함할 수 있습니다.

## 튜토리얼 추가하기

API 문서에 튜토리얼을 추가하려면 `--tutorials` 또는 `-u` 옵션과 함께 JSDoc을 실행하고 JSDoc이 튜토리얼을 검색할 디렉터리를 제공하면 됩니다. 예를 들어:

```bash
jsdoc -u path/to/tutorials path/to/js/files
```

JSDoc은 튜토리얼 디렉터리에서 다음과 같은 확장자를 가진 파일을 검색합니다:

- `.htm`
- `.html`
- `.markdown` (Markdown에서 HTML로 변환됨)
- `.md` (Markdown에서 HTML로 변환됨)
- `.xhtml`
- `.xml` (HTML로 처리됨)

JSDoc은 또한 튜토리얼의 제목, 순서 및 계층 구조에 대한 정보를 포함하는 JSON 파일을 검색합니다. 이 내용은 다음 섹션에서 설명합니다.

JSDoc은 각 튜토리얼에 식별자를 할당합니다. 식별자는 확장자 없이 파일 이름으로 구성됩니다. 예를 들어 `/path/to/tutorials/overview.md`의 식별자는 `overview`입니다.

튜토리얼 파일에서는 [`@link`](../tags/inline-link.md) 및 [`@tutorial`](../tags/inline-tutorial.md) 인라인 태그를 사용하여 문서의 다른 부분에 링크를 만들 수 있습니다. JSDoc은 링크를 자동으로 해결합니다.

## 제목, 순서 및 계층 구조 구성하기

기본적으로 JSDoc은 파일 이름을 튜토리얼의 제목으로 사용하며, 모든 튜토리얼은 동일한 수준에 있습니다. JSON 파일을 사용하여 각 튜토리얼에 대한 제목을 제공하고 문서에서 튜토리얼의 정렬 및 그룹화를 지정할 수 있습니다.

JSON 파일은 `.json` 확장자를 사용해야 합니다. JSON 파일에서는 튜토리얼 식별자를 사용하여 각 튜토리얼에 대해 두 가지 속성을 제공할 수 있습니다:

- `title`: 문서에 표시할 제목입니다.
- `children`: 튜토리얼의 하위 튜토리얼입니다.

JSDoc 3.2.0 이상에서는 JSON 파일에 대해 다음 형식을 사용할 수 있습니다:

1. 객체의 트리로, 하위 튜토리얼은 부모의 `children` 속성에 정의됩니다. 예를 들어, `tutorial1`에 두 개의 자식 `(childA 및 childB)`가 있고, `tutorial2`는 `tutorial1`과 같은 수준에 있으며 자식이 없는 경우:

```json
{
  "tutorial1": {
    "title": "튜토리얼 하나",
    "children": {
      "childA": {
        "title": "자식 A"
      },
      "childB": {
        "title": "자식 B"
      }
    }
  },
  "tutorial2": {
    "title": "튜토리얼 두"
  }
}
```

2. 모든 튜토리얼 객체가 속성으로 포함된 최상위 객체, 하위 튜토리얼은 배열에 이름으로 나열됩니다. 예를 들어, `tutorial1`에 두 개의 자식 `(childA 및 childB)`가 있고, `tutorial2`는 `tutorial1`과 같은 수준에 있으며 자식이 없는 경우:

```json
{
  "tutorial1": {
    "title": "튜토리얼 하나",
    "children": ["childA", "childB"]
  },
  "tutorial2": {
    "title": "튜토리얼 두"
  },
  "childA": {
    "title": "자식 A"
  },
  "childB": {
    "title": "자식 B"
  }
}
```

각 튜토리얼에 대해 개별 `.json` 파일을 제공할 수도 있으며, 이 경우 튜토리얼 식별자를 파일 이름으로 사용합니다. 이 방법은 더 이상 권장되지 않으며 새로운 프로젝트에는 사용하지 않아야 합니다.

## API 문서에서 튜토리얼 링크하기

API 문서에서 튜토리얼로 링크하는 여러 가지 방법이 있습니다:

### @tutorial 블록 태그

JSDoc 주석에 [`@tutorial` 블록 태그](../tags/tutorial.md)를 포함하면 생성된 문서에 지정한 튜토리얼로의 링크가 포함됩니다.

`@tutorial` 블록 태그 사용하기

```js
/**
 * 소켓 연결을 나타내는 클래스입니다.
 *
 * @class
 * @tutorial socket-tutorial
 */
function Socket() {}
```

### @tutorial 인라인 태그

또한 다른 태그의 텍스트 내에서 튜토리얼에 링크하기 위해 [`@tutorial` 인라인 태그](../tags/inline-tutorial.md)를 사용할 수 있습니다. 기본적으로 JSDoc은 튜토리얼의 제목을 링크 텍스트로 사용합니다.

`@tutorial` 인라인 태그 사용하기

```js
/**
 * 소켓 연결을 나타내는 클래스입니다. 개요는 {@tutorial socket-tutorial}
 * 을 참조하십시오.
 *
 * @class
 */
function Socket() {}
```