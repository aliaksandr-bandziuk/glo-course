'use strict';

// проверка на число
let isNumber = function(n) {
    /*восклицательный знак значит "если не число, то вернется false" */
    /* isFinite - если конечное, то true, если бесконечное, то false */
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let start = function() {
    money = +prompt('Ваш месячный доход?');
    
    while (!isNumber(money)) {
        money = +prompt('Ваш месячный доход?');
    }
};

start();

let money,
 income = 'фриланс',
 addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
 deposit = confirm('Есть ли у вас депозит в банке?'),
 mission = 100000,
 period = 12,
 //6) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
 budgetDay,
 expenses1,
 expenses2,
 accumulatedMonth;



let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
};

//1) Функцию showTypeof и вызов функции удаляем 
// function showTypeOf(data){
//     return typeof data;
// }

let getAccumulatedMonth = function(){
    return money - expensesAmount;
};


budgetDay = accumulatedMonth / 30;



//1) Функцию showTypeof и вызов функции удаляем 
// console.log('money', showTypeOf(money));
// console.log('income', showTypeOf(income));
// console.log('deposit', showTypeOf(deposit));
console.log('расходы за месяц: ', expensesAmount);
console.log('возможные расходы: ', addExpenses.toLowerCase().split(', '));
console.log('срок достижения цели: ', Math.ceil(getTargetMonth()));
console.log('бюджет на день', budgetDay);
console.log(getStatusIncome());




// 2) В объект appData добавить свойство budget которое будет принимать значение money
// 3) В объект appData добавить свойства budgetDay, budgetMonth и expensesMonth, изначально равные нулю



// 4) Функции getExpensesMonth, getAccumulatedMonth, getTargetMonth, getStatusIncome - сделать методами объекта AppData


let expensesAmount = appData.getExpensesMonth();
let getExpensesMonth = function() {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            expenses1 = +prompt('Введите обязательную статью расходов');
        } else if (i === 1) {
            expenses2 = +prompt('Введите еще одну обязательную статью расходов');
        }

        sum += +prompt('Во сколько это обойдется?');
    }
    console.log(sum);
    return sum;
};

accumulatedMonth = appData.getAccumulatedMonth();

function appData.getTargetMonth(){
    return mission / accumulatedMonth;
}

if (getTargetMonth() >= 0){
    console.log('Цель будет достигнута');
} else {
    console.log('Цель не будет достигнута');
}

let appData.getStatusIncome = function(){
    if (budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } else if ((budgetDay >= 600) || (budgetDay <= 1200)) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay <= 600) {
        return ('К сожалению, у вас уровень дохода ниже среднего');
    } else if (budgetDay <= 0) {
        return ('Что-то пошло не так');
    }
};

// 5) После этого поправить весь проект, чтобы он работал, а именно
// Везде где вызывались наши функции поправить обращение через объект, например
// let expensesMonth = appData.getExpensesMonth(); 