function greeting () {
    let userName = 'Miguel';

    function displayUserName () {
        return `Hello ${userName}`;
    }
    return displayUserName;
}

const g = greeting();

console.log(g);
console.log(g());