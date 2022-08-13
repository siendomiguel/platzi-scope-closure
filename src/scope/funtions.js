function greeting () {
    let userName = 'Anna';
    console.log(userName);

    if (userName === 'Anna'){
        console.log(`Hello ${userName}!`)
    }
}

greeting();

// La variable userName solo puede ser accedida desde dentro de la misma funcion greeting, si lo intentamos fuera nos arrojara un error: userName is not defined