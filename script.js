'use strict';

let money = +prompt('Ваш месячный доход?', 1800),
 income = 'фриланс',
 addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
 deposit = confirm('Есть ли у вас депозит в банке?'),
 mission = 10000,
 period = 12,
 //6) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
 budgetDay = accumulatedMonth / 30,
 expenses1 = prompt('Введите обязательную статью расходов'),
 amount1 = +prompt('Во сколько это обойдется?', 500),
 expenses2 = prompt('Введите еще одну обязательную статью расходов'),
 amount2 = +prompt('Во сколько это обойдется?', 65),
 //5) Удалить из кода переменную budgetMonth
 //budgetMonth = money - (amount1 + amount2),

//и здесь проблема, так как отсутствует значение budgetMonth 
countMonth = mission / budgetMonth;

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
console.log(getStatusIncome());

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(income.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель — заработать ' + mission + ' долларов');
console.log(addExpenses.toLowerCase().split(', '));
console.log('Заработок в день: ', budgetDay);
console.log(parseInt(money));
console.log(addExpenses);
console.log(deposit);
console.log(expenses1);
console.log(parseInt(amount1));
console.log(expenses2);
console.log(parseInt(amount2));
console.log(Math.round(countMonth));

//начинается lesson04
//1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
function getExpensesMonth(){
    return (amount1 + amount2);
}
console.log(getExpensesMonth());

//2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth(){
    return (money - (amount1 + amount2));
}
console.log(getAccumulatedMonth());

//3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth
var accumulatedMonth = function(){
    return (getAccumulatedMonth);
};

/*4) Объявить функцию getTargetMonth. Подсчитывает за какой период
будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат*/
function getTargetMonth(){
    return (mission - accumulatedMonth);
}
console.log(getTargetMonth);