let money = +prompt('Выш месячный доход?', '40000'), 
    income = 'тачка', 
    expenses, 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Кафе, прогулки, мороженка').toLowerCase().split(', '),
    deposit = confirm('Есть ли у вас лепозит в банке?'), 
    mission = 300000, 
    period = 12;



let q1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ''),
    q2 = +prompt('Во сколько это обойдется?', ''),
    q3 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ''),
    q4 = +prompt('Во сколько это обойдется?', ''),
    budgetMonth = money - (q2 + q4);

let budgetDay = Math.floor(budgetMonth / 30);



console.log(addExpenses);
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log('Цель будет достигнула за ' + Math.ceil(mission / budgetMonth) + ' месяцев');

if (budgetDay < 300) {
    console.log('Низкий уровень дохода');
} else if (budgetDay > 800) {
    console.log('Высокий уровень дохода');
} else {
    console.log('Средний уровень дохода');
}