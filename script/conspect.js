// 'use strict';
// события в JavaScript

// вешаем обработчик события на элемент

// сначала получаем элемент
// let square = document.querySelector('.salary');
// и объявляем счетчик
// let count = 0;
/*
и добавляем обработчик события
этот метод принимает три параметра
два их них — обяательные
первый - само событие (клик)
второй - функция, которая будет обрабатывать событие
третий - 
square.addEventListener('click', function(){
    console.log('Произошел клик по диву');
});
*/

/*
// ограничиваем количество кликов
// нам надо будет именная функция

let clicked = function(){
    // к самой функции прибавляем count по единице
    count++;
    // когда count станет равен трем...
    if(count === 3){
        // ...то мы удаляем обработчик события clicked
        square.removeEventListener('click', clicked);
    }    
    console.log('Когда ты уже накликаешься???');
};

// при вызове на втором месте впиисываем уже название функции
square.addEventListener('click', clicked);
*/

// у каждого события есть объект события
// он доступен только в функции
// чтобы его получить, надо в первом параметре функции указать его имя
// обычно называют event или 'e'

/*
// так мы найдем событие
let square = document.querySelector('.salary');

square.addEventListener('click', function(event){
    console.log(event);
});
*/

/*
let square = document.querySelector('.salary');

let eventFunc = function(event){
    console.log(event.type);
};
*/

/*
// срабатывает при полном клике по элементу
// срабатывает в конце других двух действий
square.addEventListener('click', eventFunc);
// срабатывает при отпускании мышки на элементе
square.addEventListener('mouseup', eventFunc);
// срабатывает при нажатии мышки на элементе
square.addEventListener('mousedown', eventFunc);
// Каждое движение мыши над элементом генерирует это событие
// square.addEventListener('mousemove', eventFunc);
*/

/*
square.addEventListener('click', eventFunc);
// когда наводим мышку на элемент
square.addEventListener('mouseenter', eventFunc);
square.addEventListener('mouseover', eventFunc);
// когда убираем мышку с элемента
square.addEventListener('mouseleave', eventFunc);
square.addEventListener('mouseout', eventFunc);
*/

/*
// эта функция выводит в консоль
let eventFunc = function(event){
    console.log(event.type);
};


// находим элемент по классу
// и сразу добавляем обработчик события
// событие input происходит, когда мы что-то вводим в этот самый input
document.querySelector('#deposit-check').addEventListener('input', eventFunc);
// при возврате на инпут и изменении уже записанного значения
document.querySelector('#deposit-check').addEventListener('change', eventFunc);
// то есть событие change запоминает значение (value) перед снятием фокуса
// и сравнивает значение, которое мы вводим после снятия фокуса
*/



/*
// срабатывает когда мы отпускаем кнопку
document.querySelector('#deposit-check').addEventListener('keyup', eventFunc);
// срабатывает когда мы нажимаем на кнопку
document.querySelector('#deposit-check').addEventListener('keydown', eventFunc);
*/



/*
// срабатывает когда мы кликаем на элемент
document.querySelector('#deposit-check').addEventListener('focus', eventFunc);
// срабатывает когда мы кликаем мимо элемента
document.querySelector('#deposit-check').addEventListener('blur', eventFunc);
*/


/*
// можно повесить обработчик события на сам документ
// DOMContentLoaded - ждет, пока загрузится контент
// часто это используют до начала скрипта, чтобы дождаться полной загрузки html
document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница загрузилась');


// функция обрабатывает код, который написан под ней
let eventFunc = function(event){
    console.log(event.type);
    console.log(event.target.value);
};

document.querySelector('.period-select').addEventListener('change', eventFunc);

// эта функция создает дополнительное окно
window.onbeforeunload = function(){
    return 'Вы уверены, что хотите уйти со страницы?';
};

});
*/

/*
// метод отменяет стандартное поведение браузера
// например, при клике на ссылку или отправке формы
// чтобы дальше не шло, пока не заполнит форму, например

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // это запрещает кликать по кнопке
    document.querySelector('#link').addEventListener('click', function(event){
        event.preventDefault();
    });
    // и вот тут можно повесить свой обработчик событий
    // вместо стандартного перехода по ссылке
});
*/