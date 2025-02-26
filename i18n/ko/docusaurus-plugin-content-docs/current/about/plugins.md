---
id: plugins
title: JSDoc 플러그인에 대한 설명
sidebar_label: JSDoc 플러그인에 대한 설명
---

## 플러그인 생성 및 활성화하기

새로운 JSDoc 플러그인을 생성하고 활성화하려면 두 가지 단계가 필요합니다:

1.  플러그인 코드를 포함할 JavaScript 모듈을 생성합니다.
2.  해당 모듈을 [JSDoc의 구성 파일](./configuring-jsdoc.md)의 `plugins` 배열에 포함시킵니다. 절대 경로나 상대 경로를 지정할 수 있습니다. 상대 경로를 사용하는 경우, JSDoc은 현재 작업 디렉토리, 구성 파일이 위치한 디렉토리 및 JSDoc 디렉토리에서 플러그인을 순차적으로 검색합니다.

예를 들어, 현재 작업 디렉토리의 `plugins/shout.js` 파일에 플러그인이 정의되어 있다면, JSDoc 구성 파일의 `plugins` 배열에 문자열 `plugins/shout`를 추가하면 됩니다:

JSDoc 구성 파일에 플러그인 추가하기

```json
{
  "plugins": ["plugins/shout"]
}
```

JSDoc은 구성 파일에 나열된 순서대로 플러그인을 실행합니다.

## JSDoc 3 플러그인 작성하기

JSDoc 3의 플러그인 시스템은 구문 분석 과정에 대한 광범위한 제어를 제공합니다. 플러그인은 다음 작업을 통해 구문 분석 결과에 영향을 줄 수 있습니다:

- 이벤트 핸들러 정의
- 태그 정의
- 추상 구문 트리 노드를 위한 방문자 정의

### 이벤트 핸들러

가장 높은 수준에서, 플러그인은 JSDoc이 발생시키는 특정 명명된 이벤트에 대한 핸들러를 등록할 수 있습니다. JSDoc은 핸들러에 이벤트 객체를 전달합니다. 플러그인 모듈은 핸들러를 포함하는 `handlers` 객체를 내보내야 합니다:

'newDoclet' 이벤트에 대한 이벤트 핸들러 플러그인

```js
exports.handlers = {
  newDoclet: function(e) {
    // 새로운 doclet을 발견했을 때 무언가를 수행합니다.
  }
};
```

JSDoc은 기본 코드와 동일한 순서로 이벤트를 발생시킵니다.

이벤트 핸들러 플러그인은 이벤트 객체에 `stopPropagation` 속성을 설정하여 이후 플러그인의 실행을 중단할 수 있습니다 (`e.stopPropagation = true`). 플러그인은 `preventDefault` 속성을 설정하여 이벤트가 발생하는 것을 막을 수 있습니다 (`e.preventDefault = true`).

#### 이벤트: parseBegin

`parseBegin` 이벤트는 JSDoc이 소스 파일을 로드하고 구문 분석을 시작하기 전에 발생합니다. 플러그인은 이 이벤트의 내용을 수정하여 JSDoc이 구문 분석할 파일을 제어할 수 있습니다.

**참고**: 이 이벤트는 JSDoc 3.2 이상에서 발생합니다.

이벤트 객체는 다음 속성을 포함합니다:

- `sourcefiles`: 구문 분석될 소스 파일의 경로 배열입니다.

#### 이벤트: fileBegin

`fileBegin` 이벤트는 파서가 파일을 구문 분석하기 직전에 발생합니다. 필요하면 플러그인이 이 이벤트를 사용하여 파일별 초기화를 트리거할 수 있습니다.

이벤트 객체는 다음 속성을 포함합니다:

- `filename`: 파일의 이름입니다.

#### 이벤트: beforeParse

`beforeParse` 이벤트는 구문 분석이 시작되기 전에 발생합니다. 플러그인은 이 방법을 사용하여 구문 분석될 소스 코드를 수정할 수 있습니다. 예를 들어, 플러그인은 JSDoc 주석을 추가하거나 유효하지 않은 JavaScript인 전처리 태그를 제거할 수 있습니다.

이벤트 객체는 다음 속성을 포함합니다:

- `filename`: 파일의 이름입니다.
- `source`: 파일의 내용입니다.

아래는 문서화되지 않는 기법이지만 사용자에게 제공되는 메서드를 문서화하기 위해 소스에 함수에 대한 가상 주석을 추가하는 예제입니다:

예제

```js
exports.handlers = {
  beforeParse: function(e) {
    var extraDoc = [
      "/**",
      " * 슈퍼클래스가 제공하는 함수입니다.",
      " * @name superFunc",
      " * @memberof ui.mywidget",
      " * @function",
      " */"
    ];
    e.source += extraDoc.join("\n");
  }
};
```

#### 이벤트: jsdocCommentFound

