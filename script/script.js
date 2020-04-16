'use strict';

let buttonStart = document.getElementById('start'),
 buttonPlus0 = document.getElementsByTagName('button')[0],
 buttonPlus1 = document.getElementsByTagName('button')[1],
 inputDepositCheck = document.querySelector('#deposit-check'),
 additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
 budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
 expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
 additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
 additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
 incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
 targetMonthValue = document.getElementsByClassName('target_month-value')[0],
 inputSalaryAmount = document.querySelector('.salary-amount'),
 inputIncomeTitle = document.querySelector('.income-title'),
 inputIncomeAmount = document.querySelector('.income-amount'),
 additionalIncomeItems = document.querySelector('.additional_income-item'),
 inputExpensesTitle = document.querySelector('.expenses-title'),
 expensesItems = document.querySelectorAll('.expenses-items'),
 // inputExpensesAmount = document.querySelector('.expenses-amount'),
 additionalExpensesItem = document.querySelector('.additional_expenses-item'),
 inputTargetAmount = document.querySelector('.target-amount'),
 periodSelectRange = document.querySelector('.period-select');

// проверка на число
let isNumber = function(n) {
    /*восклицательный знак значит "если не число, то вернется false" */
    /* isFinite - если конечное, то true, если бесконечное, то false */
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let budgetDay;

let appData = {
    budget: 0,
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
    // эта функция раньше была выше, до appData
    start: function() {

        // говорим, что из инпута inputSalaryAmount нам нельзя получать пустую строку
        if(inputSalaryAmount.value === ''){
            alert('Ошибка! Поле "Месячный доход" должно быть заполнено!');
            return;
        }
        
        // присваиваю значение инпута "месячный доход" в budget
        appData.budget = inputSalaryAmount.value;
        console.log('inputSalaryAmount.value: ', inputSalaryAmount.value);


        // было в строке "тут по очереди вызывать мои методы"
        // appData.asking();
        // appData.getExpensesMonth();
        // appData.getAccumulatedMonth();
        // appData.getTargetMonth();
        // appData.getStatusIncome();

    },
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,

    // создаем метод, который добавляет новые поля
    // при нажатии на плюс
    addExpensesBlock: function(){
        // эта функция будет получать блок с двумя инпутами
        // в обязательных расходах
        let expensesItems = document.querySelectorAll('.expenses-items');

        // чтобы вставить элемент, нам нужен его родитель
        //console.log(expensesItem.parentNode);
        // получаем .expenses
        // создаем переменную, чтобы создавать клон инпутов
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonPlus1);

        // если есть три поля
        if(expensesItems.length === 2){
            /// тогда скрываем кнопку с плюсом
            buttonPlus1.style.display = 'none';
        }
    },

    asking: function () {

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
                str = prompt('Введите обязательную статью расходов');
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

// прикрепляем обработчик событий кнопке "рассчитать" (buttonStart)
buttonStart.addEventListener('click', appData.start);

// обработчик события кнопке "плюс"
// по клику вызывается функция из appData.addExpensesBlock
buttonPlus1.addEventListener('click', appData.addExpensesBlock);

//тут по очереди вызывать мои методы

if (appData.getTargetMonth() > 0) {
    console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяца');
} else {
    console.log('Цель не будет достигнута');
}

// это все потом удалить
// // 12 вывести в консоль
// // расходы за месяц
// console.log(appData.expenses);
// // за какой период будет достигнута цель
// console.log(appData.period);
// // уровень дохода
// console.log(appData.budgetMonth);
// console.log('Возможные доходы: ', appData.addExpenses);