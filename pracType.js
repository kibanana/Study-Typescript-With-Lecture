// null
// undefined
// any
// void, never
// symbol
// 생략
// boolean
var returnBoolean = function () {
    return true;
};
// const returnBoolean2 = (): boolean => {
//   return 'Need Error';
// }
console.log(returnBoolean());
// number
var n1 = 1234;
var n2 = 0x1234;
var n4 = 668;
var n3 = 10;
// string
var argStr = function (str) {
    return str + " \uB77C\uB294 \uAC12\uC744 \uBC1B\uC558\uB2E4!";
};
console.log(argStr('Typescript'));
// array
var favoriteList = ['book', 'movie', 'javascript'];
var lottoList = [1, 2, 3, 4, 5, 45];
var personList = [];
var y = {
    name: 'y',
    age: 20
};
personList.push(y);
console.log(personList);
// tuple
var tu1 = [0, '금요일'];
// const tu2: [number, string] = ['금요일', 0];
// enum
var Days;
(function (Days) {
    Days[Days["Mon"] = 0] = "Mon";
    Days[Days["Tues"] = 1] = "Tues";
    Days[Days["Wen"] = 2] = "Wen";
    Days[Days["Thur"] = 3] = "Thur";
    Days[Days["Fri"] = 4] = "Fri";
    Days[Days["Sat"] = 5] = "Sat";
    Days[Days["Sun"] = 6] = "Sun";
})(Days || (Days = {}));
var day = Days.Mon;
var Color;
(function (Color) {
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
var color = Color.Green;
var Animal;
(function (Animal) {
    Animal[Animal["Dog"] = 1] = "Dog";
    Animal[Animal["Cat"] = 2] = "Cat";
    Animal[Animal["Tiger"] = 4] = "Tiger";
})(Animal || (Animal = {}));
var a = Animal.Tiger;
var Apple;
(function (Apple) {
    Apple[Apple["MacBook"] = 1] = "MacBook";
    Apple[Apple["iMac"] = 2] = "iMac";
    Apple[Apple["iPhone"] = 3] = "iPhone";
})(Apple || (Apple = {}));
var apple = Apple.MacBook;
console.log(day);
console.log(color);
console.log(a);
console.log(apple);
