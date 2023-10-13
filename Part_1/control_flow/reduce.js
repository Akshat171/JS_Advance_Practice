//reducer --> used in ecommerce platform
// always take initial value in accumulator

//syntax
const array_1 = [1, 2, 3, 4, 5];

//0+1+2+3+4+5

const initialValue = 0;
const sumWithInitial = array_1.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

// console.log(sumWithInitial);

// accumulator  currentValue
//    0             1
//    3             2
//    6             4
//    10            5
//    15

const myTotal = array_1.reduce((accumulator, currentValue) => {
  console.log(`accumulator : ${accumulator}, currentValue : ${currentValue}`);
  return accumulator + currentValue;
}, 0); //initial value to accumulator is zero
console.log(myTotal);

const courses = [
  {
    name: "js course",
    price: 299,
  },
  {
    name: "py course",
    price: 599,
  },
  {
    name: "c++ course",
    price: 799,
  },
  {
    name: "ds course",
    price: 999,
  },
];

const total = courses.reduce((acc, item_1) => {
  return acc + item_1.price;
}, 0);

console.log(total); //2696
