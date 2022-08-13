var fruit = 'Apple'; // Global Scope

function bestFruit() {
	console.log(fruit);
}

bestFruit();

// ====================== Creando por error una variable global dentro de una función

function countries() {
	country = 'Colombia';
	console.log(country);
}

countries();
console.log(country);

// Al no declarar la variable con una palabra reservada, convertimos esta misma en una global