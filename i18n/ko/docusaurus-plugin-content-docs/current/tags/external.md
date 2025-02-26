---
id: external
title: '@external'
sidebar_label: '@external'
---

## 동의어

`@host`

## 문법

`@external <외부 이름>`

## 개요

`@external` 태그는 현재 패키지 외부에 정의된 클래스, 네임스페이스 또는 모듈을 식별합니다. 이 태그를 사용하면 패키지가 외부 심볼에 대한 확장을 문서화할 수 있으며, 패키지 사용자를 위해 외부 심볼에 대한 정보를 제공할 수 있습니다. 또한 다른 JSDoc 태그 내에서 외부 심볼의 이름 경로를 참조할 수 있습니다.

외부 심볼의 이름 경로는 항상 접두사 `external:`을 사용합니다(예: `{@link external:Foo}` 또는 `@augments external:Foo`). 그러나 `@external` 태그에서 이 접두사를 생략할 수 있습니다.

**참고**: `@external` 태그는 프로젝트 외부에 정의된 최상위 심볼에만 추가해야 합니다. "[중첩 외부 심볼 문서화](#nested-external-symbol)"를 참조하여 예시를 확인하십시오.

## 예제

다음 예제에서는 내장 `String` 객체를 외부로 문서화하는 방법과 새로운 인스턴스 메서드 `external:String#rot13`을 보여줍니다:

내장 클래스에 추가된 메서드 문서화

```js
/**
 * 내장 문자열 객체.
 * @external String
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String|String}
 */

/**
 * 문자열의 ROT13 인코딩 버전을 생성합니다. `foo` 패키지에서 추가되었습니다.
 * @function external:String#rot13
 * @example
 * var greeting = new String('hello world');
 * console.log( greeting.rot13() ); // uryyb jbeyq
 */
```

다음 예제는 외부 네임스페이스 `"jQuery.fn"`에 추가된 새로운 `starfairy` 함수를 문서화합니다:

외부 네임스페이스 문서화

```js
/**
 * jQuery 플러그인 네임스페이스.
 * @external "jQuery.fn"
 * @see {@link http://learn.jquery.com/plugins/|jQuery Plugins}
 */

/**
 * 별들이 홈페이지 주위를 날도록 만드는 jQuery 플러그인.
 * @function external:"jQuery.fn".starfairy
 */
```

다음 예제에서는 `EncryptedRequest` 클래스를 내장 클래스 `XMLHttpRequest`의 서브클래스로 문서화합니다:

외부 확장.

```js
/**
 * HTTP 요청을 보내기 위한 내장 클래스.
 * @external XMLHttpRequest
 * @see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
 */

/**
 * 비밀 키로 인코딩된 데이터를 보내기 위해 내장 `XMLHttpRequest` 클래스를 확장합니다.
 * @class EncodedRequest
 * @extends external:XMLHttpRequest
 */
```

`@external` 태그는 프로젝트 외부에 정의된 최상위 심볼에만 추가해야 합니다. 다음 예제에서는 문서가 외부 클래스 `security.TLS`를 참조합니다. 결과적으로, `@external` 태그는 외부 네임스페이스 `external:security`를 문서화하는 데 사용되지만, 외부 클래스 `external:security.TLS`는 문서화하지 않습니다.

중첩 외부 심볼 문서화

```js
/**
 * 보안 관련 클래스에 대한 외부 네임스페이스.
 * @external security
 * @see http://example.org/docs/security
 */

/**
 * 전송 계층 보안(TLS) 암호화를 제공하는 외부 클래스.
 * @class TLS
 * @memberof external:security
 */
```