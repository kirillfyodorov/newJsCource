let money, 
    income = 'тачка', 
    expenses, 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Кафе, прогулки, мороженка').toLowerCase().split(', '),
    deposit = confirm('Есть ли у вас лепозит в банке?'), 
    mission = 300000, 
    period = 12;

let start = function() {
    do {
        money = prompt('Выш месячный доход?', '40000');
    }
    while (isNaN(money) || money == '' || money == null);
    money = +money;
}

let expenses1,
    expenses2;

let getExpensesMonth = function (ex1, ex2) {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            expenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', '');
        } else if (i === 1) {
            expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', '');
        }
        do {
            sumQuestion = prompt('Во сколько это обойдется?', '');
        }
        while (isNaN(sumQuestion) || sumQuestion == '' || sumQuestion == null);
        sum += +sumQuestion;
    }
    return sum;
}


let expensesAmount = getExpensesMonth();



let accumulateMonth = function () {
    return money - expensesAmount;
}();

let budgetPeriod = function() {
    return money * period;
}();

let expensesPerion = function() {
    return expensesAmount * period;
}();

let incomePeriod = function() {
    return budgetPeriod - expensesPerion;
}();

let budgetDay = function() {
    return Math.floor(accumulateMonth / 30);
}();

let targetMonth = function () {
    console.log(Math.ceil(mission / accumulateMonth));
    return (Math.ceil(mission / accumulateMonth));
}();

if (money < expensesAmount) {
    console.log('С таким доходом денег не накопить');
} else {
    console.log(`Вы накопите ${mission} за ${targetMonth} месяцев`)
}

if (targetMonth < 0) {
    console.log('Цель не будет достигнута');
} else {
    console.log('Цель будет достигнута');
}

if (budgetDay < 0) {
    console.log('Что то пошло не так');
}

function getStatusIncome() {
    if (budgetDay < 300) {
        return ('Низкий уровень дохода');
    } else if (budgetDay > 800) {
        return ('Высокий уровень дохода');
    } else {
        return ('Средний уровень дохода');
    }
}