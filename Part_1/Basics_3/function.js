// function addTwoNumbers(number_1, number_2) {
//   console.log(number_1 + number_2);
// }
// const result = addTwoNumbers(3,5);
// console.log(result)//undefined

function addTwoNumbers(number_1, number_2) {
  let result = number_1 + number_2;
  return result;
}
const result_1 = addTwoNumbers(3, 5);
// console.log("Result : ", result_1); //8

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please enter the user name ");
    return;
  }
  return `${username} just logged in!`;
}

console.log(loginUserMessage("Akshat")); //Akshat just logged in!
console.log(loginUserMessage()); //Please enter the user name
//username = "sam"

function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 300, 400)); //[ 200, 300, 400 ]
//if we use val1, val2, ...num1 the output will be [400]

const user = {
  username: "akshat",
  price: 400,
};

function handleObject(anyobject) {
  console.log(
    `${anyobject.username} is just buy the course in ${anyobject.price} price`
  );
}

handleObject(user);
handleObject({
  username: "akshat",
  price: 400,
}); //akshat is just buy the course in 400 price
// akshat is just buy the course in 400 price
//types safety is needed

