console.log("hello");
const accountId = 12344;
let accountEmail = "Akshat@gmail.com";
var accountPassword = "1234";
accountCity = "Jaipur";

accountEmail = "aksh@mail.com";
accountPassword = "212121";
accountCity = "ajmer";

/*

Prefer Not to use var ony use let and const data type
because of some issues in Block scope and functional scopes
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);

// output will be

// ┌─────────┬─────────────────┐
// │ (index) │     Values      │
// ├─────────┼─────────────────┤
// │    0    │      12344      │
// │    1    │ 'aksh@mail.com' │
// │    2    │    '212121'     │
// │    3    │     'ajmer'     │
// └─────────┴─────────────────┘
