---
id: configuring-default-template
title: JSDoc 기본 템플릿 구성
sidebar_label: JSDoc 기본 템플릿 구성
---

JSDoc의 기본 템플릿은 생성된 문서의 외관과 내용을 사용자 정의할 수 있는 여러 옵션을 제공합니다.

이 옵션을 사용하려면 JSDoc에 대한 [구성 파일을 생성](./configuring-jsdoc.md)하고 구성 파일에 적절한 옵션을 설정해야 합니다.

## 예쁘게 출력된 소스 파일 생성

기본적으로 JSDoc의 기본 템플릿은 소스 파일의 예쁘게 출력된 버전을 생성합니다. 또한 문서 내에서 이러한 예쁘게 출력된 파일에 링크를 제공합니다.

예쁘게 출력된 파일을 비활성화하려면 옵션 `templates.default.outputSourceFiles`를 `false`로 설정하십시오. 이 옵션을 사용하면 문서에서 소스 파일에 대한 링크도 제거됩니다. 이 옵션은 JSDoc 3.3.0 및 이후 버전에서 사용할 수 있습니다.

## 정적 파일을 출력 디렉토리로 복사

JSDoc의 기본 템플릿은 CSS 스타일시트와 같은 몇 가지 정적 파일을 출력 디렉토리로 자동으로 복사합니다. JSDoc 3.3.0 및 이후 버전에서는 기본 템플릿에 추가 정적 파일을 출력 디렉토리로 복사하도록 지시할 수 있습니다. 예를 들어, 이미지 디렉토리를 출력 디렉토리로 복사하여 문서에서 이러한 이미지를 표시할 수 있습니다.

출력 디렉토리에 추가 정적 파일을 복사하려면 다음 옵션을 사용하십시오:

- `templates.default.staticFiles.include`: 출력 디렉토리에 복사해야 하는 경로의 배열입니다. 하위 디렉토리도 복사됩니다.
- `templates.default.staticFiles.exclude`: 출력 디렉토리에 복사하지 않아야 하는 경로의 배열입니다.
- `templates.default.staticFiles.includePattern`: 복사할 파일을 나타내는 정규 표현식입니다. 이 속성이 정의되지 않으면 모든 파일이 복사됩니다.
- `templates.default.staticFiles.excludePattern`: 건너뛸 파일을 나타내는 정규 표현식입니다. 이 속성이 정의되지 않으면 아무 것도 건너뛰지 않습니다.

이미지 디렉토리를 출력 디렉토리로 복사하기

`./myproject/static`의 모든 정적 파일을 출력 디렉토리로 복사하려면:

```json
{
  "templates": {
    "default": {
      "staticFiles": {
        "include": ["./myproject/static"]
      }
    }
  }
}
```

정적 파일 디렉토리에 `./myproject/static/img/screen.png` 파일이 포함되어 있다면, HTML 태그 `<img src="img/screen.png">`를 사용하여 문서에 이미지를 표시할 수 있습니다.

## 페이지 바닥글에 현재 날짜 표시

기본적으로 JSDoc의 기본 템플릿은 생성된 문서의 바닥글에 항상 현재 날짜를 표시합니다. JSDoc 3.3.0 및 이후 버전에서는 옵션 `templates.default.includeDate`를 `false`로 설정하여 현재 날짜를 생략할 수 있습니다.

## 내비게이션 열에 긴 이름 표시

기본적으로 JSDoc의 기본 템플릿은 내비게이션 열에 각 기호 이름의 축약된 버전을 표시합니다. 예를 들어, 기호 `my.namespace.MyClass`는 단순히 `MyClass`로 표시됩니다. 전체 긴 이름을 대신 표시하려면 옵션 `templates.default.useLongnameInNav`를 `true`로 설정하십시오. 이 옵션은 JSDoc 3.4.0 및 이후 버전에서 사용할 수 있습니다.

## 기본 템플릿의 레이아웃 파일 덮어쓰기

기본 템플릿은 `layout.tmpl`이라는 파일을 사용하여 생성된 문서의 각 페이지에 대한 헤더와 바닥글을 지정합니다. 특히 이 파일은 각 페이지에 어떤 CSS 및 JavaScript 파일이 로드되는지를 정의합니다. JSDoc 3.3.0 및 이후 버전에서는 사용할 사용자 정의 `layout.tmpl` 파일을 지정할 수 있으며, 이를 통해 표준 파일 외에 또는 대신에 자신의 사용자 정의 CSS 및 JavaScript 파일을 로드할 수 있습니다.

이 기능을 사용하려면 옵션 `templates.default.layoutFile`을 사용자 정의 레이아웃 파일의 경로로 설정하십시오. 상대 경로는 현재 작업 디렉토리, 구성 파일의 경로 및 JSDoc 디렉토리에 대해 순서대로 해석됩니다.

## 관련 링크

[JSDoc 구성 파일로 JSDoc 구성하기](./configuring-jsdoc.md)