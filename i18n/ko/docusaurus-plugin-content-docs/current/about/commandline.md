---
id: commandline
title: JSDoc에 대한 명령줄 인수
sidebar_label: JSDoc에 대한 명령줄 인수
---

가장 기본적인 수준에서 JSDoc는 다음과 같이 사용됩니다:

```bash
/path/to/jsdoc yourSourceCodeFile.js anotherSourceCodeFile.js ...
```

여기서 `...`는 문서화를 생성할 다른 파일의 경로입니다.

또한, ".md"로 끝나는 [Markdown 파일](http://daringfireball.net/projects/markdown/)의 경로나 "README"라는 파일을 제공할 수 있으며, 이는 문서의 첫 페이지에 추가됩니다. [이 지침](./including-readme.md)을 참조하세요.

JSDoc는 여러 가지 명령줄 옵션을 지원하며, 대부분의 옵션은 긴 형식과 짧은 형식이 있습니다. 대안으로, 명령줄 옵션은 JSDoc에 제공되는 [구성 파일](./configuring-jsdoc.md)에서 지정할 수 있습니다. 명령줄 옵션은 다음과 같습니다:

| 옵션                                 | 설명                                                                                                                                                                              |
|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `-a <value>`, `--access <value>`      | 주어진 `access` 속성: `private`, `protected`, `public`, 또는 `undefined`, 또는 모든 접근 수준을 위해 `all`인 기호만 표시합니다. 기본적으로 `private` 기호를 제외한 모든 기호가 표시됩니다. |
| `-c <value>`, `--configure <value>`   | JSDoc [구성 파일](./configuring-jsdoc.md)의 경로입니다. 기본값은 JSDoc이 설치된 디렉터리의 `conf.json` 또는 `conf.json.EXAMPLE`입니다.                                      |
| `-d <value>`, `--destination <value>`  | 생성된 문서의 출력 폴더에 대한 경로입니다. JSDoc의 내장 Haruki 템플릿의 경우, 데이터를 콘솔에 덤프하기 위해 `console`을 사용하십시오. 기본값은 `./out`입니다.            |
| `--debug`                             | JSDoc 자체의 문제를 디버깅하는 데 도움이 되는 정보를 기록합니다.                                                                                                               |
| `-e <value>`, `--encoding <value>`    | 모든 소스 파일을 읽을 때 이 인코딩을 가정합니다. 기본값은 `utf8`입니다.                                                                                                      |
| `-h`, `--help`                        | JSDoc의 명령줄 옵션에 대한 정보를 표시한 후 종료합니다.                                                                                                                         |
| `--match <value>`                     | 이름에 `value`가 포함된 테스트만 실행합니다.                                                                                                                                     |
| `--nocolor`                           | 테스트를 실행할 때 콘솔 출력에서 색상을 사용하지 않습니다. Windows에서는 이 옵션이 기본적으로 활성화됩니다.                                                                  |
| `-p`, `--private`                     | 생성된 문서에 [`@private` 태그](../tags/private.md)로 표시된 기호를 포함합니다. 기본적으로 개인 기호는 포함되지 않습니다.                                                      |
| `-P`, `--package`                     | 프로젝트 이름, 버전 및 기타 세부 정보를 포함하는 `package.json` 파일입니다. 기본값은 소스 경로에서 발견된 첫 번째 `package.json` 파일입니다.                                   |
| `--pedantic`                          | 오류를 치명적 오류로 간주하고 경고를 오류로 처리합니다. 기본값은 `false`입니다.                                                                                                |
| `-q <value>`, `--query <value>`       | 구문 분석하여 전역 변수 `env.opts.query`에 저장할 쿼리 문자열입니다. 예: `foo=bar&baz=true`.                                                                                 |
| `-r`, `--recurse`                     | 소스 파일 및 튜토리얼을 검색할 때 하위 디렉터리로 재귀합니다.                                                                                                                  |
| `-R`, `--readme`                      | 생성된 문서에 포함할 `README.md` 파일입니다. 기본값은 소스 경로에서 발견된 첫 번째 `README.md` 파일입니다.                                                                    |
| `-t <value>`, `--template <value>`    | 출력을 생성할 때 사용할 템플릿의 경로입니다. 기본값은 JSDoc의 내장 기본 템플릿인 `templates/default`입니다.                                                                  |
| `-T`, `--test`                        | JSDoc의 테스트 스위트를 실행하고 결과를 콘솔에 출력합니다.                                                                                                                      |
| `-u <value>`, `--tutorials <value>`   | JSDoc이 튜토리얼을 검색해야 하는 디렉터리입니다. 생략하면 튜토리얼 페이지가 생성되지 않습니다. 더 많은 정보는 [튜토리얼 지침](./tutorials.md)을 참조하세요.                       |
| `-v`, `--version`                     | JSDoc의 버전 번호를 표시한 후 종료합니다.                                                                                                                                           |
| `--verbose`                           | JSDoc가 실행되는 동안 콘솔에 자세한 정보를 기록합니다. 기본값은 `false`입니다.                                                                                                    |
| `-X`, `--explain`                     | 모든 도클렛을 JSON 형식으로 콘솔에 덤프한 후 종료합니다.                                                                                                                          |

## 예제

`./src` 디렉터리의 파일에 대한 문서를 생성하고, 구성 파일 `/path/to/my/conf.json`을 사용하여, 결과를 `./docs` 디렉터리에 저장합니다:

```bash
/path/to/jsdoc src -r -c /path/to/my/conf.json -d docs
```

이름에 `tag`라는 단어가 포함된 모든 JSDoc 테스트를 실행하고 각 테스트에 대한 정보를 기록합니다:

```bash
/path/to/jsdoc -T --match tag --verbose
```

## 관련 링크

[JSDoc 구성 파일로 구성하기](./configuring-jsdoc.md)