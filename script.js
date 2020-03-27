let money = 1000;
let income = 'фриланс';
let addExpenses = 'Интернет, Такси, Коммуналка';
let deposit = true;
let mission = 1000000;
let period = 12;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель — заработать ' + mission + ' долларов');

console.log(addExpenses.toLowerCase()); //привел к нижнему регистру
console.log(addExpenses.split(', ')); // разделил на массив. в скобках надо указать разделитель. у нас это зпт и пробел

let budgetDay = mission / 30;
console.log('Заработок в день: ', budgetDay);





console.log();