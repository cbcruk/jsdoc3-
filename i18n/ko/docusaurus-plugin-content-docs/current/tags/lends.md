---
id: lends
title: '@lends'
sidebar_label: '@lends'
---

## 문법

`@lends <namepath>`

## 개요

`@lends` 태그는 주어진 이름을 가진 기호의 멤버인 것처럼 객체 리터럴의 모든 멤버를 문서화할 수 있게 해줍니다. 이는 객체 리터럴을 해당 멤버로부터 이름이 붙은 클래스를 생성하는 함수에 전달할 때 유용할 수 있습니다.

## 예제

이 예제에서는 `initialize`와 `say`라는 인스턴스 메소드와 함께 `Person`이라는 이름의 클래스를 만들기 위해 도우미 함수를 사용하고자 합니다. 이는 몇 가지 인기 있는 프레임워크가 클래스 생성을 처리하는 방식과 유사합니다.

예제 클래스

```js
// 우리는 이걸 클래스로 문서화하고자 합니다
var Person = makeClass(
  // 우리는 이걸 메소드로 문서화하고자 합니다
  {
    initialize: function (name) {
      this.name = name
    },
    say: function (message) {
      return this.name + ' says: ' + message
    },
  }
)
```

주석이 없다면 JSDoc은 이 코드가 두 개의 메소드를 가진 `Person` 클래스를 생성한다는 것을 인식하지 못합니다. 메소드를 문서화하기 위해 우리는 객체 리터럴 바로 앞에 `@lends` 태그를 사용해야 합니다. `@lends` 태그는 JSDoc에게 해당 객체 리터럴의 모든 멤버 이름이 `Person`이라는 이름의 변수로 "대출"되고 있다는 것을 알려줍니다. 각 메소드에 대한 주석도 추가해야 합니다.

다음 예제는 우리가 원하는 것에 더 가까워집니다:

정적 메소드로 문서화됨

```js
/** @class */
var Person = makeClass(
  /** @lends Person */
  {
    /**
     * `Person` 인스턴스를 생성합니다.
     * @param {string} name - 사람의 이름.
     */
    initialize: function (name) {
      this.name = name
    },
    /**
     * 무언가를 말합니다.
     * @param {string} message - 전달할 메시지.
     * @returns {string} 완전한 메시지.
     */
    say: function (message) {
      return this.name + ' says: ' + message
    },
  }
)
```

이제 `initialize`와 `say`라는 함수는 문서화되어 있지만, `Person` 클래스의 정적 메소드로 나타납니다. 이는 우리가 의미했던 것일 수도 있지만, 이 경우 `initialize`와 `say`는 `Person` 클래스의 인스턴스에 속해야 합니다. 따라서 메소드를 클래스의 프로토타입에 대출하여 약간 변경합니다:

인스턴스 메소드로 문서화됨

```js
/** @class */
var Person = makeClass(
  /** @lends Person.prototype */
  {
    /**
     * `Person` 인스턴스를 생성합니다.
     * @param {string} name - 사람의 이름.
     */
    initialize: function (name) {
      this.name = name
    },
    /**
     * 무언가를 말합니다.
     * @param {string} message - 전달할 메시지.
     * @returns {string} 완전한 메시지.
     */
    say: function (message) {
      return this.name + ' says: ' + message
    },
  }
)
```

마지막 단계: 우리의 클래스 프레임워크는 대출된 `initialize` 함수를 사용하여 `Person` 인스턴스를 생성하지만, `Person` 인스턴스는 자체 `initialize` 메소드를 가지고 있지 않습니다. 해결책은 대출된 함수에 `@constructs` 태그를 추가하는 것입니다. 두 클래스를 문서화하지 않도록 `@class` 태그를 제거하는 것도 잊지 마세요.

생성자로 문서화됨

```js
var Person = makeClass(
  /** @lends Person.prototype */
  {
    /**
     * `Person` 인스턴스를 생성합니다.
     * @constructs
     * @param {string} name - 사람의 이름.
     */
    initialize: function (name) {
      this.name = name
    },
    /**
     * 무언가를 말합니다.
     * @param {string} message - 전달할 메시지.
     * @returns {string} 완전한 메시지.
     */
    say: function (message) {
      return this.name + ' says: ' + message
    },
  }
)
```

## 관련 링크

- [@borrows](./borrows.md)
- [@constructs](./constructs.md)