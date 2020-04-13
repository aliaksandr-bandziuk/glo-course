// точно ли здесь надо let, а не const?
// почему?
// как вывести конкретно input'ы, а не div'ы на 56 и 68 строках?
// что еще я сделал не так?

'use strict';

// Кнопку "Рассчитать" через id
let start = document.getElementById('start');
console.log(start);


// Кнопки “+” (плюс) через Tag, каждую в своей переменной.
let buttonPlus0 = document.getElementsByTagName('button')[0];
console.log(buttonPlus0);
let buttonPlus1 = document.getElementsByTagName('button')[1];
console.log(buttonPlus1);

// Чекбокс по id через querySelector
// подумать, как это сделать грамотно
let inputDepositCheck = document.querySelector('#deposit-check');
console.log(inputDepositCheck);

// Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
// точно ли это правильно?
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
console.log(additionalIncomeItem);

// Каждый элемент в правой части программы через класс,
// которые имеют в имени класса "-value", начиная с
// class="budget_day-value" и заканчивая class="target_month-value">
// console.log(document.querySelectorAll('.salary'));
let budgetDayValue = document.querySelector('.budget_day-value');
console.log(budgetDayValue);
let expensesMonthValue = document.querySelector('.expenses_month-value');
console.log(expensesMonthValue);
let additionalIncomeValue = document.querySelector('.additional_income-value');
console.log(additionalIncomeValue);
let additionalExpensesValue = document.querySelector('.additional_expenses-value');
console.log(additionalExpensesValue);
let incomePeriodValue = document.querySelector('.income_period-value');
console.log(incomePeriodValue);
let targetMonthValue = document.querySelector('.target_month-value');
console.log(targetMonthValue);

// Оставшиеся поля через querySelector каждый в отдельную переменную:
// поля ввода (input) с левой стороны и не забудьте про range.

// месячный доход (сумма)
let inputSalaryAmount = document.querySelector('.salary-amount');
console.log(inputSalaryAmount);

// дополнительный доход (наименование)
let inputIncomeTitle = document.querySelector('.income-title');
console.log(inputIncomeTitle);

// дополнительный доход (сумма)
let inputIncomeAmount = document.querySelector('.income-amount');
console.log(inputIncomeAmount);

// возможный доход
let additionalIncomeItems = document.querySelector('.additional_income-item');
console.log(additionalIncomeItems);

// обязательные расходы (наименование)
let inputExpensesTitle = document.querySelector('.expenses-title');
console.log(inputExpensesTitle);

// обязательные расходы (сумма)
let inputExpensesAmount = document.querySelector('.expenses-amount');
console.log(inputExpensesAmount);

// возможные расходы
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
console.log(additionalExpensesItem);

//депозит (цель)
let inputTargetAmount = document.querySelector('.target-amount');
console.log(inputTargetAmount);

// период расчета
let periodSelectRange = document.querySelector('.period-select');
console.log(periodSelectRange);