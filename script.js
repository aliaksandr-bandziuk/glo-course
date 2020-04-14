'use strict';

const books = document.querySelectorAll('.book'),
    bannerAdv = document.querySelector('.adv'),
    newChapter = document.createElement('li'),
    bodyDoc = document.querySelector('body');

// Восстановить порядок книг.

books[0].before(books[1]);
books[5].after(books[2]);
books[5].before(books[3]);

// Заменить картинку заднего фона на другую из папки image
bodyDoc.style.backgroundImage = 'url(./image/adv.jpg)';

// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
books[3].querySelector.textContent = 'Книга 3. this и Прототипы Объектов';

// Удалить рекламу со страницы
bannerAdv.remove();


// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)

// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
books[2].append('newChapter');
newChapter.textContent = 'Глава 8: За пределами ES6';