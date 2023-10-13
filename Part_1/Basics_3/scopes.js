if (true) {
  let a = 10;
  const b = 30;
  //   var c = 40;
}
// console.log(a);//Error
// console.log(b);//Error
// console.log(c);//400 avoid var

// scope in browser is different then the scope in node editor

function one() {
  const username = "akshat";

  function two() {
    const website = "youtube";
    // console.log(username);
  }
  //   console.log(website);
  two();
}
one();

if (true) {
  const username = "Akshat";
  if (username === "Akshat") {
    const lastname = " jangid";
    // console.log(username + lastname);
  }
  //   console.log(lastname);
}

// console.log(username);

//++++++++++++++++++++++Interesting++++++++++++++++

//simply define a function
console.log(addOne(5)); //accessing first before its declaration
function addOne(num) {
  return num + 1;
}

//Holding the function result in an variable
result(4); //show me error , //accessing first before its declaration
//called hoisting you can't access before declaration
const result = function (num) {
  return num + 1;
};
