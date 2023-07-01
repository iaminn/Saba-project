let result = document.getElementById("result");

function appendToResult(value) {
  result.innerHTML += value;
}

function calculateResult() {
  let expression = result.innerHTML;
  let answer = eval(expression);
  result.innerHTML = answer;
}

function clearResult() {
  result.innerHTML = "";
}