"use strict";

const buttonStart = document.getElementById("start"),
  buttonCancel = document.getElementById("cancel"),
  buttonPlus0 = document.getElementsByTagName("button")[0],
  buttonPlus1 = document.getElementsByTagName("button")[1],
  inputDepositCheck = document.querySelector("#deposit-check"),
  additionalIncomeItem = document.querySelectorAll(".additional_income-item"),
  budgetDayValue = document.getElementsByClassName("budget_day-value")[0],
  budgetMonthValue = document.getElementsByClassName("budget_month-value")[0],
  expensesMonthValue = document.getElementsByClassName(
    "expenses_month-value"
  )[0],
  additionalIncomeValue = document.getElementsByClassName(
    "additional_income-value"
  )[0],
  additionalExpensesValue = document.getElementsByClassName(
    "additional_expenses-value"
  )[0],
  incomePeriodValue = document.getElementsByClassName("income_period-value")[0],
  targetMonthValue = document.getElementsByClassName("target_month-value")[0],
  inputSalaryAmount = document.querySelector(".salary-amount"),
  inputIncomeTitle = document.querySelector(".income-title"),
  inputIncomeAmount = document.querySelector(".income-amount"),
  additionalIncomeItems = document.querySelector(".additional_income-item"),
  inputExpensesTitle = document.querySelector(".expenses-title"),
  // inputExpensesAmount = document.querySelector('.expenses-amount'),
  additionalIncome = document.querySelectorAll(".additional_income"),
  additionalExpensesItem = document.querySelector(".additional_expenses-item"),
  inputTargetAmount = document.querySelector(".target-amount"),
  periodSelect = document.querySelector(".period-select"),
  periodAmount = document.querySelector(".period-amount"),
  typeText = document.querySelectorAll('input[type="text"]'),
  calculateForm = document.querySelector(".calc");

  let incomeItem = document.querySelectorAll(".income-items"),
  expensesItems = document.querySelectorAll(".expenses-items");

// проверка на число
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

class AppData {
  constructor() {
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
  }

  check() {
    if (inputSalaryAmount.value.trim() === "") {
      return;
    }
  }

  start() {
    if (inputSalaryAmount.value.trim() === "") {
      return;
    }
    console.log(this);

    this.budget = +inputSalaryAmount.value;
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getIncomeMonth();
    this.getAccumulatedMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    this.getTargetMonth();
    this.getStatusIncome();
    this.showResult();

    let textInput = calculateForm.querySelectorAll('.data input[type="text"]');
    let textData = Array.prototype.slice.call(textInput);

    textData.forEach(function (input) {
      input.setAttribute("readonly", true);
    });

    // заблокировал кнопки "плюс" после нажания "рассчитать"
    buttonPlus0.disabled = true;
    buttonPlus1.disabled = true;

    buttonStart.style.display = "none";
    buttonCancel.style.display = "block";

    periodSelect.addEventListener("input", this.showResult.bind(appData));
  }

  reset() {
    let calcInputs = calculateForm.querySelectorAll("input");
    let calcArray = Array.prototype.slice.call(calcInputs);
    calcArray.forEach(function (input) {
      input.value = "";
      input.removeAttribute("readonly");
    });
    buttonStart.style.display = "block";
    buttonCancel.style.display = "none";

    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;

    // возвращаем кнопки "плюс"
    buttonPlus0.style.display = "block";
    buttonPlus1.style.display = "block";
    buttonPlus0.disabled = false;
    buttonPlus1.disabled = false;
    // теперь убираем инпуты лишние
    //Получим их снова в коллекцию, переберем
    //и если индекс не 0 - удалим. а именно...
    // 1. снова получаем со страницы все элементы
    incomeItem = document.querySelectorAll(".income-items");
    incomeItem.forEach((item, index) => {
      if (index !== 0) {
        item.remove();
      }
    });

    expensesItems = document.querySelectorAll(".expenses-items");
    expensesItems.forEach((item, index) => {
      if (index !== 0) {
        item.remove();
      }
    });

    periodSelect.value = 1;
    periodAmount.textContent = 1;
  }

  // выводим результаты всех вычислений
  showResult() {
    // создаем поддельный this, чтобы прописать его в _this.budgetMonth вместо appData.budgetMonth
    const _this = this;
    budgetMonthValue.value = this.budgetMonth;
    // Округлить вывод дневного бюджета
    // budgetDayValue = (appData.budgetDay);
    budgetDayValue.value = Math.floor(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(", ");
    additionalIncomeValue.value = this.addIncome.join(", ");
    targetMonthValue.value = Math.ceil(this.getTargetMonth()); //округлили в большую сторону
    incomePeriodValue.value = this.calcSavedMoney();
    periodSelect.addEventListener("input", function () {
      incomePeriodValue.value = this.value * _this.budgetMonth;
    });
  }

  // создаем метод, который добавляет новые поля
  // при нажатии на плюс
  addExpensesBlock() {
    // эта функция будет получать блок с двумя инпутами
    // в обязательных расходах
    expensesItems = document.querySelectorAll(".expenses-items");

    // чтобы вставить элемент, нам нужен его родитель
    //console.log(expensesItem.parentNode);
    // получаем .expenses
    // создаем переменную, чтобы создавать клон инпутов
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonPlus1);

    // если есть три поля
    if (expensesItems.length === 2) {
      /// тогда скрываем кнопку с плюсом
      buttonPlus1.style.display = "none";
    }
  }

