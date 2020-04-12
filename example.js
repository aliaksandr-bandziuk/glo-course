'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function startGame() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    function answer() {
        let count = prompt('Угадай число от 1 до 100');

        if (count === null) {
            alert('Игра окончена! Спасибо за игру');
            return; // это останавливает игру
        }

        if (!isNumber(count)) {
            alert('Введите число!');
            answer();
        }

        if (+count > randomNumber) {
            alert('Загаданное число меньше');
            answer();
        }

        if (+count < randomNumber) {
            alert('Загаданное число больше');
            answer();
        }

        if (+count === randomNumber) {
            alert('Бинго! Ты угадал число ' + randomNumber + '!');
        }
       
    }
    answer();
}

startGame(); 
