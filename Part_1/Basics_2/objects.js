//single ton-->jab bhi hum literals ki taraf declare j=kerte hai to single ton nhi banta hai
//agar constructor se bnega to single ton bnega
// Object.create --> jisse object banta hai

//object literals

const mySym = Symbol("key1");

const Js_user = {
  name: "Akshat", //by default ye name string ki tarah assign hota hai
  last_name: "Jangid",
  [mySym]: "mykey1", //
  age: 18,
  location: "jaipur",
  email: "aks@gmail.com",
  isLoggedIn: false,
  lastLogin: ["Monday", "Saturday"],
};

// console.log(Js_user.email);
// console.log(Js_user["email"]);
// if here last name is in the form of "lst_name"
//then we cant access it using dot(.) method
//only can access using ["last_name"] method
// console.log(typeof Js_user.mySym); //not symbol anymore because of
//we are using it in object as _mySym_

//for making it symbol we have to use it like [mySym]
// console.log(typeof Js_user[mySym]);

//values overwrite
// Js_user.email = "Aksh@mail.com";
// Object.freeze(Js_user); //freeze user
// Js_user.email = "Rahul@mail.com";
// console.log(Js_user);

// {
//     name: 'Akshat',
//     last_name: 'Jangid',
//     age: 18,
//     location: 'jaipur',
//     email: 'Aksh@mail.com',
//     isLoggedIn: false,
//     lastLogin: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey1'
// }

Js_user.greeting = function () {
  console.log("Hello user, lets chat !");
};

Js_user.greetingTwo = function () {
  console.log(`Hello user, lets chat ${this.name} !`);
};

console.log(Js_user.greeting); //[Function (anonymous)]  --> note executed just get reference
console.log(Js_user.greeting()); //Hello user, lets chat !
console.log(Js_user.greetingTwo()); //Hello user, lets chat Akshat !
