// Convert Fahrenheit to Celsius

document.getElementById("convert-btn").addEventListener("click", convert);

function convert() {
  //Input
  let Fahrenheit = +document.getElementById("temperature").value;
  //Process
  let temperature = (Fahrenheit - 32) * (5 / 9);
  let output = temperature.toFixed(2);
  //Output
  document.getElementById("output").innerHTML = output;
}
