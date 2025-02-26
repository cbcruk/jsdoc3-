---
id: plugins-markdown
title: Markdown 플러그인 사용하기
sidebar_label: Markdown 플러그인 사용하기
---

## 개요

JSDoc에는 Markdown 형식의 텍스트를 자동으로 HTML로 변환하는 Markdown 플러그인이 포함되어 있습니다. 이 플러그인은 모든 JSDoc 템플릿에서 사용할 수 있습니다. JSDoc 3.2.2 이후 버전에서는 Markdown 플러그인이 [marked Markdown 파서](https://github.com/chjj/marked)를 사용합니다.

**참고**: Markdown 플러그인을 활성화할 때는 각 JSDoc 주석의 각 줄에 선행하는 별표를 포함해야 합니다. 선행 별표를 생략하면 JSDoc의 파서가 Markdown 형식을 위해 사용되는 별표를 제거할 수 있습니다.

기본적으로 JSDoc은 다음 JSDoc 태그에서 Markdown 형식의 텍스트를 찾습니다:

- [`@author`](../tags/author.md)
- [`@classdesc`](../tags/classdesc.md)
- [`@description`](../tags/description.md) (JSDoc 주석의 시작 부분에 태그가 없는 설명 포함)
- [`@param`](../tags/param.md)
- [`@property`](../tags/property.md)
- [`@returns`](../tags/returns.md)
- [`@see`](../tags/see.md)
- [`@throws`](../tags/throws.md)

## Markdown 플러그인 활성화하기

Markdown 플러그인을 활성화하려면 [JSDoc 구성 파일](./configuring-jsdoc.md)의 `plugins` 배열에 문자열 `plugins/markdown`을 추가합니다:

Markdown 플러그인을 활성화하는 JSON 구성 파일

```json
{
  "plugins": ["plugins/markdown"]
}
```

## 추가 JSDoc 태그에서 Markdown 변환하기

기본적으로 Markdown 플러그인은 Markdown 텍스트를 위해 [특정 JSDoc 태그](#default-tags)만 처리합니다. JSDoc 구성 파일에 `markdown.tags` 속성을 추가하여 다른 태그에서 Markdown 텍스트를 처리할 수 있습니다. `markdown.tags` 속성에는 Markdown 텍스트를 포함할 수 있는 추가 doclet 속성의 배열이 포함됩니다. (대부분의 경우, doclet 속성의 이름은 태그 이름과 동일합니다. 그러나 `@param` 태그와 같은 일부 태그는 다르게 저장됩니다; 예를 들어 `@param` 태그는 doclet의 `params` 속성에 저장됩니다. 태그의 텍스트가 doclet에 어떻게 저장되는지 잘 모를 경우, `-X/--explain` 태그로 JSDoc을 실행하면 각 doclet이 콘솔에 출력됩니다.)

예를 들어, `foo` 및 `bar` 태그가 doclet의 `foo` 및 `bar` 속성에 저장된 값을 수락하도록 하려면, 다음 설정을 JSDoc 구성 파일에 추가하여 이 태그의 Markdown 처리를 활성화할 수 있습니다:

'foo' 및 'bar' 태그에서 Markdown 변환하기

```json
{
  "plugins": ["plugins/markdown"],
  "markdown": {
    "tags": ["foo", "bar"]
  }
}
```

## Markdown 처리에서 기본 태그 제외하기

Markdown 플러그인이 [기본 JSDoc 태그](#default-tags)를 처리하지 않도록 하려면 JSDoc 구성 파일에 `markdown.excludeTags` 속성을 추가합니다. `markdown.excludeTags` 속성에는 Markdown 텍스트에 대해 처리되지 않아야 하는 기본 태그의 배열이 포함됩니다.

예를 들어 `author` 태그를 Markdown 처리에서 제외하려면:

'author' 태그를 Markdown 처리에서 제외하기

```json
{
  "plugins": ["plugins/markdown"],
  "markdown": {
    "excludeTags": ["author"]
  }
}
```

## 줄 바꿈 시 텍스트 강제 줄 바꾸기

기본적으로 Markdown 플러그인은 줄 바꿈 시 텍스트를 강제 줄 바꾸지 않습니다. 이는 JSDoc 주석이 여러 줄로 나뉘는 것이 일반적이기 때문입니다. 줄 바꿈 시 텍스트를 강제 줄 바꾸고 싶다면, JSDoc 구성 파일의 `markdown.hardwrap` 속성을 `true`로 설정합니다. 이 속성은 JSDoc 3.4.0 이상에서 사용 가능합니다.

## 제목에 ID 속성 추가하기

기본적으로 Markdown 플러그인은 각 HTML 제목에 `id` 속성을 추가하지 않습니다. 제목의 텍스트를 기반으로 자동으로 `id` 속성을 추가하려면 JSDoc 구성 파일의 `markdown.idInHeadings` 속성을 `true`로 설정합니다. 이 속성은 JSDoc 3.4.0 이상에서 사용 가능합니다.