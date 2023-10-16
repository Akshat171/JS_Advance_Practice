const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); //previene que se envie el formulario al recargar la pagina

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please enter valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please enter valid weight";
  } else {
    const bmi = //formula
      (result.innerHTML = `<span>${bmi}</span>`);
  }
});
