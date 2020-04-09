'use strict';

let money;
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

let budgetDay,
 expenses1,
 expenses2,
 accumulatedMonth;

let appData = {
    // 2) В объект appData добавить свойство budget которое будет принимать значение money
    // как вариант appData.budget: money, или budget {money: 'значение'},
    budget: money,
    // 3) В объект appData добавить свойства budgetDay, budgetMonth и expensesMonth, изначально равные нулю
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    // 4) Функции getExpensesMonth, getAccumulatedMonth, getTargetMonth, getStatusIncome
    //сделать методами объекта AppData
    getExpensesMonth: function() {
        // let sum = 0;
        // for (let i = 0; i < 2; i++) {
        //     if (i === 0) {
        //         expenses1 = +prompt('Введите обязательную статью расходов');
        //     } else if (i === 1) {
        //         expenses2 = +prompt('Введите еще одну обязательную статью расходов');
        //     }
        //     sum += +prompt('Во сколько это обойдется?');
        // }
        // console.log(sum);
        // return sum;
    },
    getAccumulatedMonth: function(){
        return money - expensesAmount;
    },
    getTargetMonth: {},
    getStatusIncome: {},
    income: {},
    addIncome: [],
    // 7) ... чтобы результат записывался в объект  appData.expenses
    expenses: {
        expenses1: [],
        expenses2: [],
    },
    addExpenses: [],
    deposit: false,
    mission: 100000,
    period: 12,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        // 7) Перенести цикл из метода getExpensesMonth в метод asking, и переписать цикл таким образом 
        // чтобы результат записывался в объект  appData.expenses
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
    }
};
// 6) Сразу после объекта выполните вызов
appData.asking();



// 5) После этого поправить весь проект, чтобы он работал, а именно
// Везде где вызывались наши функции поправить обращение через объект, например
// let expensesMonth = appData.getExpensesMonth(); 





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

// 1) Функцию showTypeof и вызов функции удаляем 
// function showTypeOf(data){
//     return typeof data;
// }

let expensesAmount = appData.getExpensesMonth();

accumulatedMonth = appData.getAccumulatedMonth();
budgetDay = accumulatedMonth / 30;

function getTargetMonth(){
    return appData.mission / accumulatedMonth;
}

if (getTargetMonth() >= 0){
    console.log('Цель будет достигнута');
} else {
    console.log('Цель не будет достигнута');
}

// console.log('money', showTypeOf(money));
// console.log('income', showTypeOf(appData.income));
// console.log('deposit', showTypeOf(appData.deposit));
console.log('расходы за месяц: ', expensesAmount);

console.log('срок достижения цели: ', Math.ceil(getTargetMonth()));
console.log('бюджет на день', budgetDay);
console.log(getStatusIncome());