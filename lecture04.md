Compiler Options (tsconfig.json)
===
http://json.schemastore.org/tsconfig

tsconfig.json 최상위 프로퍼티
---
- `compileOnSave`  
  boolean(default false), IDE가 지원해야 하기 때문에 json만 설정한다고 되는 건 아니다
- `extends`  
  string(상대경로), ClientSide와 ServerSide Typescript 모듈의 설정이 어느정도 비슷할 때, 한 파일을 만들어서 공유하는 등의 용도로 사용
- `compileOptions`  
  가장 많이 작성
- `files`, `include`, `exclude`
  - 셋 다 설정이 안 됐으면 모두 컴파일함
  - **file > exclude > include**
  - files: 상대경로 또는 절대경로의 리스트 배열
  - files는 각각의 파일을 불러오고, include는 경로의 파일들을 그룹으로 불러온다
  - include, exclude는 **glob 패턴(.gitignore)으로 작성**
  - include: * => `.ts, .tsx, .d.ts` 만 적용
  - exclude: (설정 안 함) => `node_modules, bower_components, jspm_packages, <outDir>`, outDir은 include에 있어도 언제나 제외
- `typeAcquisition`  
  컴파일 할 때 사용하는 것이 아니라, 사용자가 작성한 모듈을 definition 파일로 만드는 설정

대표적인 compileOptions
---
- `importHelpers`  
  중복되는 TS Helper 함수를 추출해서 node 모듈로서 갖다가 쓸 수 있게 해준다
- `removeComment`  
  주석을 지워준다
- `target`  
  컴파일된 모듈이 작성되는 ECMAScript 버전을 결정한다    
  target: 'es6' => modules: 'es6' defualt 적용  
  target: '(es6 이외)' => modules: 'commonjs' default 적용
- `lib`  
  기본 type definition 라이브러리로 어떤 것을 사용할지 정한다
- `module`  
  컴파일된 모듈의 모듈 시스템을 결정한다
- `moduleResolution`  
  ts 소스코드에서 모듈을 사용하는 방식을 결정한다  
  Node(commonjs) or Classic  
  결과적으로는 잘 설정하지 않는다. module: 'commonjs' 면 moduleResolution 을 적용할 필요가 없다
- `outDir`  
  .ts 소스코드가 들어있는 디렉터리 구조 그대로
- `outFile`  
  결과물이 지정한 경로 + 이름을 가진 파일로 나오게 한다
- `paths, baseUrl`  
- `rootDir`  

### typeRoots vs types

- type은 빨간줄이 안 나오게 해주는 역할을 한다  
  사용되는 모든 타입들이 미리 정의되어 있어야 하기 때문이다  
  이런 점이 원래 pain point 였는데,  

  1. 공식적인 type 묶기 => typings, tsd
  2. d.ts 파일들을 @types 로 묶기
  
  방법을 통해 한결 편해졌다
- 내장 type definition 시스템(definition 파일 연결을 관리)
- 아무 설정 안하면 default 경로(`./node_modules/@types`)를 찾아서 사용한다
- typeRoots와 types를 같이 사용하지 않는다
- 기본적으로 `./node_modules/@types`(default), `./@types`(사용자 정의 타입)를 지정해야 한다 여기에서 d.ts를 불러와서 definition을 사용한다
  
- `typeRoots`  
  배열 내에 있는 경로들에서 가져와서 사용
- `types`  
  배열 내, 혹은 `./node_modules/@types` 에 있는 모듈 이름에서 찾아온다  
  빈 배열을 넣으면 이 시스템을 이용하지 않겠다는 의미다
- 어떤 모듈에 d.ts 파일이 없으면 손수 만들거나, API 버전에 안 맞는 d.ts 파일만 있을 때에는 repo fork 떠서 직접 작성할 수도 있다
  
대표적인 필요없는 options
---
- `noLib`: default library 안쓰는 사람 없음