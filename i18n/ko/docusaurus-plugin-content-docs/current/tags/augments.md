---
id: augments
title: '@augments'
sidebar_label: '@augments'
---

## 동의어

`@extends`

## 구문

`@augments <namepath>`

## 개요

`@augments` 또는 `@extends` 태그는 기호가 부모 기호로부터 상속받고, 잠재적으로 추가된다는 것을 나타냅니다. 이 태그는 클래스 기반 및 프로토타입 기반 상속 모두를 문서화하는 데 사용할 수 있습니다.

JSDoc 3.3.0 이상에서는 기호가 여러 부모로부터 상속받고, 두 부모 모두 동일한 이름의 멤버를 가진 경우, JSDoc은 JSDoc 주석에서 나열된 마지막 부모의 문서를 사용합니다.

## 예제

다음 예제에서는 `Duck` 클래스가 `Animal`의 서브클래스로 정의됩니다. `Duck` 인스턴스는 `Animal` 인스턴스와 동일한 속성을 가지며, `Duck` 인스턴스에만 고유한 `speak` 메서드도 갖습니다.

클래스/서브클래스 관계 문서화

```js
/**
 * @constructor
 */
function Animal() {
  /** 이 동물이 살아 있나요? */
  this.alive = true
}

/**
 * @constructor
 * @augments Animal
 */
function Duck() {}
Duck.prototype = new Animal()

/** 오리는 뭐라고 말할까요? */
Duck.prototype.speak = function () {
  if (this.alive) {
    alert('Quack!')
  }
}

var d = new Duck()
d.speak() // Quack!
d.alive = false
d.speak() // (아무것도 아님)
```

다음 예제에서 `Duck` 클래스는 `Flyable` 및 `Bird` 두 클래스 모두로부터 상속받으며, 두 클래스 모두 `takeOff` 메서드를 정의합니다. `Duck`에 대한 문서가 `@augments Bird`를 마지막으로 나열하므로, JSDoc은 자동으로 `Duck#takeOff`를 `Bird#takeOff`의 주석을 사용하여 문서화합니다.

중복된 메서드 이름으로 인한 다중 상속

```js
/**
 * 날 수 있는 것들을 위한 추상 클래스입니다.
 * @class
 */
function Flyable() {
  this.canFly = true
}

/** 이륙합니다. */
Flyable.prototype.takeOff = function () {
  // ...
}

/**
 * 새를 나타내는 추상 클래스입니다.
 * @class
 */
function Bird(canFly) {
  this.canFly = canFly
}

/** 가능하다면 날개를 펴고 날아보세요. */
Bird.prototype.takeOff = function () {
  if (this.canFly) {
    this._spreadWings()._run()._flapWings()
  }
}

/**
 * 오리를 나타내는 클래스입니다.
 * @class
 * @augments Flyable
 * @augments Bird
 */
function Duck() {}

// 문서에서는 "가능하다면 날개를 펴고 날아보세요."라고 설명됩니다.
Duck.prototype.takeOff = function () {
  // ...
}
```

## 관련 링크

- [@borrows](./borrows.md)
- [@class](./class.md)
- [@mixes](./mixes.md)
- [@mixin](./mixin.md)