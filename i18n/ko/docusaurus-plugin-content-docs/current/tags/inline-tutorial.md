---
id: inline-tutorial
title: '@tutorial'
sidebar_label: '@tutorial'
---

## 구문

```js
{@tutorial tutorialID}
[링크 텍스트]{@tutorial tutorialID}
{@tutorial tutorialID|링크 텍스트}
{@tutorial tutorialID 링크 텍스트 (첫 번째 공백 이후)}
```

## 개요

`@tutorial` 인라인 태그는 지정한 튜토리얼 식별자에 대한 링크를 생성합니다. `@tutorial` 태그를 사용할 때는 여러 가지 형식 중 하나를 사용하여 링크 텍스트를 제공할 수도 있습니다. 링크 텍스트를 제공하지 않으면, JSDoc은 튜토리얼의 제목을 링크 텍스트로 사용합니다.

이름 경로(namepath) 또는 URL에 연결해야 하는 경우, `@tutorial` 태그 대신에 [`@link` 인라인 태그](./inline-link.md)를 사용하십시오.

## 예제

다음 예제는 `@tutorial` 태그에 링크 텍스트를 제공하는 모든 방법을 보여줍니다:

링크 텍스트 제공

```js
/**
 * {@tutorial gettingstarted} 및 [대시보드 구성하기]{@tutorial dashboard}를 참조하세요.
 * 자세한 정보는 {@tutorial create|위젯 생성하기} 및
 * {@tutorial destroy 위젯 파괴하기}를 참조하세요.
 */
function myFunction() {}
```

이 튜토리얼들이 모두 정의되어 있고, `gettingstarted` 튜토리얼의 제목이 "Getting Started"인 경우, 위의 예제는 다음과 유사한 출력을 생성합니다:

@link 태그에 대한 출력

```html
<a href="tutorial-gettingstarted.html">Getting Started</a> 및
<a href="tutorial-dashboard.html">대시보드 구성하기</a>를 참조하세요. 자세한 정보는 
<a href="tutorial-create.html">위젯 생성하기</a> 및 
<a href="tutorial-destroy.html">위젯 파괴하기</a>를 참조하세요.
```

## 관련 링크

[@tutorial](./tutorial.md)