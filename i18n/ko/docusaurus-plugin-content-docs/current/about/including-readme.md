---
id: including-readme
title: README 파일 포함하기
sidebar_label: README 파일 포함하기
---

문서에 `README` 파일을 포함하는 방법은 두 가지가 있습니다:

1.  JavaScript 파일의 소스 경로에 `README.md`라는 이름의 Markdown 파일 경로를 포함합니다. JSDoc은 소스 경로에서 발견된 첫 번째 `README.md` 파일을 사용합니다.
2.  JSDoc을 `-R/--readme` 커맨드라인 옵션과 함께 실행하여 `README` 파일의 경로를 지정합니다. 이 옵션은 JSDoc 3.3.0 및 이후 버전에서 사용할 수 있습니다. `README` 파일은 어떤 이름과 확장자를 가질 수 있지만, 반드시 Markdown 형식이어야 합니다.

`-R/--readme` 커맨드라인 옵션은 소스 경로보다 우선합니다. `-R/--readme` 커맨드라인 옵션을 사용하면, JSDoc은 소스 경로의 `README.md` 파일을 무시합니다.

JSDoc의 기본 템플릿을 사용하는 경우, `README` 파일의 내용은 생성된 문서의 `index.html` 파일에 HTML 형식으로 렌더링됩니다.

## 예제

소스 경로에 README 파일 포함하기

```bash
jsdoc path/to/js path/to/readme/README.md
```

-R/--readme 옵션 사용하기

```bash
jsdoc --readme path/to/readme/README path/to/js
```