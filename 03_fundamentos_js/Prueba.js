// JavasScript -> Lenguae no Tipado
// La clase de hoy es la diferencia entre un Junior y un Semi Senior

// F1 - Quokka Toggle (Start/Stop)

// Tipos datos
// Primitivos y los No Primitivos

console.log(typeof 'String');
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefined); // No existe
console.log(typeof BigInt(5)); // Se usa para calculos exactos - No se puede utilizar Math
console.log(typeof Symbol()); // Crear valores únicos, Claves

// No Primitivos
console.log(typeof Function);
console.log(typeof Object());
console.log(typeof null); // {}
console.log(typeof Array());

// Tipos de Variables

// 3 pasos:
// 1. Declarar: Cuando le damos vida - Ocupa un espacio en memoria
// 2. Inicializar: Donde se coloca un valor por 1ra vez
// 3. Asignar: Es cambiar el valor

var variableFea; // Declarando
variableFea = 10; // Inicializando y asignando
variableFea = 15; // Asignando

const constante = 'Constante';
// var variable = "Variable tiende a ser más global";
let especificidad = 'Es mucha más específica';

// Var: Reasignable y Redeclarable - Scope de Función
var almuerzo;
var almuerzo = 'Bandeja Paisa';
var almuerzo = 'Changua'; // Redeclarando
almuerzo = 'Corrientazo'; // Reasignando

// Let: No redeclarable pero si reasignable - Scope de Bloque
let pizza;
pizza = 'Pizza Hawaina';
pizza = 'Pizza Champiñones';

// Const: No redeclarable, no reasignable y debe ser Inicializada - Scope de Bloque
const sopa = 'Ajiaco';
// URL de un API, API KEY, Token, Contraseñas, Id's, etc

// Estructuras de Control
// ** BLOQUE: Se ejecuta según una condicionas
let puedeEntrar = false;
let puedeEntrar2 = true;
if (puedeEntrar) {
  console.log('Haz algo');
} else if (puedeEntrar2) {
  console.log('Haz algo en condicional anidada');
} else {
  console.log('No haz nada');
}
// Variable de iteración

// FOR: Ciclo controlado y númerico
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// WHILE: Ciclo no sea tan controlado
while (false) {
  // Mucha lógica, desconociendo cuantas lo va a hacer
}

// SWITCH: Control de una variable que puede tener muchos valores
let action = 'SUMAR';
switch (action) {
  case 'ADD':
  case 'SUMAR':
    console.log('Añadiendo');
    break;
  case 'SUBTRACT':
    console.log('Quitando');
    break;
  default:
    console.log('No haz nada');
}

// Compuertas Lógicas y Operadores

// AND - Ampersand &&
console.log(true && false); // Si ambos valores son verdaderos
// OR - Pipes ||
console.log(true || false); // Si algunos de los valores es verdadero
// NOT - Exclamation !
console.log(!true); // El valor contrario

// Operadores
// Igualdad de valor
console.log(5 == 5); // Operador de igualdad
console.log(5 != 4); // Operador de diferencia

// Igualdad de Valor y de Tipo
console.log('5' === 5);
console.log('5' !== 4);

console.log(5 > 5);
console.log(5 >= 4);

console.log(5 < 6);
console.log(5 <= 6);

// Valores Falsys
// Son valores que si se evaluan como Booleanos, JS nos retorna falso
console.log(!!undefined);
console.log(!!null);
console.log(!!'');
console.log(!!NaN);

console.log(!!'asd');
console.log(!![]);
console.log(!!{});

let algunaVariable = 'Variable';
function API() {
  return null;
}
function modificala() {
  algunaVariable = API();
  return !!algunaVariable;
}
console.log(modificala());

// FUNCIONES
// Son bloques de código que pueden ser llamados
// Pueda reutilizable, modularizar y centralizar
// Caracteristicas: Parametros, Retorno

// Funciones feas
// Función delcaración
function sumar(a, b) {
  return a + b;
}
console.log(sumar(5, 4));

// Arrow Functions
// Función de Expresión
const restar = (a, b) => {
  return a - b;
};
console.log(restar(9, 5));

// Reasignables, Redeclarables
function sumar(a, b) {
  return a * 5;
}

// Yo quiero tener funciones escalables que desconozca el tamaño de los parámetros
function canasta() {
  return arguments;
}
console.log(canasta('Guayaba', 'Manzana', 'Banano', 'Melocotón'));

function fruver() {
  // Arrow: Tienen la capacidad de heredar el contexto
  return function () {
    return arguments;
  };
}

console.log(fruver('Guayaba', 'Manzana', 'Banano', 'Melocotón')());

// SCOPE:

// Scope, es el contexto de ejecución
// ¿Dondé existe mi variable?
// ¿Dondé la puedo utilizar?

// Variable Global
let variable = 'Por fuera del scope';

// // Función Global
// const FuncionConFlecha = () => {
//   // Variable Lobal/Función
//   let variable = "Esto es una variable dentro de una función";
//   console.log(variable);
// }

// console.log(variable);
// FuncionConFlecha();

// let variablePorFuera = "Variable que esta por fuera"
// const FuncionConFlecha = () => {
//   // Variable Local
//   let variableLocal = "Esto es una variable dentro de una función";

//   return function() {
//     // Variable Local
//     let variableAnidada = "Variable Anidada";
//     console.log(variableAnidada);
//     console.log(variableLocal);
//     console.log(variablePorFuera);
//   }
// }
// FuncionConFlecha()();

// VAR: Scope de función
const scopeDeFuncion = () => {
  var variableDeFuncion = 'Dentro del Scope';

  // Bloque
  if (true) {
    var variableDeFuncionAnidada = 'Dentro del Scope Anidado';
  }

  console.log(variableDeFuncionAnidada, variableDeFuncion);
};

scopeDeFuncion();

const scopeDeBloque = () => {
  let variableDeBloque = 'Dentro del Scope';

  // BLOQUE
  if (true) {
    let variableDeBloqueAnidada = 'Dentro del Scope Anidado';
    console.log(variableDeBloqueAnidada);
  }

  console.log(variableDeBloque);
};

scopeDeBloque();

// HOISTING
// Separa la declaración y la inicialización

// const sobreElHoisting = () => {
//   var variable = 'Hoisting';
//   for (var i = 0; i < 10; i++) {
//     console.log(i);
//   }
//   console.log(variable);
//   console.log(i);
// };
// sobreElHoisting();

// const sobreElHoisting = () => {
//   // Declarar
//   var variable;
//   var i;
//   var algo;

//   variable = 'Hoisting';
//   for (i = 0; i < 10; i++) {
//     if(i == 5) {
//       algo = 0; // Inicializando
//       algo = 5; // Asignando
//     }
//     console.log(i);
//   }
//   console.log(variable);
//   console.log(i);
//   console.log(algo);
// };
// sobreElHoisting();

sobreElHoistingConLet = () => {
  // Declara
  let variable = 'Hoisting'; // Ejecuta

  if (true) {
    let nuevaVariable = 'Hoisting Anidado';
    console.log(nuevaVariable);
  }
  console.log(variable);
};
sobreElHoistingConLet();
