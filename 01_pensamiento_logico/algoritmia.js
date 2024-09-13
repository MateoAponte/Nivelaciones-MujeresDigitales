// Se obtiene el 1er número y se ejecuta un bucle mientras el número no sea par
let firstNumber = prompt('Introduce el 1er número (Debe ser par)');
while (firstNumber % 2 !== 0) {
  firstNumber = prompt('El npumero no es par, vuelve a ingresarlo: ');
}

// Se obtiene el 2do número y se ejecuta un bucle mientras el número no sea impar
let secondNumber = prompt('Introduce el 2do número (Debe ser impar)');
while (firstNumber % 2 === 0) {
  firstNumber = prompt('El número no es impar, vuelve a ingresarlo: ');
}

// Se obtiene el 3er número y se ejecuta un bucle mientras el número no sea la suma de los dos anteriores
let thirdNumber = prompt(
  'Introduce el 3er número (Debe ser la suma de los dos anteriores)'
);
while (firstNumber + secondNumber !== thirdNumber) {
  thirdNumber = prompt(
    'El número no es la suma de los dos anteriores, vuelve a ingresarlo: '
  );
}
alert('¡Felicidades! ¡Lograste abrir la caja fuerte!');
