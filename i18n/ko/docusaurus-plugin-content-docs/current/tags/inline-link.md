---
id: inline-link
title: '@link'
sidebar_label: '@link'
---

## 동의어

- `{@linkcode}`
- `{@linkplain}`

## 구문

```js
{@link namepathOrURL}
[링크 텍스트]{@link namepathOrURL}
{@link namepathOrURL|링크 텍스트}
{@link namepathOrURL 링크 텍스트 (첫 번째 공백 이후)}
```

## 개요

`@link` 인라인 태그는 지정한 이름 경로나 URL에 대한 링크를 생성합니다. `@link` 태그를 사용할 때, 여러 가지 형식을 사용하여 링크 텍스트를 제공할 수도 있습니다. 링크 텍스트를 제공하지 않으면 JSDoc은 이름 경로나 URL을 링크 텍스트로 사용합니다.

튜토리얼에 링크해야 하는 경우, `@link` 태그 대신 [`@tutorial` 인라인 태그](./inline-tutorial.md)를 사용하십시오.

## 링크 형식

기본적으로 `@link`는 표준 HTML 앵커 태그를 생성합니다. 그러나 특정 링크를 모노스페이스 글꼴로 렌더링하거나 개별 링크의 형식을 지정할 수 있습니다. 링크 형식을 제어하기 위해 `@link` 태그의 다음 동의어를 사용할 수 있습니다:

- `{@linkcode}`: 링크 텍스트를 모노스페이스 글꼴로 강제합니다.
- `{@linkplain}`: 링크 텍스트를 일반 텍스트로 표시하며, 모노스페이스 글꼴을 사용하지 않습니다.

또한 JSDoc의 구성 파일에서 다음 옵션 중 하나를 설정할 수 있습니다. 자세한 내용은 [JSDoc 구성](../about/configuring-jsdoc.md)을 참조하십시오:

- `templates.cleverLinks`: `true`로 설정하면 URL에 대한 링크는 일반 텍스트를 사용하고, 코드에 대한 링크는 모노스페이스 글꼴을 사용합니다.
- `templates.monospaceLinks`: `true`로 설정하면 `{@linkplain}` 태그로 생성된 링크를 제외한 모든 링크가 모노스페이스 글꼴을 사용합니다.

**참고**: 기본 JSDoc 템플릿은 이러한 모든 태그를 올바르게 렌더링하지만, 다른 템플릿은 `{@linkcode}` 및 `{@linkplain}` 태그를 인식하지 못할 수 있습니다. 또한, 다른 템플릿은 링크 렌더링에 대한 구성 옵션을 무시할 수 있습니다.

## 예제

다음 예제는 `@link` 태그에 대한 링크 텍스트를 제공하는 모든 방법을 보여줍니다:

링크 텍스트 제공

```js
/**
 * {@link MyClass}와 [MyClass의 foo 속성]{@link MyClass#foo}를 참조하십시오.
 * 또한 {@link http://www.google.com|구글} 및
 * {@link https://github.com GitHub}를 확인하십시오.
 */
function myFunction() {}
```

기본적으로 위 예제는 다음과 유사한 출력을 생성합니다:

`@link` 태그에 대한 출력

    See <a href="MyClass.html">MyClass</a> and <a href="MyClass.html#foo">MyClass's foo
    property</a>. Also, check out <a href="http://www.google.com">Google</a> and
    <a href="https://github.com">GitHub</a>.

구성 속성 `templates.cleverLinks`가 `true`로 설정된 경우, 위 예제는 다음과 같은 출력을 생성합니다:

지능형 링크가 활성화된 출력

    See <a href="MyClass.html"><code>MyClass</code></a> and <a href="MyClass.html#foo">
    <code>MyClass's foo property</code></a>. Also, check out
    <a href="http://www.google.com">Google</a> and <a href="https://github.com">GitHub</a>.

## 관련 링크

- [구성 파일을 사용하여 JSDoc 구성하기](../about/configuring-jsdoc.md)
- [JSDoc 3에서 이름 경로 사용하기](../about/namepaths.md)