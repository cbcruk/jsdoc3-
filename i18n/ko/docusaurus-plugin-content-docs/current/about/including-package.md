---
id: including-package
title: 패키지 파일 포함하기
sidebar_label: 패키지 파일 포함하기
---

패키지 파일은 프로젝트의 이름과 버전 번호와 같은 프로젝트 문서화에 유용한 정보를 포함하고 있습니다. JSDoc은 문서를 생성할 때 `package.json` 파일의 정보를 자동으로 사용할 수 있습니다. 예를 들어, 기본 템플릿은 문서에서 프로젝트의 이름과 버전 번호를 보여줍니다.

문서에 `package.json` 파일을 포함하는 방법은 두 가지가 있습니다:

1. JavaScript 파일의 소스 경로에 `package.json` 파일의 경로를 포함합니다. JSDoc은 소스 경로에서 가장 처음 발견한 `package.json` 파일을 사용합니다.
2. `-P/--package` 명령줄 옵션을 사용하여 JSDoc을 실행하고, `package.json` 파일의 경로를 지정합니다. 이 옵션은 JSDoc 3.3.0 이상에서 사용할 수 있습니다.

`-P/--package` 명령줄 옵션은 소스 경로보다 우선합니다. `-P/--package` 명령줄 옵션을 사용하는 경우, JSDoc은 소스 경로에서의 모든 `package.json` 파일을 무시합니다.

`package.json` 파일은 [npm의 패키지 형식](https://docs.npmjs.com/files/package.json)을 사용해야 합니다.

## 예제

소스 경로에 패키지 파일 포함하기

```bash
jsdoc path/to/js path/to/package/package.json
```

-P/--package 옵션 사용하기

```bash
jsdoc --package path/to/package/package-docs.json path/to/js
```