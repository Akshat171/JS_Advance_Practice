// Memories are 2 types
// Stack
// Heap

//Primitive --> stack --> get copy of variable you declare
//Non-Primitive --> Heap --> get reference of value you declare

let myName = " Akshat";

let yourName = myName;
yourName = "Rahul";

console.log(yourName);
console.log(myName);

let userOne = {
  name: "Akshat",
  upi: "aks!ybl",
};

let userTwo = userOne;

userTwo.name = "Rahul";

//getting value by Reference
console.log(userOne.name); //--> Rahul
console.log(userTwo.name); //-->Rahul
