TS 기본 자료형
===

사용자가 만든 타입은 결국 기본 자료형들을 모아놓은 것이다

### ECMAScript
- Boolean
- Number
- String
- Null, Undefined  
  주로 리턴 시에 쓰인다  
    
  **undefined & null are subtypes of all other types**  
  => 다른 자료형에 null, undefined가 할당될 수 있다  
  => 이것을 막기 위해 `--strictNullChecks` 컴파일 옵션을 사용할 수 있다. null과 undefined는 void나 자기 자신에게만 할당될 수 있다.  
  이 때 null과 undefined를 할당할 수 있게 하려면 union type을 이용해야 한다.
- Symbol
- Array (object type)
  - `{type}[]`
  - `Array< {type} >`
  
### More ･･･
- Any  
  헬퍼를 제대로 얻어낼 수 없다 => 컴파일 중 타입 체크가 정상적으로 이뤄지지 않는다  
  컴파일 옵션 중 any가 있으면 오류를 뱉게 하는 `noImplicitAny` 옵션도 있다
- void, Never  
  주로 함수 리턴 시에 쓰인다  
  void: 함수의 리턴이 없어야 할 때 사용. 타입이 없는 상태. any와 반대 의미  
  never: 리턴값을 정상적으로 반환하지 않을 때 사용
- Enum
- Tuple (object type)
  배열인데 한 가지 타입으로 이루어지지 않은 경우  
  `const tu: [number, string] = ['금요일', 0]` => X  
  타입에 따른 메소드를 제대로 사용할 수 없기 때문에 꺼려지기도 한다  

JS는 보통 다 Reference 타입이다. 왜냐하면 object type 인자를 전달받는 내장함수를 쓸 때 순간적으로 object로 하고, 다시 primitive type으로 반환하기 때문이다.