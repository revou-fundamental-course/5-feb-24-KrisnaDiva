function convert() {
  let input = parseFloat(document.getElementById("input").value);
  if (isNaN(input)) {
    alert("Masukkan suhu terlebih dahulu!");
    return;
  }
  let selectUnit = document.getElementById("selectUnit").value;
  let result;

  if (selectUnit === "celsius") {
    result = (input * 9) / 5 + 32;
    document.getElementById("result").innerText = `${result} Fahrenheit`;
    document.getElementById(
      "calculation"
    ).innerHTML = `(${input}&deg;C &times; 9/5) + 32 = ${result}&deg;F`;
  } else {
    result = ((input - 32) * 5) / 9;
    document.getElementById("result").innerText = `${result.toFixed(
      1
    )} Celsius`;
    document.getElementById(
      "calculation"
    ).innerHTML = `(${input}&deg;F - 32) &times; 5/9 = ${result.toFixed(
      1
    )}&deg;C`;
  }
  document.getElementById("res").style.display="block";
}

function resetConverter() {
  document.getElementById("input").value = "";
  document.getElementById("result").innerText = "-";
  document.getElementById("calculation").innerText = "-";
  document.getElementById("res").style.display="none";
}

function changeTitle() {
  let selectUnit = document.getElementById("selectUnit").value;
  let title = document.getElementById("title");

  if (selectUnit === "celsius") {
    title.textContent = "Celsius to Fahrenheit";
  } else {
    title.textContent = "Fahrenheit to Celsius";
  }
  resetConverter();
}
