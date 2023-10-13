const marvel_heros = ["thor", "captain", "Iron"];
const dc = ["superman", "flash", "batman"];

// marvel_heros.push(dc);
// console.log(marvel_heros); //[ 'thor', 'captain', 'Iron', [ 'superman', 'flash', 'batman' ] ]

// const all_heros = marvel_heros.concat(dc);
// console.log(all_heros); //[ 'thor', 'captain', 'Iron', 'superman', 'flash', 'batman' ]

//spread operator
// const all_heros_new = [...marvel_heros, ...dc];
// console.log(all_heros_new);
//[ 'thor', 'captain', 'Iron', 'superman', 'flash', 'batman' ]

// const another_array = [1, 2, 3, [4, 5, 6], 7, [7, 8, 5, [5, 4, 6]]];

// const single_array = another_array.flat(Infinity);
// console.log("single array: ", single_array);
//single array:  [1, 2, 3, 4, 5, 6, 7, 7, 8, 5, 5, 4, 6]

console.log(Array.isArray("Akshat")); //false
console.log(Array.from("Akshat")); //[ 'A', 'k', 's', 'h', 'a', 't' ]
console.log(Array.from({ name: "Akshat" })); //Intresting []
//cant convert it directly

let score_1 = 100;
let score_2 = 200;
let score_3 = 300;

console.log(Array.of(score_1, score_2, score_3));//[ 100, 200, 300 ]

