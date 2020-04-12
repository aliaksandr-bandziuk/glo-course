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
    money = +prompt('Ваш месячный доход?', 50000);
    
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
    // процент депозита
    percentDeposit: 0,
    // сколько денег положил на депозит
    moneyDeposit: 0,
    mission: 100000,
    period: 12,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,

    asking: function(){

        // есть ли у пользователя
        //дополнительный заработок
        if(confirm('Есть ли у вас дополнительный источник заработка?')){
            let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
            while (isNumber(itemIncome) || itemIncome === null || itemIncome === false){
                itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
            }
            // почему не работает код ниже???
            // while (isNumber(itemIncome) || itemIncome === null || itemIncome === false) {
            //     alert('Напишите буквами');
            //     let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
            // }
            let cashIncome = +prompt('Сколько в месяц вы за это получаете?', 10000);
            while (!isNumber(cashIncome) || cashIncome === null || cashIncome === false){
                cashIncome = +prompt('Сколько в месяц вы за это получаете?', 10000);
            }
            // сохраняем результат (cashIncome) из переменной itemIncome
            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        while (isNumber(addExpenses) || addExpenses === null || addExpenses === false){
            addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        }
        appData.addExpenses = addExpenses.toUpperCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        // объявляю, чтобы использовать в цикле ниже
        // полученные значения потом пойдут выше
        let str, count;

        for (let i = 0; i < 2; i++) {
            str = prompt('Введите обязательную статью расходов');
            while (isNumber(str) || str === null || str === false){
                addExpenses = prompt('Введите обязательную статью расходов');
            }
            count = prompt('Во сколько это обойдется?');
            while (!isNumber(count) || count === null || count === false){
                count = prompt('Во сколько это обойдется?');
            }

            // результат вопросов записываем в expenses по способу "свойство: значение"
            // плюс переносим в count из prompt. так не будет багов
            appData.expenses[str] = +count;
        }
    },

    getExpensesMonth: function() {
        // console.log(appData.expenses);
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
    },

    // этот метод записывает цифры по депозиту в 33 и 35 строки
    getInfoDeposit: function(){
        // если appData.deposit - это true
        if (appData.deposit) {
            appData.percentDeposit = +prompt('Какой годовой процент у вас по депозиту?', 10);
            appData.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
        }
    },
    //считаем, сколько заработаем за период (37 строка)
    calcSavedMoney: function(){
        // разобраться, почему в консоли не то
        // проверить еще раз в консоли
        return appData.budgetMonth * appData.period;
    }
};
//тут по очереди вызывать мои методы
appData.asking();
appData.getExpensesMonth();
appData.getAccumulatedMonth();
appData.getTargetMonth();
appData.getStatusIncome();

console.log('Расходы за месяц: ' + appData.expensesMonth);

if (appData.getTargetMonth() > 0) {
    console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяца');
} else {
    console.log('Цель не будет достигнута');
}

console.log(appData.getStatusIncome());

// 12 вывести в консоль
// расходы за месяц
console.log(appData.expenses);
// за какой период будет достигнута цель
console.log(appData.period);
// уровень дохода
console.log(appData.budgetMonth);
console.log('возможные доходы: ', appData.addExpenses);