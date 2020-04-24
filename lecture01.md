Typescript Overview
=====
타입스크립트는 'Programming Language'  
-----
타입스크립트는 '**Compiled Language**'  
  
- JS의 feature를 모두 사용할 수 있고, 그 위에 TS의 문법을 추가로 적용(SuperSet 개념)
- 아키텍처와 OS에 맞게 최적화 작업을 하는 게 Traditional한 컴파일 언어인데, TS는 좀 다르다
- Traditional한 Compiled Language와는 다른 점이 많기에 **Transpile**이라는 용어를 사용하기도 한다 (≒ Babel)
- A 언어로 작성했는데 B 언어로 변환되어서 실행되는 이런 특성을 **meta programming**이라고도 한다
- Compile 시점에 가장 중요하게 체크하는 것이 **Type**이다
- 자바스크립트는 **Interpreted Language**
- 자바스크립트는 객체에 대해서 굉장히 자유롭다. 그래서 Typescript를 처음 접하면 굉장히 많은 오류를 접할 수 있다.
  
정적 타입 언어 VS 동적 타입 언어
-----
정적: var, let, const => 타입 자체가 변화하는 것을 권장 => 문제  
동적: 정적 타입 언어의 장점만을 가져와서 만듦
  
  
정적 타입 언어의 테스트 커버리지가 올라가면 동적 타입 언어를 쓸 필요가 없을수도 있다. 타입 체킹을 하면서 미리 막아주니까. 근데 그게 쉬운 일이 아니다

Traditional Compiled Language
-----
- 컴파일 언어
- C, C++, Go, C#, Java ···
- Source Code => Compile Time (Compile by Compiler) => Object Code
- 컴파일된 코드는 프로세서에 따라 다르다
- 소스 코드에서는 OS에 따라 라이브러리가 다르다
- 컴파일된 코드는 작은 크기에 최적화된다
- 일반적으로 인터프리터 언어보다 빠르다
- Typescript에는 linking 이런 부분 없다(Traditional 얘기다)
- 원래 컴파일이 되면 컴파일된 코드(목적 코드)는 컴파일되기 전의 코드(원시 코드)보다 작은 게 일반적인데, Typescript는 반대다. Helper나 이런 게 들어가기 때문에... 그래서 이것을 Typescript의 단점으로 꼽는 사람이 많다.  
- 강의자 분이 말하기로는 이 점은 노력하고 있다고 한다. Helper class 로 따로 빼서 중복되지 않도록 한다고...
- Super set이기 때문에 JS 코드 양보다는 많아질 수 있음을 인지해야 함
  
  
*p.s*  
**Angular.js**를 Typescript로 쓰는 것은 문서에서 당연하게 사용하는 것이고 **React.js**를 Typescript로 쓰는 것은 처음엔 짜증날 수 있지만 React의 모듈을 사용할 때 명확하게 작성할 수 있다