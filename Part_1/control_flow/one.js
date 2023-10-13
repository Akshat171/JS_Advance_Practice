//if
if (true) {
  console.log("execute");
}

if (false) {
  console.log("Not execute");
}

const userEmail = [];
if (userEmail) {
  //trufy value
  console.log("Got the user!");
} else {
  console.log("Don't get the user");
}
//out put --> Got the user!
// falsy value
// false,0, -0 , BigInt 0n, "", null, undefined, NaN

//truthy value
// "0", 'false', " ", [], {}, function(){}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("object is empty");
}

// Nullish Coalescing Operator
//where there are complex function which are calling database
//then this operator is used
//That's how it is work
let val1;
val1 = null ?? 10;
val2 = 5 ?? 10;
val2 = undefined ?? 10;
console.log(val1); //10
console.log(val2); //5
console.log(val3); //5
