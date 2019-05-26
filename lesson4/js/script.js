let money = +prompt('Выш месячный доход?', '40000'), 
    income = 'тачка', 
    expenses, 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Кафе, прогулки, мороженка').toLowerCase().split(', '),
    deposit = confirm('Есть ли у вас лепозит в банке?'), 
    mission = 300000, 
    period = 12;

function getAccumulatedMonth() {
    return money - (q2 + q4)
};

let q1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ''),
    q2 = +prompt('Во сколько это обойдется?', ''),
    q3 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ''),
    q4 = +prompt('Во сколько это обойдется?', ''),
    accumulatedMonth = getAccumulatedMonth();

let getExpensesMonth = function (ex1, ex2) {
    console.log(`Сумма обязательных расходов - ${ex1 + ex2}`);
}

console.log(accumulatedMonth);

function getTargetMonth() {
    return (Math.ceil(mission / accumulatedMonth))
}
console.log('Цель будет достигнула за ' + getTargetMonth() + ' месяцев');

function getStatusIncome() {
    if (budgetDay < 300) {
        return ('Низкий уровень дохода');
    } else if (budgetDay > 800) {
        return ('Высокий уровень дохода');
    } else {
        return ('Средний уровень дохода');
    }
}