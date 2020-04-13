// точно ли здесь надо let, а не const?
// почему?
// как вывести конкретно input'ы, а не div'ы на 56 и 68 строках?
// что еще я сделал не так?

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
 inputExpensesAmount = document.querySelector('.expenses-amount'),
 additionalExpensesItem = document.querySelector('.additional_expenses-item'),
 inputTargetAmount = document.querySelector('.target-amount'),
 periodSelectRange = document.querySelector('.period-select');