  // Создать метод addIncomeBlock аналогичный addExpensesBlock
  addIncomeBlock() {
    incomeItem = document.querySelectorAll(".income-items");
    let cloneAdditionalIncome = incomeItem[0].cloneNode(true);
    incomeItem[0].parentNode.insertBefore(cloneAdditionalIncome, buttonPlus0);
    if (incomeItem.length === 2) {
      buttonPlus0.style.display = "none";
    }
  }

  //необходимо получить все расходы и записать все значения в объект
  getExpenses() {
    const _this = this;
    expensesItems = document.querySelectorAll(".expenses-items");

    expensesItems.forEach(function (item) {
      let itemExpenses = item.querySelector(".expenses-title").value;
      let cashExpenses = item.querySelector(".expenses-amount").value;
      if (itemExpenses !== "" && cashExpenses !== "") {
        _this.expenses[itemExpenses] = +cashExpenses;
      }
    });
  }
  // Переписать метод getIncome аналогично getExpenses
  getIncome() {
    const _this = this;
    incomeItem = document.querySelectorAll(".income-items");

    incomeItem.forEach(function (item) {
      let incomeTitle = item.querySelector(".income-title").value;
      let incomeAmount = item.querySelector(".income-amount").value;

      if (incomeTitle !== "" && incomeAmount !== "") {
        _this.income[incomeTitle] = incomeAmount;
      }
    });
  }

  // добавить функцию возможных расходов
  // (а потом — доходов) - это уже самостоятельно
  getAddExpenses() {
    // split - значит сделать из элемента массив
    // (',') - значит получить все элементы через запятую
    let addExpenses = additionalExpensesItem.value.split(",");
    const _this = this;
    // теперь перебираем массив
    addExpenses.forEach(function (item) {
      // trim - убирает пробелы в начале и в конце
      item = item.trim();
      //каждый элемент внутри массива проверяем на пустоту
      if (item !== "") {
        _this.addExpenses.push(item);
      }
    });
  }

  getAddIncome() {
    const _this = this;
    additionalIncomeItem.forEach(function (item) {
      let itemValue = item.value.trim();
      if (itemValue !== "") {
        _this.addIncome.push(itemValue);
      }
    });
  }

  getExpensesMonth() {
    for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
  }

  getIncomeMonth() {
    for (let key in this.income) {
      this.incomeMonth += +this.income[key];
    }
  }

  getAccumulatedMonth() {
    this.budgetMonth = this.budget - this.expensesMonth;
    this.budgetDay = this.budgetMonth / 30;
  }

  getBudget() {
    console.log(this.income);
    console.log(this.incomeMonth);

    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = this.budgetMonth / 30;
  }

  getTargetMonth() {
    return inputTargetAmount.value / this.budgetMonth;
  }

  getStatusIncome() {
    if (this.budgetDay >= 1200) {
      return "У вас высокий уровень дохода";
    } else if (this.budgetDay >= 600 || this.budgetDay <= 1200) {
      return "У вас средний уровень дохода";
    } else if (this.budgetDay <= 600) {
      return "К сожалению, у вас уровень дохода ниже среднего";
    } else if (this.budgetDay <= 0) {
      return "Что-то пошло не так";
    }
  }

  // этот метод записывает цифры по депозиту в 33 и 35 строки
  getInfoDeposit() {
    // если appData.deposit - это true
    if (this.deposit) {
      this.percentDeposit = +prompt(
        "Какой годовой процент у вас по депозиту?",
        10
      );
      this.moneyDeposit = +prompt("Какая сумма заложена?", 10000);
    }
  }
  //считаем, сколько заработаем за период (37 строка)
  calcSavedMoney() {
    // разобраться, почему в консоли не то
    // проверить еще раз в консоли
    return this.budgetMonth * periodSelect.value;
  }

  eventsListeners() {
    const _this = this;
    // прикрепляем обработчик событий кнопке "рассчитать" (buttonStart)
    // Привязать контекст вызова функции start к appData
    buttonStart.addEventListener("click", _this.start.bind(_this));
    buttonCancel.addEventListener("click", _this.reset.bind(_this));
    buttonPlus0.addEventListener("click", _this.addIncomeBlock);
    buttonPlus1.addEventListener("click", _this.addExpensesBlock);
    periodSelect.addEventListener("input", () => {
      periodAmount.textContent = periodSelect.value;
    });
  }
}

const appData = new AppData();
appData.eventsListeners();
