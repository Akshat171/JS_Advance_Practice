// const score = 400;
// console.log(score);
// const balance = new Number(400);
// console.log(balance);

// //output -->
// // 400
// // [Number: 400]

// console.log(balance.toString().length);
// console.log(balance.toFixed(4)); //output--> 400.0000

// //toFixed() method is generally used in ecomarce basically we used to calculate gst
// //bcz precision value is getting big and client dont want to see this big number to we have to use toFixed() always there

// const othernumber = 123.8796;
// console.log(othernumber.toFixed(2)); // output -> 23.88
// console.log(othernumber.toPrecision(3)); // output -> 123.9
// //it starts from front and check for taking precision if like there is 3
// //for precision then it will take 3 numbers front and make others round-off after point and make it in the e to the power
// //it returns string

// const hundreds = 100000;
// console.log(hundreds.toLocaleString("en-IN")); //output --> 1,00,000
// //put comas in between based on US values if it is default

//+++++++++++++++Maths+++++++++++++++++

console.log(Math); //output --> Object [Math] {}
const numberrandom = Math.random() * 10 + 1;
console.log(numberrandom);
//Random always gives values between 0 to 1

console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.6));
console.log(Math.min(4, 6, 8, 1, 2));
console.log(Math.max(4, 6, 8, 1, 2));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
//but if we want random values between 10 to 20
