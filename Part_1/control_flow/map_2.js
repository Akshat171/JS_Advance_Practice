const coding = ["js", "python", "c++", "ruby"];

const values = coding.forEach((item) => {
  //   console.log(item);
  //   return item;--> for each koi value return nhi kerta hai
});

// console.log(values); //undefined

const myNums = [1, 2, 3, 4, 5, 6, 8, 9, 10];

const newNums = myNums.filter((num) => num > 4);
// console.log(newNums); //[ 5, 6, 8, 9, 10 ]
//filter function return number/item

const newNums_1 = [];

myNums.forEach((item) => {
  if (item > 4) {
    newNums_1.push(item);
  }
});
// console.log(newNums_1);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

const result = myNumbers.map((num) => num + 10);
// console.log(result);

const res = myNumbers.forEach((item) => {
  //   console.log(item + 10);
});
// console.log(res);

//+++++++++chaining+++++++++++++
const newNums_3 = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 80);
console.log(newNums_3);
