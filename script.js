let money = prompt('Ваш месячный доход?'),
 income = 'фриланс',
 addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
 deposit = confirm('Есть ли у вас депозит в банке?'),
 mission = 1000000,
 period = 12,
 budgetDay = mission / 30;

// выводим в консоль
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель — заработать ' + mission + ' долларов');
console.log(addExpenses.toLowerCase().split(', '));
console.log('Заработок в день: ', budgetDay);

/* Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money */
console.log(parseInt(money));
/* “Перечислите возможные расходы за рассчитываемый период через запятую” сохранить в переменную addExpenses */
console.log(addExpenses);


/*“Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit (булево значение true/false) */
console.log(deposit);


/* 5) Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные */
/* “Введите обязательную статью расходов?” */
/* “Во сколько это обойдется?” (например amount1, amount2) */
/* в итоге 4 вопроса и 4 разные переменных */
let expenses1 = prompt('Введите обязательную статью расходов');
console.log(expenses1);
let amount1 = prompt('Во сколько это обойдется?');
console.log(parseInt(amount1));
let expenses2 = promt('Введите еще одну обязательную статью расходов');
console.log(expenses2);
let amount2 = promt('Во сколько это обойдется?');
console.log(parseInt(amount2));



/* 6) Вычислить бюджет на месяц, учитывая обязательные расходы,
сохранить в новую переменную budgetMonth и вывести результат в консоль */
let budgetMonth = money - (amount1 + amount2);
console.log(budgetMonth);


/* 7) Зная budgetMonth, посчитать за сколько месяцев
будет достигнута цель mission, вывести в консоль, округляя в большую сторону (методы объекта Math в помощь) */
let countMonth = mission / budgetMonth;
console.log(Math.round(countMonth));

/* 8) Поправить budgetDay учитывая бюджет на месяц,
а не месячный доход. Вывести в консоль  округлив в меньшую сторону */

/* 9) Написать конструкцию условий (расчеты приведены в рублях) */	

/* Если budgetDay больше 1200, то “У вас высокий уровень дохода” */
if (budgetDay >= 1200) {
    'У вас высокий уровень дохода';
}

/* Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода” */
if ((budgetDay >= 600) || (budgetDay <= 1200)) {
    'У вас средний уровень дохода';
}

/* Если budgetDay меньше 600 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего” */
if (budgetDay <= 600) {
    'К сожалению, у вас уровень дохода ниже среднего';
}

/* Если отрицательное значение то вывести “Что то пошло не так” */
if (budgetDay <= 0) {
    'Что-то пошло не так';
}

