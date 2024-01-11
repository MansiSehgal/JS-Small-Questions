// console.count();
// console.count();
// console.count();
// console.count();
// console.count();
// console.count();
// let x = 5;
// let y = 5;
// const myObj = { firsname: "John", lastname: "Doe" };
// console.assert(x + y == 11, myObj);
// console.clear();
// console.log("Hello world!");
// console.group();
// console.log("Hello again, this time inside a group!");
// console.groupEnd();
// console.log("and we are back.");
// console.info("hello");
// console.table(["Hello", "World"]);
// console.time();
// for (let i = 0; i < 100000; i++) {
//   console.log("Hello World");
// }
// console.timeEnd();

//Ques 1
// let a = [];
// let b = [];
// console.log(a == b); //false
// console.log(a === b); //false

// Ques 2
// let a = [];
// let b = a;

// console.log(a == b); //true
// console.log(a === b); //true

// Ques 3
// let a = [20];
// let b = [20];
// console.log(a[0] == b[0]); // true
// console.log(a[0] === b[0]); //true

// Ques 4
// let z = [1, 2, 3, 4];
// let a = { name: "mansi" };
// console.log(...z); // 1,2,3,4

// Ques 5
// console.log(typeof NaN); //number

// Ques 6
// let data = 10 - -10;
// console.log(data); //20

// Ques 7
// let set = new Set([1, 1, 2, 3, 4]);

// console.log(set); // {1,2,3,4}

// Ques 8
// let data = { name: "mansi" };
// console.log(delete data.name); // true
// console.log(data); // {}

// Ques 9
// let data = { name: "mansi" };
// console.log(delete data); //false
// console.log(data); //{ name: "mansi" }

// Ques 10
// const data = ["Peter", "mansi", "sam"];
// const [y] = data;
// console.log(y); //"Peter"

// Ques 11 - how to get second element
// const data = ["Peter", "mansi", "sam"];
// // const [y, z] = data;
// const [, y] = data;
// console.log(y); //  mansi

// Ques 12 - how to get name property without . operator
// const data = { name: "mansi", age: 22, skill: "js" };
// const { name, age, skill } = data;
// console.log(name); //mansi

// Ques 13 - merge two object
// let data = { name: "mansi", age: 22, skill: "js" };
// let info = { city: "Noida ", mail: "mansi@gmail.com" };

// const main = { ...data, ...info };
// console.log(main); //{name: "mansi", age: 22, skill: "js", city: "Noida ", mail: "mansi@gmail.com"}

// Ques 14 - merge two object
// let data = { name: "mansi", age: 22, skill: "js" };
// let info = { city: "Noida ", mail: "mansi@gmail.com" };

// const main = { data, ...info };
// console.log(main); //{data :{name: "mansi", age: 22, skill: "js"}, city: "Noida ", mail: "mansi@gmail.com"}

// Ques 15 - merge two object
// let data = { name: "mansi", age: 22, skill: "js" };
// let info = { city: "Noida ", mail: "mansi@gmail.com", skill: "React" };

// const main = { ...data, ...info };
// console.log(main); //{name: "mansi", age: 22, skill: "React", city: "Noida ", mail: "mansi@gmail.com"}

// Ques 16
// const name = "mansi";
// console.log(name()); //Type Errror

// Ques 17
// const result = false || {} || null;
// console.log(result); //{} it takes first positive value

// Ques 18
// const result = null || false || "";
// console.log(result); //''  - if does not find any positive value then it takes last value

// Ques 19
// const result = [] || 0 || true;
// console.log(result); //[]

// Ques 20
// console.log(Promise.resolve(5)); //promise fullfilled

// Ques 21
// console.log("❤️" === "❤️")  // true - compares unicode of the  emoticons

// Ques 22
// JSON.parse(); //parses json to javascript value

// Ques 23
// let name = "mansi";
// function getName() {
//   console.log(name);
//   let name = "karan";
// }
// getName(); // reference error - cannot accesss name  bbefore initialization

// Ques 24
// let name = "mansi";
// function getName() {
//   console.log(name);
// }
// getName(); // mansi

// Ques 25
// console.log(`${((x) => x)("I Love")} to program`); // I Love to program

// Ques 26
// function sumValues(x, y, z) {
//   return x + y + z;
// }

// console.log(sumValues(...[1, 2, 3])); //6

// Ques 27
// const name = "mansi";
// console.log(!typeof name === "object"); //false
// console.log(!typeof name === "string"); //false

// Ques 28
// const name = "mansi";
// console.log(typeof name === "object"); //false
// console.log(typeof name === "string"); //true

// Ques 29
// const name = "subscribe";
// const age = 21;
// console.log(isNaN(name)); // true
// console.log(isNaN(age)); //false

// Ques 30
// let person = { name: "mansi" };
// Object.seal(person);
// person.name = "karan";
// console.log(person);

// Ques 31 - remove first element
// let data = [2, 9, 0, 10];
// // data.splice(0, 1);
// data.shift();
// console.log(data); // [9,0,10]

// Ques 32- remove last element
// let data = [2, 9, 0, 10];
// data.pop();
// console.log(data); // [2,9,0]

// Ques 33 - check odd or even value
// let a = 32;
// // if (a % 2 === 0) {
// //   console.log(`${a} is even`);
// // } else {
// //   console.log(`${a} is odd`);
// // }
// /*------ > */ console.log(a % 2); //if 0 the even and if 1 then odd

