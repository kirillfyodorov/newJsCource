let money = 60000, 
    income = 'тачка', 
    expenses, 
    addExpenses = 'Концерт, Кафе, Шашлык', 
    deposit = false, 
    mission = 300000, 
    period = 12;

let budgetDay = money / 30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(income.length);

console.log('Период ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

let splitStr = addExpenses.toLocaleLowerCase().split(', ');
console.log(splitStr);

console.log(budgetDay);
console.log(money % 30);