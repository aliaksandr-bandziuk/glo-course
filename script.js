'use strict';
// проверка на число
let isNumber = function(n) {
    /*восклицательный знак значит "если не число, то вернется false" */
    /* isFinite - если конечное, то true, если бесконечное, то false */
    return !isNaN(parseFloat(n)) && isFinite(n);
};

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


 /* Вариатн цикла
do {
    console.log(mission);
    mission++;
}
while(mission < 100000);
*/

let start = function() {
    money = +prompt('Ваш месячный доход?');
    
    while (!isNumber(money)) {
        money = +prompt('Ваш месячный доход?');
    }
};

start();

let getStatusIncome = function(){
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

function showTypeOf(data){
    return typeof data;
}

//я не понимаю, для чего это
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

let expensesAmount = getExpensesMonth();

let getAccumulatedMonth = function(){
    return money - expensesAmount;
};

accumulatedMonth = getAccumulatedMonth();
budgetDay = accumulatedMonth / 30;

function getTargetMonth(){
    return mission / accumulatedMonth;
}

/*3) Если getTargetMonth возвращает нам отрицательное значение,
то вместо “Цель будет достигнута” необходимо выводить “Цель не будет достигнута”*/
if (getTargetMonth() >= 0){
    console.log('Цель будет достигнута');
} else {
    console.log('Цель не будет достигнута');
}

console.log('money', showTypeOf(money));
console.log('income', showTypeOf(income));
console.log('deposit', showTypeOf(deposit));
console.log('расходы за месяц: ', expensesAmount);
console.log('возможные расходы: ', addExpenses.toLowerCase().split(', '));
console.log('срок достижения цели: ', Math.ceil(getTargetMonth()));
console.log('бюджет на день', budgetDay);
console.log(getStatusIncome());