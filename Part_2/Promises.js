// The Promise object represents the eventual completion (or failure) of an
// asynchronous operations and its resulting value

//premises are consumed

//Creation of Promise
const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls , cryptography , networkcall
  setTimeout(function () {
    console.log("Async task is completed");
    resolve(); //to connect with then
  }, 1000);
});

//consumption of promise
promiseOne.then(function () {
  console.log("Promise consumed");
});

//After 1 sec
// Async task is completed
// Promise consumed

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "chai@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Akshat", password: "123" });
    } else {
      reject("ERROR: Invalid credentials");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log("User", user);
    return user.username;
  })
  .then((username) => {
    console.log(`Welcome ${username}`);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Javascript", password: "123" });
    } else {
      reject("ERROR: Invalid JS");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E:", error);
  }
}

getAllUsers();

fetch("https://api.github.com/users/Akshat171")
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    console.log(users);
  })
  .catch((error) => console.log(error));
