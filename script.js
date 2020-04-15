'use strict';

const books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book'),
    bodyDoc = document.querySelector('body'),
    liTwo = book[0].querySelectorAll('li'),
    liFive = book[5].querySelectorAll('li'),
    bannerAdv = document.querySelector('.adv'),
    newChapter = document.createElement('li');
    
    // Восстановить порядок книг.

book[0].before(book[1]);
book[5].after(book[2]);
book[5].before(book[3]);

// Заменить картинку заднего фона на другую из папки image
bodyDoc.style.backgroundImage = 'url(./image/adv.jpg)';

// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
book[3].querySelector.textContent = 'Книга 3. this и Прототипы Объектов';

// Удалить рекламу со страницы
bannerAdv.remove();

// Порядок во второй главе
liTwo[7].after(liTwo[2]);
liTwo[3].after(liTwo[6]);
liTwo[6].after(liTwo[8]);
liTwo[9].before(liTwo[7]);
liTwo[9].after(liTwo[2]);

// Порядок в пятой главе
liFive[1].after(liFive[9]);
liFive[4].after(liFive[2]);
liFive[8].before(liFive[5]);

// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
book[2].append('newChapter');
newChapter.textContent = 'Глава 8: За пределами ES6';