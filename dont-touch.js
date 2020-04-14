'use strict';

// получаем все элементы в коллекцию
// потом удалить этот класс из индекса
// All - потому что ищем все одинаковые классы
const collections = document.querySelectorAll('.collection'),
    // теперь ищем элементы внутри списков
    // этот класс потом удалить из "Книга 2"
    chapters = document.querySelectorAll('.chapter');

    console.log(collections);
    console.log(chapters);

// учимся удалять элементы
// [] - здесь порядковый номер внутри chapters
// мы это удалили из DOM, но в переменной он остался
// значит, этот элемент можно поставить в другое место
chapters[0].remove();
chapters[3].remove();

// ставим элемент в другое место
// [] - тут ставим индекс той collections, в которую хотим переместить
// этот индекс можно найти в консоли: http://prntscr.com/ryl21r
// append - значит "вставить в конец родительского элемента"
// вот так: http://prntscr.com/ryl4n1
// в [] в chapters - индекс самого элемента
collections[1].append(chapters[0]);
collections[1].append(chapters[3]);

// вставляем элемент в начало родителя
// пример: http://prntscr.com/ryl8br
collections[1].prepend(chapters[5]);

// метод append и prepend можно использовать без remove()
// объекты и без него могут переместиться куда нам надо

// collections[1] мы поставили перед collections[0]
collections[0].before(collections[1]);

// chapters[0] мы поставили перед chapters[4]
chapters[4].after(chapters[0]);

// заменяем указанное значение
chapters[0].replaceWith(chapters[3]);

// таким же образом можем сами написать что-то
// вместо указанного значения
chapters[2].replaceWith('Я ТУТ ПРОГРАММИРУЮ!!!');

// клонируем элементы

// для этого создаем специальную переменную
// .cloneNode() - для клонирования выбранного элемента
// при этом текста внутри не будет: http://prntscr.com/rylprv
// добавим (true) - и элемент появился: http://prntscr.com/rylqtd
const chapterClone = chapters[5].cloneNode(true);
// и перемещаем этот элемент в пустое место
// было: http://prntscr.com/ryll1z
// стало: http://prntscr.com/rylmsq
collections[0].prepend(chapterClone);

// пример как добавить новый класс
// как выглядит: http://prntscr.com/rz2hy7
chapterClone.classList.add('book');

// меняем текст
// как выглядит: http://prntscr.com/rz2j7s
chapterClone.textContent = 'меняю текст через JS';

// как создать элемент
chapters[9].textContent = 'Привет';

// создаем HTML-тег
// этот способ затирает предыдущую разметку
// так можно удалить вообще все, что было сверстано
chapters[8].innerHTML = '<h3>Приветос!</h3>';

// лучше прямо создать элемент
// вот так

const newElem = document.createElement('li');

// добавляем новый элемент в коллекцию
collections[1].append('newElem');
//добавляем этому новому элементу текст
newElem.textContent = 'Новый элемент';
// так же можно менять классы, свойства, атрибуты и др.


// метод, который вставляет текст
// и он никогда не затирает тот текст, что есть внутри

// сначала объявляем переменную для нужного текста
// и записываем в нее нужное значение
const secondHead = document.getElementById('second-head');

// обращаемся к переменной
// этот элемент принимает два параметра:
// 1 - описание того места, в который мы можем вставить текст
// 2 - сам текст, который мы будем вставлять

// вставляем ДО нужного текста
secondHead.insertAdjacentText('beforebegin', 'beforebegin');
// вставляем ПОСЛЕ нужного текста
secondHead.insertAdjacentText('afterend', 'afterend');
// вставляем ВНУТРИ ТЕГА ДО нужного текста (после начала)
secondHead.insertAdjacentText('afterbegin', 'afterbegin');
// вставляем ВНУТРИ ТЕГА ПОСЛЕ нужного текста (перед концом)
secondHead.insertAdjacentText('beforeend', 'beforeend');

// вставляем нужный ЭЛЕМЕНТ
secondHead.insertAdjacentElement('beforebegin', chapters[0]);
secondHead.insertAdjacentElement('afterend', chapters[1]);
secondHead.insertAdjacentElement('afterbegin', chapters[2]);
secondHead.insertAdjacentElement('beforeend', chapters[3]);

// вставляем HTML-разметку
secondHead.insertAdjacentHTML('beforebegin', '<h3>beforebegin</h3>');
secondHead.insertAdjacentHTML('afterend', '<h3>afterend</h3>');
secondHead.insertAdjacentHTML('afterbegin', '<p>afterbegin</p>');
secondHead.insertAdjacentHTML('beforeend', '<p>beforeend</p>');