개발 환경 구축 및 컴파일러 사용
=====

런타임(실행) 환경 + 컴파일러 + 에디터

실행환경
-----
Browser or Node.js  
Typescript에서 컴파일러를 제공하는 게 npm 모듈로 있기에 **Node.js 설치 권장**

Node.js란?  
-----
Chrome's V8 Javascript Engine을 사용하여  
자바스크립트를 해석하고 OS 레벨에서의 API를 제공하는 서버사이드용

자바스크립트 런타임 환경
-----
visual studio code 자체가 typescript로 만들어져있고 컴파일러가 이미 설치되어있기 때문에 타입 체크를 할 때에는 따로 컴파일러를 설치할 필요가 없다.
  
### Step1
`npm init -y`

### Step2
`npm install typescript -g`  
or  
`npm install typescript` (local folder)

### Step3
```json
"scripts": {
  "transpile": "tsc",
  "test": "echo \"Error: no test specified\" && exit 1"
}, 
```

> `tsc` 명령어를 사용해서 그때마다 Transpile 해줄 수도 있지만, `package.json의 scripts`에 적용해두면 더욱 쉽게 쓸 수 있다

> 원래는 `./node_modules/.bin/tsc` 써야 하는데 npm의 scripts에서는 .bin/ 상대경로를 쓰지 않아도 되도록 npm이 만들었다. 만약 npm scripts 없이 커맨드 라인에서 사용할거라면 `./node_modules/.bin/tsc` 처럼 상대경로를 지정해줘야 한다

### Step4
`C:\Users\김예원\Desktop\Study_Typescript>tsc test.ts`

커맨드 실행 후 `test.js` 생성됨

### Step5
`tsc --init`

커맨드 실행 후 tsconfig.json 생성됨  
(tsc 컴파일러의 초기 세팅을 하겠다는 의미 ≒ `npm init`)

### Step 6
`node test.js`

tsconfig.json
-----
- target: 도출되는 결과물은 ~ (ex. es5)로 작성되어 있다
- module: 결과물이 모듈 형태인데 그게 ~ (ex. common.js) 로 나온다
- library: definition 파일

어떤 결과물이 모듈 형태로 나오는데 그게 common.js··· 로 나온다

watch 모드  
`tsc - w` : 변경되면 컴파일되게 하는 것 => 걸프로 대체 가능