개발 환경 구축 및 컴파일러 사용
=====

실행환경
-----
**Browser** or **Node.js**  
Typescript에서 컴파일러를 제공하는 게 Node.js(npm)모듈로 있기에 Node.js 설치 권장  
  
Node.js란?  
-----
Chrome's V8 Javascript Engine을 사용하여  
자바스크립트를 해석하고 OS 레벨에서의 API를 제고하는 서버사이드용  
  
자바스크립트 런타임 환경
-----
*C:\Users\김예원\Desktop\Study_Typescript*  
visual studio code 자체가 typescript로 만들어져있고 컴파일러가 이미 설치되어있기 때문에 타입 체크를 할 때에는 따로 컴파일러를 설치할 필요가 없다.  

### Step1
`npm init -y`

### Step2
"transpile": "tsc",

"scripts": {
    "transpile": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  }, 

### Step3
`npm install typescript -g`

### Step4
`C:\Users\김예원\Desktop\Study_Typescript>tsc test.ts`

=> test.js 생성됨

### Step5
`tsc --init`

=> tsconfig.json 생성됨
=> tsc 컴파일러의 초기 세팅을 하겠다는 것(npm init 과 비슷한 의미)

### Step 6
`node test.js`

tsconfig.json
-----
어떤 결과물이 모듈 형태로 나오는데 그게 common.js··· 로 나온다

watch 모드
tsc - w : 변경되면 컴파일되게 하는 것 => 걸프로 대체 가능