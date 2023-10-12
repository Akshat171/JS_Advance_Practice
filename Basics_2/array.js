const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "captain"];

const myArr_2 = new Array(1, 2, 3, 4);
console.log(myArr_2);

//Array methods
myArr_2.push(6);
console.log(myArr_2); //[ 1, 2, 3, 4, 6 ]

myArr_2.pop();
console.log(myArr_2); //[ 1, 2, 3, 4 ]

myArr_2.unshift(9); //[ 9, 1, 2, 3, 4 ]
console.log(myArr_2);

myArr_2.shift(); //[1, 2, 3, 4 ]
console.log(myArr_2);

console.log(myArr_2.includes(2)); //boolean true
console.log(myArr_2.indexOf(2)); //1

const newArr_1 = myArr_2.join();
console.log(newArr_1); //"1,2,3,4"//changed in string and bind
console.log(typeof newArr_1); //"1,2,3,4"//changed in string and bind

//slice splice
console.log("A", myArr); //A [ 0, 1, 2, 3, 4, 5 ]

const myArr_slice = myArr.slice(1, 3);
console.log("After slice : ", myArr_slice); //[ 1, 2 ]
console.log("B", myArr); //B [ 0, 1, 2, 3, 4, 5 ]

const myArr_splice = myArr.splice(1, 3);
console.log("After splice : ", myArr_splice); //[ 1, 2 ]
console.log("C", myArr); //B [ 0, 1, 2, 3, 4, 5 ]

// A [ 0, 1, 2, 3, 4, 5 ]
// After slice :  [ 1, 2 ]
// B [ 0, 1, 2, 3, 4, 5 ]
// After splice :  [ 1, 2, 3 ]
// C [ 0, 4, 5 ]
