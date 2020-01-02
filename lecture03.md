IDE 활용 (VSC)
===

1. VSC 우측 하단에 **TS 버전 관리** 메뉴 버튼
    - VSC에 Compiler가 bundle(내장)되어있다
    - 내장된 Compiler 버전은 VSC가 업데이트 되면서 올라간다. 그래서 Compiler 버전과 VSC 버전은 상관 관계에 있다
    - 해당 기능을 이용해서 workspace 별로 다른 TS 버전을 사용할 수 있다
    - `npm i typescript@3.6.2` 로 직접 할 수 있다
2. `.ts` 작성 중 go to definition을 통해 `lib.es5.d.ts`, `lib.d.t` 확인
    - Definition file
    - B, C, B 의존성
3. tslint
    1. `npm i typescript tslint`
    2. `tslint --init`
    3. VSC extension tslint 설치  
        1. `cmd + p`
        2. `ext install tslint`