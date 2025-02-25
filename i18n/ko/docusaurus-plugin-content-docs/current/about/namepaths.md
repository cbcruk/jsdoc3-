---
id: namepaths
title: JSDoc 3에서 이름 경로 사용하기
sidebar_label: JSDoc 3에서 이름 경로 사용하기
---

## JSDoc 3의 이름 경로

문서의 다른 곳에 있는 JavaScript 변수를 참조할 때, 해당 변수에 매핑되는 고유 식별자를 제공해야 합니다. 이름 경로는 이를 수행하고 인스턴스 멤버, 정적 멤버 및 내부 변수를 구별하는 방법을 제공합니다.

JSDoc 3에서 이름 경로의 기본 구문 예제

```js
myFunction
MyConstructor
MyConstructor#instanceMember
MyConstructor.staticMember
MyConstructor~innerMember // JSDoc 2에서는 대시를 사용합니다.
```

아래 예제는 "say"라는 이름의 _인스턴스_ 메서드, "say"라는 이름의 _내부_ 함수, 그리고 "say"라는 이름의 _정적_ 메서드를 보여줍니다. 이들은 서로 독립적으로 존재하는 세 가지 구별된 메서드입니다.

코드를 설명하는 문서 태그를 사용하세요.

```js
/** @constructor */
Person = function () {
  this.say = function () {
    return "나는 인스턴스입니다."
  }

  function say() {
    return "나는 내부입니다."
  }
}
Person.say = function () {
  return "나는 정적입니다."
}

var p = new Person()
p.say() // 나는 인스턴스입니다.
Person.say() // 나는 정적입니다.
// 여기서 내부 함수에 직접 접근할 수 있는 방법은 없습니다.
```

세 가지 다른 메서드를 참조하기 위해서는 세 가지 다른 이름 경로 구문을 사용합니다:

코드를 설명하는 문서 태그를 사용하세요.

```js
Person#say  // "say."라는 이름의 인스턴스 메서드.
Person.say  // "say."라는 이름의 정적 메서드.
Person~say  // "say."라는 이름의 내부 메서드.
```

내부 메서드를 참조하는 구문이 있는 이유는 그 메서드가 정의된 함수 바깥에서 직접 접근할 수 없기 때문입니다. 그것은 사실이며 "~" 구문은 거의 사용되지 않지만, 컨테이너 내의 다른 메서드에서 내부 메서드에 대한 참조를 반환하는 것이 가능하므로, 코드의 다른 객체가 내부 메서드를 빌려 사용할 수 있는 가능성이 있습니다.

생성자가 인스턴스 멤버로서 다른 생성자를 갖는 경우에는 이름 경로를 함께 연결하여 더 긴 이름 경로를 형성할 수 있습니다:

코드를 설명하는 문서 태그를 사용하세요.

```js
/** @constructor */
Person = function () {
  /** @constructor */
  this.Idea = function () {
    this.consider = function () {
      return '음...'
    }
  }
}

var p = new Person()
var i = new p.Idea()
i.consider()
```

이 경우, "consider"라는 이름의 메서드를 참조하기 위해서는 다음과 같은 이름 경로를 사용합니다: `Person#Idea#consider`

이 체인은 연결 기호 `# . ~`의 조합과 함께 사용될 수 있습니다.

특수 케이스: 모듈, 외부 및 이벤트.

```js
/** 모듈입니다. 이름은 module:foo/bar입니다.
 * @module foo/bar
 */
/** 내장된 문자열 객체입니다. 이름은 external:String입니다.
 * @external String
 */
/** 이벤트입니다. 이름은 module:foo/bar.event:MyEvent입니다.
 * @event module:foo/bar.event:MyEvent
 */
```

이름 경로에 대한 몇 가지 특수 케이스가 있습니다: [@module](../tags/module.md) 이름은 "module:"으로 접두사 붙고, [@external](../tags/external.md) 이름은 "external:"으로 접두사 붙으며, [@event](../tags/event.md) 이름은 "event:"로 접두사 붙습니다.

이름에 특수 문자가 있는 객체의 이름 경로.

```js
/** @namespace */
var chat = {
  /**
   * {@link chat."#channel"}로 참조합니다.
   * @namespace
   */
  '#channel': {
    /**
     * {@link chat."#channel".open}으로 참조합니다.
     * @type {boolean}
     * @defaultvalue
     */
    open: true,
    /**
     * 내부 따옴표는 백슬래시로 이스케이프해야 합니다. 이것은
     * {@link chat."#channel"."say-\"hello\""}입니다.
     */
    'say-"hello"': function (msg) {},
  },
}

/**
 * 이제 {@link chat."#channel"} 네임스페이스에서 이벤트를 정의합니다.
 * @event chat."#channel"."op:announce-motd"
 */
```

위는 멤버 이름에 "비정상적"인 문자가 있는 네임스페이스의 예입니다(해시 문자, 대시, 심지어 따옴표). 이를 참조하려면 이름을 따옴표로 감싸기만 하면 됩니다: chat."#channel", chat."#channel"."op:announce-motd", 등등. 이름의 내부 따옴표는 백슬래시로 이스케이프해야 합니다: chat."#channel"."say-\\"hello\\"".

## 관련 링크

- [블록 및 인라인 태그](./block-inline-tags.md)
- [@link](../tags/inline-link.md)