//dates

let myDate = new Date(); // 2023-10-12T08:15:23.296Z
console.log(myDate.toString()); // Thu Oct 12 2023 13:45:45 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Thu Oct 12 2023
console.log(myDate.toISOString()); // 2023-10-12T08:17:02.800Z
console.log(myDate.toJSON()); // 2023-10-12T08:17:02.800Z
console.log(myDate.toLocaleTimeString()); // 1:47:41 PM
console.log(myDate.toLocaleString()); // 10/12/2023, 1:49:19 PM
console.log(myDate.toUTCString()); // Thu, 12 Oct 2023 08:18:04 GMT
console.log(myDate.getTimezoneOffset()); // -330

console.log(typeof myDate); //object

/*Methods to manipulate date*/
let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023

let myCreatedDate_with_Time = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate_with_Time.toLocaleString()); //1/23/2023, 5:03:00 AM

let myCreatedDate_India_format = new Date("01-14-2023");
console.log(myCreatedDate_India_format.toLocaleString());

let myTime = Date.now();
console.log(myTime);
console.log(myCreatedDate_India_format.getTime());
//these concepts generally used in making hotel booking apps

console.log(Math.floor(Date.now() / 1000)); //in seconds

let new_Date = new Date();
console.log(new_Date.getMonth() + 1);
console.log(new_Date.getDate());

//customizing date
new_Date.toLocaleString("default", {
  weekday: "long",
});
