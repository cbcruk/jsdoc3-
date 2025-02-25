---
id: hideconstructor
title: '@hideconstructor'
sidebar_label: '@hideconstructor'
---

## 문법

`@hideconstructor`

## 개요

`@hideconstructor` 태그는 JSDoc에 클래스의 생성자를 문서화하지 않아야 함을 알려줍니다. 이 태그는 JSDoc 3.5.0 이상에서 사용할 수 있습니다.

ES2015 이전 클래스에서는 이 태그를 [`@class` 또는 `@constructor` 태그](./class.md)와 함께 사용하십시오.

ES2015 클래스에서는 생성자에 대한 JSDoc 주석에서 이 태그를 사용하십시오. 클래스에 명시적인 생성자가 없는 경우, 클래스에 대한 JSDoc 주석에서 이 태그를 사용하십시오.

## 예제

ES2015 이전 클래스를 위한 @hideconstructor 태그

```js
/**
 * @classdesc 토스터 싱글톤.
 * @class
 * @hideconstructor
 */
var Toaster = (function () {
  var instance = null

  function Toaster() {}

  /**
   * 아이템을 굽습니다.
   *
   * @alias toast
   * @memberof Toaster
   * @instance
   * @param {BreadyThing} item - 굽는 아이템.
   * @return {Toast} 굽힌 빵 같은 것.
   */
  Toaster.prototype.toast = function (item) {}

  return {
    /**
     * Toaster 인스턴스를 가져옵니다.
     *
     * @alias Toaster.getInstance
     * @returns {Toaster} Toaster 인스턴스.
     */
    getInstance: function () {
      if (instance === null) {
        instance = new Toaster()
        delete instance.constructor
      }

      return instance
    },
  }
})()
```

ES2015 클래스를 위한 @hideconstructor 태그

```js
    /**
     * 와플 철판 싱글톤.
     */
    class WaffleIron {
        #instance = null;

        /**
         * 와플 철판을 생성합니다.
         *
         * @hideconstructor
         */
        constructor() {
            if (#instance) {
                return #instance;
            }

            /**
             * 와플을 요리합니다.
             *
             * @param {Batter} batter - 와플 반죽.
             * @return {Waffle} 요리된 와플.
             */
            this.cook = function(batter) {};

            this.#instance = this;
        }

        /**
         * WaffleIron 인스턴스를 가져옵니다.
         *
         * @return {WaffleIron} WaffleIron 인스턴스.
         */
        getInstance() {
            return new WaffleIron();
        }
    }
```

## 관련 링크

[@class](./class.md)