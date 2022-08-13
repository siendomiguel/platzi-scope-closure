// Ambito lexico = Accesibilidad que vamos a tener de las variables anidadas dentro de funciones y como con ellas poder llamarlas
const myGlobal = 0;

function myFunction () {
    const myNumber = 1;
    console.log(myGlobal);

    function parent () { // funcion interna / ya estamos creando un closure
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal);
        }

        return child();
    }

    return parent();
}

myFunction();