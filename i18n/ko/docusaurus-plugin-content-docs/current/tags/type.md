---
id: type
title: '@type'
sidebar_label: '@type'
---

## 구문

`@type {typeName}`

## 개요

@type 태그를 사용하면 기호가 포함할 수 있는 값의 유형 또는 함수가 반환하는 값의 유형을 식별하는 유형 표현을 제공할 수 있습니다. 또한 [@param 태그](./param.md)와 같은 많은 다른 JSDoc 태그와 함께 유형 표현을 포함할 수 있습니다.

유형 표현에는 기호에 대한 JSDoc 이름 경로(예: `myNamespace.MyClass`), 내장 JavaScript 유형(예: `string`) 또는 이들의 조합이 포함될 수 있습니다. 모든 [Google Closure Compiler 유형 표현](https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler#type-expressions)뿐만 아니라 JSDoc에 특별한 여러 다른 형식을 사용할 수 있습니다.

JSDoc가 유형 표현이 유효하지 않다고 판단하는 경우, 오류를 표시하고 실행을 중지합니다. `--lenient` 옵션으로 JSDoc를 실행하여 이 오류를 경고로 전환할 수 있습니다.

**참고**: Google Closure Compiler 스타일의 유형 표현에 대한 완전한 지원은 JSDoc 3.2 이상에서 사용할 수 있습니다. 이전 버전의 JSDoc는 Closure Compiler 유형 표현에 대한 부분 지원이 포함되었습니다.

각 유형은 아래에 설명된 형식 중 하나를 사용하여 유형 표현을 제공함으로써 명시됩니다. 필요에 따라 JSDoc는 다른 기호에 대한 문서에 대한 링크를 자동으로 생성합니다. 예를 들어, `@type {MyClass}`는 해당 기호가 문서화된 경우 MyClass 문서에 링크됩니다.

### 기호 이름 (이름 표현)

```
{boolean}
{myNamespace.MyClass}
```

기호의 이름을 지정합니다. 기호를 문서화한 경우, JSDoc는 해당 기호에 대한 문서로의 링크를 생성합니다.

### 여러 유형 (유형 집합)

**이것은 숫자 또는 부울일 수 있습니다.**

```
{number | boolean}
```

이는 값이 여러 유형 중 하나를 가질 수 있음을 의미하며, 모든 유형 목록은 괄호로 묶여 있고 `|`로 구분됩니다.

### 배열 및 객체 (유형 적용 및 레코드 유형)

**MyClass 인스턴스의 배열.**

```
{Array.<MyClass>}
// 또는:
{MyClass[]}
```

**문자열 키와 숫자 값을 가진 객체:**

```
{Object.<string, number>}
```

**'myObj'라는 객체로, 'a' (숫자), 'b' (문자열) 및 'c' (모든 유형)의 속성이 있습니다.**

```
{{a: number, b: string, c}} myObj
// 또는:
{Object} myObj
{number} myObj.a
{string} myObj.b
{} myObj.c
```

JSDoc는 배열 및 객체 유형을 정의하기 위해 Closure Compiler의 구문을 지원합니다.

배열에 포함된 유형에 `[]`를 추가하여 배열을 나타낼 수도 있습니다. 예를 들어, 표현식 `string[]`는 문자열의 배열을 나타냅니다.

정해진 속성이 있는 객체의 경우, 레코드 유형 문서화를 위해 Closure Compiler의 구문을 사용할 수 있습니다. 각 속성을 개별적으로 문서화할 수 있으므로 각 속성에 대한 보다 자세한 정보를 제공할 수 있습니다.

### 널 가능 유형

**숫자 또는 null.**

```
{?number}
```

이는 유형이 지정된 유형이거나 `null`임을 나타냅니다.

### 비-null 가능 유형

**숫자이지만 절대 null이 아님.**

```
{!number}
```

이는 값이 지정된 유형이지만 `null`이 될 수 없음음을 나타냅니다.

### 가변 개수의 해당 유형

**이 함수는 가변 개수의 숫자 매개변수를 허용합니다.**

```
@param {...number} num
```

함수가 가변 개수의 매개변수를 허용한다고 나타내고, 매개변수에 대한 유형을 지정합니다. 예를 들어:

```js
/**
 * 함수에 전달된 모든 숫자의 합계를 반환합니다.
 * @param {...number} num 긍정적 또는 부정적 숫자
 */
function sum(num) {
  var i = 0,
    n = arguments.length,
    t = 0
  for (; i < n; i++) {
    t += arguments[i]
  }
  return t
}
```

### 선택적 매개변수

**foo라는 선택적 매개변수.**

```
@param {number} [foo]
// 또는:
@param {number=} foo
```

**기본값이 1인 선택적 매개변수 foo.**

```
@param {number} [foo=1]
```

매개변수가 선택적임을 나타냅니다. JSDoc의 선택적 매개변수 구문을 사용할 때, 매개변수가 생략된 경우 사용할 값을 표시할 수도 있습니다.

### 콜백

```js
/**
 * @callback myCallback
 * @param {number} x - ...
 */

;/ @type {myCallback} /
var cb
```

[@callback](./callback.md) 태그를 사용하여 콜백을 문서화합니다. 구문은 @typedef 태그와 동일하지만 콜백의 유형은 항상 "function"입니다.

### 유형 정의

**'id', 'name', 'age' 속성이 있는 유형 문서화.**

```js
/**
 * @typedef PropertiesHash
 * @type {object}
 * @property {string} id - ID입니다.
 * @property {string} name - 귀하의 이름입니다.
 * @property {number} age - 귀하의 나이입니다.
 */

/** @type {PropertiesHash} */
var props
```

[@typedef](./typedef.md) 태그를 사용하여 복합 유형을 문서화한 후, 문서의 다른 곳에서 유형 정의를 참조할 수 있습니다.

## 예제

예제

```js
/** @type {(string|Array.)} */
var foo
/** @type {number} */
var bar = 1
```

많은 경우에 유형 표현을 별도의 @type 태그를 포함하는 대신 다른 태그의 일부로 포함할 수 있습니다.

유형 표현은 많은 태그와 함께 사용할 수 있습니다.

```js
/**
 * @type {number}
 * @const
 */
var FOO = 1

// 동일한 의미:

/** @const {number} */
var FOO = 1
```

## 관련 링크

- [@callback](./callback.md)
- [@typedef](./typedef.md)
- [@param](./param.md)
- [@property](./property.md)