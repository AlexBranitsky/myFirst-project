"use strict";
const button = document.querySelector('.red');
button.addEventListener('click', function () {
    alert('Вы хотите удалить таблицу?');
});
const buttonnew = document.querySelector('.green');
buttonnew.addEventListener('click', function () {
    alert('Вы хотите добавить данные?');
});