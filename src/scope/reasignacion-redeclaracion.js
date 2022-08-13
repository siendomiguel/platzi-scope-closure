var firstName; // Declaracion / Asignamos valor Undefined
firstName = 'Miguel'
console.log(firstName);

var lastName = 'Guillermo'; // declarar / asignar
lastName = 'Joseluis'; // reasignar
console.log(lastName);

var secondName = 'David'; // declarando / asignado
var secondName = 'Anita'; // reasignando
console.log(secondName);

// ================================================================

//Que pasa con let ???

let fruit = 'Apple'; // declarar y asignar
fruit = 'kiwi'; // reasignar
console.log(fruit);

// let fruit = 'banana'; // No podemos redeclarar una variable let dentro del mismo block scope

// ================================================================

//Que pasa con const

const animal = 'dog';
// animal = 'cat'; // no podemos reasignar ni redeclarar una variable const dentro del mismo block scope
console.log(animal);

// ================================================================

// probando en arreglos y objetos

const vehicles = [];
vehicles.push('🛒')

console.log(vehicles);

// En este caso no hay error porque no estamos reasignando ni redeclarando, estamos haciendo referencia que ya existe al valor del arreglo.