const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  //   console.log(num); // 1, then 2, then 3...
}

const greeting = "Hello world";
for (const greet of greeting) {
  //   console.log(`hey you ${greet}`);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "france");
//unique value is assign here
// console.log(map);
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'france'
//   }

for (const key in map) {
  console.log(key); //Not iteretable
}

for (const key of map) {
  //   console.log(key);
}
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'france' ]

for (const [key, value] of map) {
  //   console.log(key, ":", value);
}

// IN : India
// USA : United States of America
// Fr : france

// const myObject = {
//   game_1: "NFS",
//   game_2: "Spiderman",
// };

// for (const [ket, value] of myObject) {
//   console.log(key, ":", value);
// }//Error

const myObject = {
  js: "javascript",
  cpp: "c++",
  rb: "Ruby",
  py: "python",
};

for (const key in myObject) {
  //   console.log(`${key} is ${myObject[key]}'s shortcut`);
}

// js is javascript's shortcut
// cpp is c++'s shortcut
// rb is Ruby's shortcut
// py is python's shortcut

const programming = ["js", "py", "cpp", "rb"];

for (const key in programming) {
  //   console.log(key);
}

// 0
// 1
// 2
// 3

for (const key in programming) {
  //   console.log(programming[key]);
}
// js
// py
// cpp
// rb
