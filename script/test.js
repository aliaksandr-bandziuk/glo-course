'use strict';

// проверяем DOM
console.log(document);

//проверяем, есть ли у document родители
console.log(document.parentElement);

// проверяем дочерние элементы
console.log(document.children);

// ищем элементы на странице

// поиск элемента по id
// используем скобки послк, потому что это метод
console.log(document.getElementById('deposit-check'));

// поиск элементов по тегу
// можно получить только несколько, а не один
console.log(document.getElementsByTagName('h1'));

// можно получить только несколько, а не один
// чтобы получить конкретный элемент, мы указываем индекс
// для этого в квадратных скобках указываем его
console.log(document.getElementsByTagName('h1')[0]);

// поиск элемента по классу
console.log(document.getElementsByClassName('result-total'));

// добираемся до конкретного элемента через индекс
console.log(document.getElementsByClassName('result-total')[0]);

// поиск элемента по querySelector (тег)
console.log(document.querySelector('head'));

// поиск элемента по querySelector (класс (через точку))
// . - как в CSS
// так можно искать по тегу, классу, id и через атрибут 
console.log(document.querySelector('.salary'));

// поиск через атрибут
console.log(document.querySelector('[title="Document"]'));

// если надо получить все элементы с одинаковым классом
console.log(document.querySelectorAll('.salary'));


// тема 2 - управление элементами

// сохраняем полученный элемент в переменную
const mainSalary = document.querySelector('.salary');

// выводим нашу переменную в консоль
console.log(mainSalary);

// каждый объект, который мы получаем, - это объект
// эти объекты имеют свои сетоды и свойства
// с помощью console.dir() мы увидим множество этих свойств и методов
console.dir(mainSalary);

// получаем атрибут
// в скобках указываем конкретный атрибут
// в нашем случае ищем класс
console.dir(mainSalary.getAttribute('class'));

// добавляем новый атрибут
mainSalary.setAttribute('style', 'background-color:green');
console.log(mainSalary);

// меняем старый атрибут title
mainSalary.setAttribute('title', 'new title');
console.log(mainSalary);

// быстро получаем атрибут
console.log(mainSalary.title);

//задаем тайтл без атрибутов
mainSalary.title = 'Хочу такой тайтл';

// тайти имя класса
console.log(mainSalary.className);

// меняем класс (уже записанный класс)
// mainSalary.className = 'control';
// это плохой способ
// лучше способ — ниже

// используем методы, которые
// содержатся в объекте classList
console.log(mainSalary.classList);

// и дальше используем основные четыре метода:
// add: ƒ add()
// contains: ƒ contains()
// remove: ƒ remove()
// toggle: ƒ toggle()

// добавили класс
mainSalary.classList.add('control');
console.log(mainSalary.classList);

// удалили класс
mainSalary.classList.remove('salary');
console.log(mainSalary);

// проверяем, есть ли нужный нам класс у данного элемента
// этот метод сразу выводится в консоль
console.log(mainSalary.classList.contains('control'));

// переключаем классы, как тумблер
mainSalary.classList.toggle('control');

// получаем все на свете свойства CSS, которые могут быть у этого элемента
// они все пустые
console.log(mainSalary.style);

// мы можем прямо из js воздействовать на это свойство
mainSalary.style.color = '#ffffff';

// меняем фон у body
document.body.style.backgroundColor = '#000000';

// меняем размер текста
mainSalary.style.fontSize = '50px';

// 3 тема - как получать свойства, которые прописаны в файле CSS?
// напрямую никак
// но можем получить свойства, которые браузер уже вычислил
// для этого есть метод, который возавращает объект со всеми свойствами
// менять эти данные не можем, получаем их только для чтения
const computedStylemainSalary = getComputedStyle(mainSalary);
console.log(computedStylemainSalary);

// еще немножко практики
console.log(computedStylemainSalary.width);
console.log(computedStylemainSalary.margin);
console.log(computedStylemainSalary.fontFamily);
console.log(computedStylemainSalary.font);

// зачем это надо???
// допустим, есть задача "добавить 10px к margin-top"
// для этого сначала получаем текущее значение
// потом округляем, прибавляем 10 и через объект style вводим все это на экран

// получаем всевдоэлемент
// если он есть
const computedStylemainSalaryNew = getComputedStyle(mainSalary, 'after');
console.log(computedStylemainSalaryNew);

// 4 тема
// этим редко пользуются, но знать надо
// querySelector и querySelectorAll можно использовать не только на document
// но и на самих элементах
// пример ниже (его нет на странице индекс.хтмл)

const hgroup = document.querySelector('hgroup');
// вместо document пишем конкретный селектор
const head111 = hgroup.querySelectorAll('head111');