// Ques 34
// let data = {
//   name: "mansi ",
// };
// delete data.name;
// console.log(data); //{}

// Ques 35  - convert data to boolean false value
// let data = "true";
// console.log(!data);

// Ques 36  - convert data to boolean true value
// let data = "true";
// console.log(!!data);

// Ques 37
// let data = ["mansi", "karan", "monika"];
// delete data[1];
// console.log(data); // ["mansi" , empty , "monika"]

// Ques 37
// let data = ["mansi", "karan", "monika"];
// delete data[1];
// console.log(data?.length); //3

// Ques 38 - merge 2 arrays
// let a = [1, 2, 3];
// let b = [1, 2, 6];
// let c = [...a, ...b];
// let d = new Set(c);
// console.log(d); // [1,2,3,6]

// Ques 39
// let a = 3 ** 3;
// console.log(a); //27

// Ques 40
// let a = 2;
// setTimeout(() => {
//   console.log(a); // 100
// }, 1000);
// a = 100;

// Ques 41
// let a = 2;
// let A = 20;
// console.log(A); // 20

// Ques 42
// let A10 = "like";
// console.log(A10); //like

// Ques 43
// let a = "like";
// let b = `like`;
// console.log(a === b); //true

// Ques 44
// let a = 1;
// let c = 2;
// console.log(--c === a); //true

// Ques 45
// let a = 1;
// let b = 1;
// let c = 2;
// console.log((a === b) === --c); //false

// Ques 46
// console.log(3 * 3); //9
// console.log(3 ** 3); // 27
// console.log(3 *** 3);

//  Ques 47
// console.log(a); //undefined
// var a;

// Ques 48
// console.log(b); // not defined

// Ques 49
// console.log([[[[]]]]);

// Ques 50 - how to find os  name
// navigator.platform

// Ques 51
// let for = 100 //for is a reserved keyword (syntax error)

// Ques 52
// function fruit() {
//   console.log(name); //undefined,
//   console.log(price); // price - reference error
//   var name = "mansi";
//   let price = 20;
// }
// fruit();

// Ques 53
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i); // 3 (3 times)
//   }, 1);
// }

// Ques 54
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i); // 0,1,2
//   }, 1);
// }

// Ques 55
// console.log(+true); // 1
// console.log(typeof +true); //number

// Ques 56
// console.log(!"mansi"); //false
// console.log(typeof "mansi"); //string

// Ques 57
// let data = "size";
// const bird = {
//   size: "small",
// };
// console.log(bird[data]); //small
// console.log(bird["size"]); //small
// console.log(bird.size); // small
// console.log(bird.data); //undefined

// Ques 58
// let c = { name: "mansi" };
// let d;
// d = c;
// c.name = "karan";
// console.log(d.name); //karan

// Ques 59
// var x;
// var x = 10;
// console.log(x); //10

// Ques 60
// let a = 0.3;
// let b = 0.3;

// console.log(a == b); //true
// console.log(a === b); //true

// Ques 61
// var x;
// let x = 10;
// console.log(x); //syntax error - already declared

// Ques 62
// let a = 3;
// let b = new Number(3);
// console.log(a == b); //true
// console.log(a === b); //false

// Ques 63
// let name;
// nmae = {};
// console.log(name); //undefined

// Ques 64
// function fruit() {
//   console.log("Woof!"); // woof!
// }
// fruit.name = "apple";
// fruit();

// Ques 65
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, "2")); //12

// Ques 66
// let number = 0;
// console.log(number++); //0
// console.log(++number); //2
// console.log(number); //2

// Ques 67
// function getAge(...age) {
//   console.log(typeof age); //object
// }
// getAge(22);

// Ques 68
// function getAge() {
//   "use strict";
//   age = 21;
//   console.log(age); // referece error
// }
// getAge();

// Ques 69
// const sum = eval("10*10+5");
// console.log(sum); //105

// Ques 70
// const obj = { 1: "a", 2: "b", 3: "c" };
// console.log(obj.hasOwnProperty("1")); //true

// Ques 71
// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"));
// const baz = () => console.log("Third");

// console.log(bar());
// console.log(foo());
// console.log(baz());

// //First Third Second

// Ques 72
// for (let i = 1; i < 5; i++) {
//   if (i == 3) continue;
//   console.log(i);
// }

// Ques 73
// const person = { name: "mansi" };
// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }
// console.log(sayHi.call(person, 21)); //mansi is 21
// console.log(sayHi.bind(person, 21)()); // returns function // mansi is 21

// Ques 74
// function sayHi() {
//   return (() => 0)();
// }

// console.log(typeof sayHi()); //number

// Ques 75
// function sayHi() {
//   return () => 0;
// }

// console.log(typeof sayHi()); //function

// Ques 76
// console.log(typeof typeof 1); // string

// Ques 77
// const numbers = [1, 2, 3];
// numbers[6] = 1;
// console.log(numbers); //[1,2,3,empty*3, 11]

// Ques 78
// const numbers = [1, 2, 3];
// numbers[9] = numbers;
// console.log(numbers); //nested array

// Ques 79
// console.log([..."mansi"]); // ['m','a','n','s','i']
