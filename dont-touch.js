let obj = {};

obj['свойство1'] = 'значение1';
obj['свойство2'] = 'значение2';

console.log(obj);


let obj1 = {
    var1: 1,
    var2: 2
};

for(let key in obj1) {
    //выводим свойства
    console.log(key);
    //выводим значения
    console.log(obj1[key]);
}

let result = 0;

for(let key in obj1) {
    //к переменной result прибавить значения из var1 и var2
    result += obj1[key];
}

console.log(result);