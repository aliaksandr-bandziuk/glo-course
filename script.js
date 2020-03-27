let money = 1000,
 income = 'фриланс',
 addExpenses = 'Интернет, Такси, Коммуналка',
 deposit = true,
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