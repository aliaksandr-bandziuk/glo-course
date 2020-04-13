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

// продолжить с 11:21