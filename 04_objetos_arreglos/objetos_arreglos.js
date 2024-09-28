// Primitivos
let primitivo1 = "Algo"
let primitivo2 = 5
let primitivo3 = false
let primitivo4 = Symbol()

console.log(primitivo1);
let newPrimitiva = primitivo1;
console.log(newPrimitiva);
newPrimitiva = "Pipiola";
console.log(newPrimitiva);

primitivo1 = "Changua";
console.log(primitivo1);
console.log(newPrimitiva);

// No primitivas
let objeto = {almuerzo: 'Picada con extra Butifarra'};
console.log(objeto.almuerzo);

let objeto2 = {};
console.log(objeto2);

objeto2 = objeto;
console.log(objeto2.almuerzo);

objeto.almuerzo = "Bistec al caballo";
console.log(objeto.almuerzo);

console.log(objeto2.almuerzo);


// Arreglos-Vectores-Arrays
// Lista de datos -> Multiples datos, complejos
let arrayJs = ["asd", 3, null, [], {}];
console.log(arrayJs[0]);

let bandeja = [
  {
    almuerzo: 'Pollo',
    valor: 4500
  },
  {
    almuerzo: 'Chicharron',
    valor: 2500
  },
  {
    almuerzo: 'Sobrebarriga',
    valor: 8500
  },
  {
    almuerzo: 'Higado encebollado',
    valor: 4500
  },
  {
    almuerzo: 'Mondongo Guisado',
    valor: 6500
  },
];
// .MAP => Crea un nuevo arreglo - React, desarrollo Front
let nombreBandejas = bandeja.map((item) => item.almuerzo);
console.log(nombreBandejas);

// .FILTER => Filtrar el arreglo para quitarlo del arreglo
let filterBandeja = bandeja.filter((item) => item.valor >= 4500);
console.log(filterBandeja);

// .FIND => Filtrar el valor que coincida, Encontrar y te va a devolver
// Lo que tu le solicites
let findBandeja = bandeja.find((item) => item.valor === 4500);
console.log(findBandeja);

// .FINDINDEX => Encontrar y te va a devolver
// El indice del valor que coincida
let findIndexBandeja = bandeja.findIndex((item) => item.almuerzo === 'Mondongo Guisado');
console.log(findIndexBandeja);

// .INCLUDES => El comprueba si lo que le pedi esta en mi arreglo
// Retornando un SI O NO
console.log([1, 2, 3].includes(2));

// .FOREACH => Iterar sobre mi arreglo
let hasMondongo;
bandeja.forEach((item) => {
  console.log(item);
  if(item.valor === 6500) {
    hasMondongo = true;
  }
});
console.log(hasMondongo);

// .PUSH => Agregar un elemento al final
bandeja.push({
  almuerzo: 'Conejo',
  valor: 7500
});
console.log(bandeja);

// .POP => Elimina el valor que esta de ultimas en mi arreglo
bandeja.pop();
console.log(bandeja);

// .UNSHIFT => Agrega un valor al inicio
bandeja.unshift({
  almuerzo: 'Conejo',
  valor: 7500
});
console.log(bandeja);

// .SHIFT => Lo eliminar el valor del inicio
bandeja.shift();
console.log(bandeja);

// .SPLICE => Nos permite eliminar un elemento de un posición especifica
// Reemplazarlo nuestro elemento por otro distinto
// bandeja.splice(2, 1);
// console.log(bandeja);

bandeja.splice(2, 1, {
  almuerzo: 'Conejo',
  valor: 7500
});
console.log(bandeja);

// REVERSE => Voltear el arreglo, y modifica el original
bandeja.reverse();
console.log(bandeja);

// .LENGHT => Nos devuelve la cantidad de elementos que hay
console.log(bandeja.length);

// CONCATENANDO MIS METODOS
let bandejaModificada = bandeja
  .map((item) => item.almuerzo)
  .reverse()
  .find((item) => item === 'Higado encebollado');

console.log(bandejaModificada);

// Objetos

let almuerzoDefinitivo = {
  almuerzo: 'Conejo',
  valor: 7500
};

// Object.values => Me retorna los valores
console.log(Object.values(almuerzoDefinitivo));

// Object.keys => Me retorna las llaves
console.log(Object.keys(almuerzoDefinitivo));

// variable Objecto hasOwnProperty => Boolean si identifica una llave
console.log(almuerzoDefinitivo.hasOwnProperty("almuerzo"));
console.log(almuerzoDefinitivo.hasOwnProperty("puedoFiar"));

// Object.freeze => Tan importante que nada lo puede modificar
Object.freeze(almuerzoDefinitivo);
almuerzoDefinitivo.puedoFiar = true;
console.log(almuerzoDefinitivo);

// Object.assign => Crear un nuevo objeto
let nuevoAlmuerzo = {};
nuevoAlmuerzo = Object.assign(nuevoAlmuerzo, almuerzoDefinitivo);

// SPREAD OPERATOR => Crea un nuevo objeto, crea una nueva referencia y aparte
// Me deja personalizar mi nuevo objeto

// Mandarina, Luego va el Gajo de la mandarina
nuevoAlmuerzo = { ...almuerzoDefinitivo, almuerzo: 'Cuy' };
console.log(nuevoAlmuerzo);
console.log(almuerzoDefinitivo);

// YEISON => FORMATO, ESTILO DE ESCRITURA DE ELEMENTOS
// Es un formato ligero y estructurado
// Es independiente del lenguaje de JS
// Intercambiar, Compartir -> Información
// Lo pueden aprovechar para guardar objetos dentro del Local Storage
// Cookie, State

let nuevoJson = {
  "nombre": 'Mateo Aponte',
}
let nuevoJsonString = JSON.stringify(nuevoJson);
let almuerzoDefinitivoString = JSON.stringify(almuerzoDefinitivo);
console.log(nuevoJsonString);
console.log(almuerzoDefinitivoString);

console.log(JSON.parse(nuevoJsonString));
console.log(JSON.parse(almuerzoDefinitivoString));

