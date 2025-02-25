---
id: param
title: '@param'
sidebar_label: '@param'
---

## 동의어

- `@arg`
- `@argument`

## 개요

`@param` 태그는 함수 매개변수의 이름, 타입 및 설명을 제공합니다.

`@param` 태그는 문서화하려는 매개변수의 이름을 지정해야 합니다. 중괄호로 묶인 매개변수의 타입과 매개변수에 대한 설명을 포함할 수도 있습니다.

매개변수 타입은 `string`이나 `Object` 같은 기본 JavaScript 타입일 수 있으며, 코드 내 다른 심벌에 대한 [JSDoc 이름 경로](../about/namepaths.md)일 수도 있습니다. 해당 이름 경로에 대한 심벌에 대한 문서가 작성된 경우, JSDoc는 해당 심벌의 문서로 자동 링크를 생성합니다. 또한 매개변수가 null이 될 수 없거나 모든 타입을 수용할 수 있음을 나타내기 위해 타입 표현식을 사용할 수 있습니다. 자세한 내용은 [`@type` 태그 문서](./type.md)를 참고하세요.

설명을 제공하는 경우, 설명 전에 하이픈을 삽입하여 JSDoc 주석을 더 읽기 쉽게 만들 수 있습니다. 하이픈의 앞과 뒤에 공백을 포함하는 것을 잊지 마세요.

## 예제

### 이름, 타입 및 설명

다음 예제에서는 `@param` 태그에 이름, 타입 및 설명을 포함하는 방법을 보여줍니다.

이름만

```js
/**
 * @param somebody
 */
function sayHello(somebody) {
  alert('Hello ' + somebody)
}
```

이름과 타입

```js
/**
 * @param {string} somebody
 */
function sayHello(somebody) {
  alert('Hello ' + somebody)
}
```

이름, 타입 및 설명

```js
/**
 * @param {string} somebody Somebody's name.
 */
function sayHello(somebody) {
  alert('Hello ' + somebody)
}
```

설명을 더 읽기 쉽게 만들기 위해 설명 전에 하이픈을 추가할 수 있습니다. 하이픈의 앞과 뒤에 공백을 포함하는 것을 잊지 마세요.

설명 전에 하이픈이 있는 이름, 타입 및 설명

```js
/**
 * @param {string} somebody - Somebody's name.
 */
function sayHello(somebody) {
  alert('Hello ' + somebody)
}
```

### 속성이 있는 매개변수

특정 속성이 있는 매개변수가 예상되는 경우, 추가적인 `@param` 태그를 제공하여 해당 속성을 문서화할 수 있습니다. 예를 들어, `employee` 매개변수가 `name` 및 `department` 속성을 가질 것으로 예상되는 경우, 다음과 같이 문서화할 수 있습니다.

매개변수의 속성 문서화

```js
/**
 * Assign the project to an employee.
 * @param {Object} employee - The employee who is responsible for the project.
 * @param {string} employee.name - The name of the employee.
 * @param {string} employee.department - The employee's department.
 */
Project.prototype.assign = function (employee) {
  // ...
}
```

이름이 명시되지 않은 구조 분해된 매개변수를 문서화할 수도 있습니다.

구조 분해 매개변수 문서화

```js
/**
 * Assign the project to an employee.
 * @param {Object} employee - The employee who is responsible for the project.
 * @param {string} employee.name - The name of the employee.
 * @param {string} employee.department - The employee's department.
 */
Project.prototype.assign = function ({ name, department }) {
  // ...
}
```

이 문법을 JSDoc의 배열 매개변수 문법과 결합할 수도 있습니다. 예를 들어, 여러 직원이 프로젝트에 배정될 수 있는 경우:

배열 내 값의 속성 문서화

```js
/**
 * Assign the project to a list of employees.
 * @param {Object[]} employees - The employees who are responsible for the project.
 * @param {string} employees[].name - The name of an employee.
 * @param {string} employees[].department - The employee's department.
 */
Project.prototype.assign = function (employees) {
  // ...
}
```

### 선택적 매개변수 및 기본값

다음 예제에서는 매개변수가 선택적이며 기본값이 있다는 것을 나타내는 방법을 보여줍니다.

선택적 매개변수 (JSDoc 문법 사용)

```js
/**
 * @param {string} [somebody] - Somebody's name.
 */
function sayHello(somebody) {
  if (!somebody) {
    somebody = 'John Doe'
  }
  alert('Hello ' + somebody)
}
```

선택적 매개변수 (Google Closure Compiler 문법 사용)

```js
/**
 * @param {string=} somebody - Somebody's name.
 */
function sayHello(somebody) {
  if (!somebody) {
    somebody = 'John Doe'
  }
  alert('Hello ' + somebody)
}
```

선택적 매개변수 및 기본값

```js
/**
 * @param {string} [somebody=John Doe] - Somebody's name.
 */
function sayHello(somebody) {
  if (!somebody) {
    somebody = 'John Doe'
  }
  alert('Hello ' + somebody)
}
```

### 여러 타입 및 반복 가능한 매개변수

다음 예제에서는 매개변수가 여러 타입(또는 모든 타입)을 수용할 수 있음을 나타내기 위해 타입 표현식을 사용하는 방법과 매개변수가 여러 번 제공될 수 있음을 보여줍니다. JSDoc이 지원하는 타입 표현식에 대한 자세한 내용은 [`@type` 태그 문서](./type.md)를 참조하세요.

하나의 타입 또는 다른 타입 허용 (타입 유니온)

```js
/**
 * @param {(string|string[])} [somebody=John Doe] - Somebody's name, or an array of names.
 */
function sayHello(somebody) {
  if (!somebody) {
    somebody = 'John Doe'
  } else if (Array.isArray(somebody)) {
    somebody = somebody.join(', ')
  }
  alert('Hello ' + somebody)
}
```

모든 타입 허용

```js
/**
 * @param {*} somebody - Whatever you want.
 */
function sayHello(somebody) {
  console.log('Hello ' + JSON.stringify(somebody))
}
```

매개변수를 반복할 수 있도록 허용

```js
/**
 * Returns the sum of all numbers passed to the function.
 * @param {...number} num - A positive or negative number.
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

### 콜백 함수

매개변수가 콜백 함수를 수용하는 경우, [`@callback` 태그](./callback.md)를 사용하여 콜백 타입을 정의한 다음, `@param` 태그에 콜백 타입을 포함할 수 있습니다.

콜백을 수용하는 매개변수

```js
/**
 * This callback type is called `requestCallback` and is displayed as a global symbol.
 *
 * @callback requestCallback
 * @param {number} responseCode
 * @param {string} responseMessage
 */

/**
 * Does something asynchronously and executes the callback on completion.
 * @param {requestCallback} cb - The callback that handles the response.
 */
function doSomethingAsynchronously(cb) {
  // code
}
```

## 관련 링크

- [@callback](./callback.md)
- [@returns](./returns.md)
- [@type](./type.md)
- [@typedef](./typedef.md)