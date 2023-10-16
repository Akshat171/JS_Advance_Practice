const clock = document.getElementById("clock");

setInterval(function () {
  let data = new DataTransfer();

  clock.innerHTML = date.toLocalTimeString();
}, 1000);

//to run the updated time
