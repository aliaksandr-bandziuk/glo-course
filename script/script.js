'use strict';

let buttonStart = document.getElementById('start'),
 buttonPlus0 = document.getElementsByTagName('button')[0],
 buttonPlus1 = document.getElementsByTagName('button')[1],
 inputDepositCheck = document.querySelector('#deposit-check'),
 additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
 budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
 budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
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
 additionalIncome = document.querySelectorAll('.additional_income'),
 additionalExpensesItem = document.querySelector('.additional_expenses-item'),
 inputTargetAmount = document.querySelector('.target-amount'),
 periodSelect = document.querySelector('.period-select'),
 incomeItem = document.querySelectorAll('.income-items');

// проверка на число
let isNumber = function(n) {
    /*восклицательный знак значит "если не число, то вернется false" */
    /* isFinite - если конечное, то true, если бесконечное, то false */
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    // процент депозита
    percentDeposit: 0,
    // сколько денег положил на депозит
    moneyDeposit: 0,
    // эта функция раньше была выше, до appData
    start: function() {
        if (inputSalaryAmount.value.trim() === '') {
            return;
        }

        // ПОЧЕМУ МОЖЕТ НЕ РАБОТАТЬ ЭТО?
        // еще могу циклом написать
        // но это ж, наверное, тоже не то?
        // getbuttonStart: function(){
        //     if (inputSalaryAmount === '') {
        //         buttonStart.disabled;
        //     }
        // }
        // appData.getbuttonStart();
        
        
        // присваиваю значение инпута "месячный доход" в budget
        appData.budget = +inputSalaryAmount.value;
        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAccumulatedMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.getTargetMonth();
        appData.getStatusIncome();
        //appData.budgetMonth();
        appData.showResult();
    },
    
    // выводим результаты всех вычислений
    showResult: function(){
        budgetMonthValue.value = appData.budgetMonth;
        // Округлить вывод дневного бюджета
        // budgetDayValue = (appData.budgetDay);
        budgetDayValue.value = Math.floor(appData.budgetDay);
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth()); //округлили в большую сторону
        incomePeriodValue.value = appData.calcSavedMoney();
    },

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

    // Создать метод addIncomeBlock аналогичный addExpensesBlock
    addIncomeBlock: function(){
        let additionalIncome = document.querySelectorAll('.additional_income');
        let cloneAdditionalIncome = additionalIncome[0].cloneNode(true);
        additionalIncome[0].parentNode.insertBefore(cloneAdditionalIncome, buttonPlus0);
        if(additionalIncome.length === 2){
            buttonPlus0.style.display = 'none';
        }
    },

    //необходимо получить все расходы и записать все значения в объект
    getExpenses: function(){
        // перебираем элементы внутри expensesItems
        expensesItems.forEach(function(item){
            //console.log(item);
            // надо получить значение инпутов и записать их в объект expenses
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            // если переменные выше не равны пустой строке...
            if(itemExpenses !== '' && cashExpenses !== ''){
                // ...тогда мы в appDataExpenses записываем itemExpenses
                // то есть itemExpenses будет ключом...
                // а cashExpenses станет значением
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    // Переписать метод getIncome аналогично getExpenses
    getIncome: function(){
        incomeItem.forEach(function(item){
            let incomeTitle = item.querySelector('.income-title').value;
            let incomeAmount = item.querySelector('.income-amount').value;
            
            if(incomeTitle !== '' && incomeAmount !== ''){
                appData.income[incomeTitle] = incomeAmount;
            }
        });    
    },

    // добавить функцию возможных расходов
    // (а потом — доходов) - это уже самостоятельно
    getAddExpenses: function(){
        // split - значит сделать из элемента массив
        // (',') - значит получить все элементы через запятую
        let addExpenses = additionalExpensesItem.value.split(',');
        // теперь перебираем массив
        addExpenses.forEach(function(item){
            // trim - убирает пробелы в начале и в конце
            item = item.trim();
            //каждый элемент внутри массива проверяем на пустоту
            if(item !== ''){
                // тогда добавляем в addExpenses с помощью push
                appData.addExpenses.push(item);
            }

        });
    },

    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                // то записываем значение сюда
                appData.addIncome.push(itemValue);
            }
        });
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

    getBudget: function(){
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
    },

    getTargetMonth: function(){
        return inputTargetAmount.value / appData.budgetMonth;
    },

    getStatusIncome: function(){
        if (appData.budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        } else if ((appData.budgetDay >= 600) || (appData.budgetDay <= 1200)) {
            return ('У вас средний уровень дохода');
        } else if (appData.budgetDay <= 600) {
            return ('К сожалению, у вас уровень дохода ниже среднего');
        } else if (appData.budgetDay <= 0) {
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
        return appData.budgetMonth * periodSelect.value;
    },
};


// прикрепляем обработчик событий кнопке "рассчитать" (buttonStart)
buttonStart.addEventListener('click', appData.start);

// обработчик события кнопке "плюс"
// по клику вызывается функция из appData.addExpensesBlock
buttonPlus0.addEventListener('click', appData.addIncomeBlock);
buttonPlus1.addEventListener('click', appData.addExpensesBlock);
