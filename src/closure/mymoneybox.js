// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`Moneybox: $${saveCoins}`);
// }
// moneyBox(5);
// moneyBox(5);
// Esta logica no esta recordando el valor que estamos asignando

function moneyBox () {
    let saveCoins = 0;

    function countCoins (coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);

const moneyBoxAna = moneyBox();

moneyBoxAna(20);
moneyBoxAna(30);