---
id: property
title: '@property'
sidebar_label: '@property'
---

## 동의어

`@prop`

## 개요

@property 태그는 클래스, 네임스페이스 또는 기타 객체의 정적 속성 목록을 쉽게 문서화하는 방법입니다.

보통 JSDoc 템플릿은 중첩된 네임스페이스 계층의 각 수준에 대한 정보를 표시하기 위해 전체 새 페이지를 생성합니다. 때때로, 원하는 것은 중첩된 속성을 포함하여 모든 속성을 동일한 페이지에 나열하는 것입니다.

속성 태그는 그것들이 속성인 대상, 예를 들어 네임스페이스나 클래스의 문서 주석에서 사용해야 합니다. 이 태그는 정적 속성의 간단한 컬렉션을 위한 것으로 설계되어 있으며, 각 속성에 대한 @examples 또는 이와 유사한 복잡한 정보를 제공할 수 없습니다. 오직 유형, 이름 및 설명만 제공할 수 있습니다.

## 예제

다음 예제에서는 "config"라는 이름의 네임스페이스를 가지고 있습니다. 우리는 defaults 속성에 대한 모든 정보를 그 중첩된 값과 함께 config 문서와 동일한 페이지에 표시하고 싶습니다.

기본값 및 중첩된 기본 속성이 있는 네임스페이스

```js
/**
 * @namespace
 * @property {object}  defaults               - 파티의 기본값.
 * @property {number}  defaults.players       - 기본 플레이어 수.
 * @property {string}  defaults.level         - 파티의 기본 레벨.
 * @property {object}  defaults.treasure      - 기본 보물.
 * @property {number}  defaults.treasure.gold - 파티가 시작할 때의 금 액수.
 */
var config = {
  defaults: {
    players: 1,
    level: 'beginner',
    treasure: {
      gold: 0,
    },
  },
}
```

다음 예제는 속성이 선택 사항임을 표시하는 방법을 보여줍니다.

필수 및 선택적 속성이 있는 타입 정의

```js
/**
 * 사용자 타입 정의
 * @typedef {Object} User
 * @property {string} email
 * @property {string} [nickName]
 */
```

## 관련 링크

- [@enum](./enum.md)
- [@member](./member.md)