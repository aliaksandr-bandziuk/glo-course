'use strict';
//эти переменные в конце почистить
let money,
expenses1,
expenses2,
accumulatedMonth,
budgetDay; //возможно, придется удалить
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

let appData = {
    budget: money,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 100000,
    period: 12,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,

    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        // объявляю, чтобы использовать в цикле ниже
        // полученные значения потом пойдут выше
        let str, count;

        for (let i = 0; i < 2; i++) {
            str = prompt('Введите обязательную статью расходов');
            count = prompt('Во сколько это обойдется?');
            
            // результат вопросов записываем в expenses по способу "свойство: значение"
            // плюс переносим в count из prompt. так не будет багов
            appData.expenses[str] = +count;
        }
    },

    getExpensesMonth: function() {
        console.log(appData.expenses);
        // for - запускаем цикл
        // let key - перебирая каждый ключ в appData.expenses
        for(let key in appData.expenses) {
            // написать цикл, который сделает сумму всех ответов со строки 53
            appData.expensesMonth += appData.expenses[key];
            console.log(appData.expensesMonth);
        }
    },
    // должен возвращать (доходы - расходы)
    getAccumulatedMonth: function(){
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
    },

    getTargetMonth: function(){
        return appData.mission / appData.budgetMonth;
    },

    getStatusIncome: function(){
        if (appData.budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        } else if ((budgetDay >= 600) || (budgetDay <= 1200)) {
            return ('У вас средний уровень дохода');
        } else if (budgetDay <= 600) {
            return ('К сожалению, у вас уровень дохода ниже среднего');
        } else if (budgetDay <= 0) {
            return ('Что-то пошло не так');
        }
    }

};
//тут по очереди вызывать мои методы
appData.asking();
appData.getExpensesMonth();
appData.getAccumulatedMonth();
appData.getTargetMonth();
appData.getStatusIncome();