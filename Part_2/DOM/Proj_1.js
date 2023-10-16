const buttons = document.querySelectorAll(".button");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    if (e.target.id === "gray") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "gray") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
