
let result = document.getElementById('result');
result.innerHTML = "";



function showCharacter(character) {

  result.innerHTML += character;
}


function clean() {

  result.innerHTML = "";

}

function solver() {
  let UserData = document.getElementById("result").innerHTML;
  let arrayData = UserData.match(/\d+|\+|\-|\*|\//g);

  // Inicializamos el resultado como el primer número
  let firstNumber = parseFloat(arrayData[0]);



  for (let i = 1; i < arrayData.length; i += 2) {
    let operator = arrayData[i];
    let secondNumber = parseFloat(arrayData[i + 1]);


    switch (operator) {
      case '+':
        firstNumber += secondNumber;
        break;
      case '-':
        firstNumber -= secondNumber;
        break;
      case '*':
        firstNumber *= secondNumber;
        break;
      case '/':
        
        if (secondNumber !== 0) {
          firstNumber /= secondNumber;
        } else {
          firstNumber = "Error: división por cero";
        }
        break;
      default:
        console.log("Operador no reconocido");
    }
  }

  // Mostramos el resultado
  document.getElementById("result").innerHTML = firstNumber;

}





