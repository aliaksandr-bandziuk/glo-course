'use strict';

let money = +prompt('Ваш месячный доход?', 2000),
 income = 'фриланс',
 addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
 deposit = confirm('Есть ли у вас депозит в банке?'),
 mission = 100000,
 period = 12,
 //6) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
 budgetDay,
 expenses1 = prompt('Введите обязательную статью расходов'),
 amount1 = +prompt('Во сколько это обойдется?', 500),
 expenses2 = prompt('Введите еще одну обязательную статью расходов'),
 amount2 = +prompt('Во сколько это обойдется?', 65),
 //Объявляем пустую переменную
 accumulatedMonth;

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

// Пишем функцию, которая возвращает типы данных
function showTypeOf(data){
    return typeof data;
}

//1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
function getExpensesMonth(){
    return (amount1 + amount2);
}

//2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth(){
    return money - getExpensesMonth();
}

//3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth
accumulatedMonth = getAccumulatedMonth();
budgetDay = accumulatedMonth / 30;

/*4) Объявить функцию getTargetMonth. Подсчитывает за какой период
будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат*/
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
console.log('расходы за месяц', getExpensesMonth());
console.log('возможные расходы', addExpenses.toLowerCase().split(', '));
console.log('срок достижения цели', Math.ceil(getTargetMonth()));
console.log('бюджет на день', budgetDay);
console.log(getStatusIncome());
/* 2) Добавить проверку что введённые данные являются числом,
которые мы получаем на вопрос 'Во сколько это обойдется?’ в функции  getExpensesMonth*/
console.log(typeof(getExpensesMonth));



/* Вариатн цикла
do {
    console.log(mission);
    mission++;
}
while(mission < 100000);
*/