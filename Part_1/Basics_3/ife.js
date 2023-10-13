//Immediately invoke function Expression (IIFE)
//uses -->
// when there is an connection with db and we want as our application
//start the data will show immediately / connection start.

//there is the problem with pollution of global scope
//to remove the pollution/variables with global scope
//execute immediately

(function chai() {
  console.log("DB connected");
})();
// to stop the context we have to use ";" at the last

// 1_st()-->jaha function ki definition likhne wale hai
// 2_nd()-->execution call

((name) => {
  console.log(`Db connected ${name}`);
})("Akshat"); //Db connected Akshat
