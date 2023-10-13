//Primitive DataTypes

//7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt,

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); //--> false
const bigIntNumber = 9_84567n;

//Reference type(Non Primitive)
// Array, Objects, Functions

//Arrays
const heros = ["shaktiman", "nagraj", "doga"];

//Objects
let obj = {
  name: "Akshat",
  age: 21,
};

//Functions
function sayHi() {
  return "Hello";
}

console.log(typeof bigIntNumber); //--> undefined
console.log(typeof null); //--> object
console.log(typeof outsideTemp); //--> object
console.log(typeof scoreValue); //--> number
console.log(typeof obj); //--> object function
