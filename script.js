function generateNumbers() {
  var countryCode = document.getElementById("countryCode").value;
  var numbers = document.getElementById("numbers").value;
  var output = "";

  for (var i = 0; i < numbers; i++) {
    var randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    output += countryCode + " " + randomNumber + "<br>";
  }

  document.getElementById("output").innerHTML = output;
}
