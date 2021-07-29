const moneyBox = (coins) => {
    // Variable inicializada
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins}`);
}
moneyBox(5);
moneyBox(20);

const moneyBox = () => {
    // Variable inicializada
    var saveCoins =  0;
    // Funcion que recibe parametro COINS
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`Money box: ${saveCoins}`);
    }
    return countCoins;
};
let myMoney = moneyBox();

myMoney(2);
myMoney(7);