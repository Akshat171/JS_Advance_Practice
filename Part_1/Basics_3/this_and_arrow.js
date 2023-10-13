const user = {
  //this is called object or current context
  username: "Akshat",
  price: 200,
  WelcomeMessage: function () {
    // console.log(
    //   `${this.username} just purchased the course in ${this.price} price.`
    // );
    // console.log(this);
    // {
    //     username: 'sam',
    //     price: 200,
    //     WelcomeMessage: [Function: WelcomeMessage]
    // }
  },
};
// user.WelcomeMessage(); //print the welcomeMessage available in current context
// user.username = "sam"; //change the value of username available in current context
// user.WelcomeMessage();

// console.log(this);//{}-->node environment
// But when we use this keyword in browser the it show us
//window object why?
// pehle ke time per js ko execute kerne ka 1 hi tareeka tha browser ke ander bcz engine kewal browser ke ander
//hi paya jata tha but ab hamne uss engine ko nikal
//aur alag alag name diye like node, Bun, deno . to jab browser me run kerta hai
//to sabse jyada global object hai window object tabhi to ham etni values access ker paate hai

// function chai() {
//   console.log(this);
//   //if we run this outside it give us null but in function there are lots of values available
// }
// chai();

function chai() {
  let username = "akshat";
  console.log(this.username); //undefined
  // if we run this outside it give us null but in function there are lots of values available
}
// chai();
//to he context only object me hi kaam kerta hai
// function as a this keyword me use nhi ker pa rha hu

// const chai = () => {
//   let username = "Akshat";
//   console.log(this.username);
// };
// chai();

//Explicit return
const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(3, 4));

// Implicit return
const addTwo_1 = (num_1, num_2) => num_1 + num_2;

const addTwo_2 = (num_1, num_2) => ({ username: "Akshat" });
//to return an object in function we have to cover it with parentheses
