// null
// undefined
// any
// void, never
// symbol
// 생략

// boolean
const returnBoolean = (): boolean => {
  return true;
}

// const returnBoolean2 = (): boolean => {
//   return 'Need Error';
// }

console.log(returnBoolean());

// number
let n1: number = 1234;
let n2: number = 0x1234;
let n4: number = 0o1234;
let n3: number = 0b1010;

// string
const argStr = (str: string): string => {
  return `${str} 라는 값을 받았다!`;
}
console.log(argStr('Typescript'));

// array
let favoriteList: string[] = ['book', 'movie', 'javascript'];
let lottoList: Array<number> = [1, 2, 3, 4, 5, 45];

interface Person {
  name: string;
  age: number;
}

const personList: Person[] = [];

const y: Person = {
  name: 'y',
  age: 20
};
personList.push(y);

console.log(personList);

// tuple
const tu1: [number, string] = [0, '금요일'];
// const tu2: [number, string] = ['금요일', 0];

// enum
enum Days {Mon, Tues, Wen, Thur, Fri, Sat, Sun}
const day: Days = Days.Mon;

enum Color {Yellow = 1, Green, Purple}
const color: Color = Color.Green;

enum Animal {Dog = 1, Cat = 2, Tiger = 4}
const a: Animal = Animal.Tiger;

enum Apple {MacBook = 1, iMac, iPhone}
const apple: Apple = Apple.MacBook;

console.log(day);
console.log(color);
console.log(a);
console.log(apple);