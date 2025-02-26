---
id: variation
title: '@variation'
sidebar_label: '@variation'
---

## 문법

`@variation <variationNumber>`

## 개요

때때로 코드에는 같은 longname을 가진 여러 기호가 포함될 수 있습니다. 예를 들어, `Widget`이라는 이름을 가진 전역 클래스와 최상위 네임스페이스가 모두 있을 수 있습니다. 이러한 경우 "@link Widget"이나 "@memberof Widget"은 무엇을 의미할까요? 전역 네임스페이스인가요, 아니면 전역 클래스인가요?

변형(Variations)은 JSDoc이 동일한 longname을 가진 다른 기호를 구분하는 데 도움을 줍니다. 예를 들어, Widget 클래스에 대한 JSDoc 주석에 "@variation 2"가 추가되면, "@link Widget(2)"는 클래스를 참조하고, "@link Widget"은 네임스페이스를 참조합니다. 또는 [@alias](./alias.md)나 [@name](./name.md)와 같은 태그를 사용할 때 기호를 지정할 때 변형을 포함할 수 있습니다(예: "@alias Widget(2)").

@variation 태그에 어떤 값이든 제공할 수 있으며, 값과 longname의 조합이 전역적으로 고유한 longname 버전을 생성하는 한 가능합니다. 모범 사례로, 값 선택을 위한 예측 가능한 패턴을 사용하는 것이 좋으며, 이렇게 하면 코드를 문서화하는 데 더 쉽게 할 수 있습니다.

## 예제

다음 예제는 @variation 태그를 사용하여 Widget 클래스와 Widget 네임스페이스를 구별합니다.

@variation 태그 사용

```js
/**
 * Widget 네임스페이스.
 * @namespace Widget
 */

// '@class Widget(2)'를 사용하고 @variation 태그를 생략할 수도 있습니다.
 /**
 * Widget 클래스. {@link Widget.properties}의 기본 속성입니다.
 * @class
 * @variation 2
 * @param {Object} props - 위젯에 추가할 이름-값 쌍.
 */
function Widget(props) {}

/**
 * 새로운 {@link Widget(2)} 인스턴스에 기본적으로 추가되는 속성.
 */
Widget.properties = {
  /**
   * 위젯이 반짝이는지 여부를 나타냅니다.
   */
  shiny: true,
  /**
   * 위젯이 금속인지 여부를 나타냅니다.
   */
  metallic: true,
}
```

## 관련 링크

- [@alias](./alias.md)
- [@name](./name.md)