`jsdocCommentFound` 이벤트는 JSDoc 주석이 발견될 때마다 발생합니다. 주석은 코드와 관련이 있을 수도 있고 없을 수도 있습니다. 이 이벤트를 사용하여 주석의 내용을 처리하기 전에 수정할 수 있습니다.

이벤트 객체는 다음 속성을 포함합니다:

- `filename`: 파일의 이름입니다.
- `comment`: JSDoc 주석의 텍스트입니다.
- `lineno`: 주석이 발견된 줄 번호입니다.
- `columnno`: 주석이 발견된 열 번호입니다. JSDoc 3.5.0 이상에서 사용 가능합니다.

#### 이벤트: symbolFound

`symbolFound` 이벤트는 파서가 문서화해야 할 수 있는 기호를 발견할 때 발생합니다. 예를 들어, 파서는 소스 파일의 각 변수, 함수 및 객체 리터럴에 대해 `symbolFound` 이벤트를 발생시킵니다.

이벤트 객체는 다음 속성을 포함합니다:

- `filename`: 파일의 이름입니다.
- `comment`: 기호와 관련된 주석의 텍스트(있는 경우)입니다.
- `id`: 기호의 고유 ID입니다.
- `lineno`: 기호가 발견된 줄 번호입니다.
- `columnno`: 기호가 발견된 열 번호입니다. JSDoc 3.5.0 이상에서 사용 가능합니다. 
- `range`: 기호와 관련된 소스 파일의 첫 번째 및 마지막 문자의 숫자 인덱스를 포함하는 배열입니다.
- `astnode`: 추상 구문 트리에서 기호의 노드입니다.
- `code`: 코드에 대한 자세한 정보를 포함하는 객체입니다. 이 객체는 일반적으로 `name`, `type` 및 `node` 속성을 포함합니다. 객체는 기호에 따라 `value`, `paramnames` 또는 `funcscope` 속성을 가질 수도 있습니다.

#### 이벤트: newDoclet

`newDoclet` 이벤트는 가장 높은 수준의 이벤트입니다. 새로운 doclet이 생성되었을 때 발생합니다. 이는 JSDoc 주석이나 기호가 처리되고, 템플릿에 전달될 실제 doclet이 생성되었음을 의미합니다.

이벤트 객체는 다음 속성을 포함합니다:

- `doclet`: 생성된 새로운 doclet입니다.

doclet의 속성은 doclet이 나타내는 주석이나 기호에 따라 달라질 수 있습니다. 일반적으로 볼 수 있는 일부 공통 속성은 다음과 같습니다:

- `comment`: JSDoc 주석의 텍스트이거나 기호가 문서화되지 않은 경우 빈 문자열입니다.
- `meta`: doclet이 소스 파일과 어떻게 관련되는지를 설명하는 객체입니다 (예: 소스 파일 내 위치).
- `description`: 문서화되는 기호에 대한 설명입니다.
- `kind`: 문서화되는 기호의 종류입니다 (예: `class` 또는 `function`).
- `name`: 기호의 짧은 이름입니다 (예: `myMethod`).
- `longname`: 멤버 정보가 포함된 완전한 자격 이름입니다 (예: `MyClass#myMethod`).
- `memberof`: 이 기호가 속한 모듈, 네임스페이스 또는 클래스입니다 (예: `MyClass`), 기호에 부모가 없는 경우 빈 문자열입니다.
- `scope`: 부모 내에서 기호의 범위입니다 (예: `global`, `static`, `instance` 또는 `inner`).
- `undocumented`: 기호에 JSDoc 주석이 없다면 `true`로 설정됩니다.
- `defaultvalue`: 기호의 기본 값입니다.
- `type`: 기호의 유형에 대한 세부 정보를 포함하는 객체입니다.
- `params`: 함수의 파라미터 목록을 포함하는 객체입니다.
- `tags`: JSDoc이 인식하지 못한 태그 목록을 포함하는 객체입니다. JSDoc의 구성 파일에서 `allowUnknownTags`가 `true`로 설정된 경우에만 사용 가능합니다.

JSDoc이 생성한 doclet을 보려면 [`-X` 명령줄 옵션](./commandline.md)을 사용하여 JSDoc을 실행하세요.

아래는 설명을 대문자로 변경하는 `newDoclet` 핸들러의 예입니다:

예제

```js
exports.handlers = {
  newDoclet: function(e) {
    // e.doclet는 새로 생성된 doclet을 참조합니다.
    // 원하는 경우 해당 doclet의 속성을 읽고 수정할 수 있습니다.
    if (typeof e.doclet.description === "string") {
      e.doclet.description = e.doclet.description.toUpperCase();
    }
  }
};
```

#### 이벤트: fileComplete

`fileComplete` 이벤트는 파서가 파일을 구문 분석하는 것이 완료되었을 때 발생합니다. 플러그인은 이 이벤트를 사용하여 파일