'use strict';
// извлечение кнопки
const NewUser = document.querySelector('.btnadd');
// кликабельность кнопки
NewUser.addEventListener('click', newUser);
// функция для запуска полей ввода
function newUser () {
    // клонирование новой строки
    const template = document.querySelector('.newrow');
    const newrow = template.content.cloneNode(true);
    const tbody = document.querySelector('.myTable');
    const tr = newrow.querySelector('tr');
    const nameInput = newrow.querySelector('.name input');
    const emailInput = newrow.querySelector('.email input');
    const cityInput = newrow.querySelector('.city input');
    const telephoneInput = newrow.querySelector('.telephone input');
    // добавление строки в таблицу
    tbody.append(tr);
    // извлечение кнопки отмена
    const btnCancel = document.querySelector('.btncancel');
    // кликабельность кнопки и функия
    btnCancel.addEventListener('click', cancel);
    // функция для отмены введенного текста
    function cancel () {
        tbody.removeChild(tr);
    }
    // извлечение кнопки сохранить
    const saveUser = document.querySelector('.btnsave');
    // кликабельность кнопки /функция
    saveUser.addEventListener('click', save);
    // функция для сохранения
    function save () {
        const template = document.querySelector('.row1');
        const row1 = template.content.cloneNode(true);
        const tbody = document.querySelector('.myTable');
        // сохранение данных
        row1.querySelector('.name').innerText = nameInput.value;
        row1.querySelector('.email').innerText = emailInput.value;
        row1.querySelector('.city').innerText = cityInput.value;
        row1.querySelector('.telephone').innerText = telephoneInput.value;

        // извлечение кнопки для удаления введеной строки
        const tr2 = row1.querySelector('tr');
        const userDel = row1.querySelector('.deleteInfo');
        // функция для удаления строки
        userDel.addEventListener('click', delUser);
        function delUser () {
            tbody.removeChild(tr2);
        };

        tbody.append(row1);
        tbody.removeChild(tr);
    }
}
const delRowsFromBody = document.querySelector('.btndelete');
delRowsFromBody.addEventListener('click', delRows);
function delRows () {
    const tbody = document.querySelector('.myTable');
    console.log('tbody', tbody);
    const allRows = tbody.querySelectorAll('tr');
    allRows.forEach((element) => tbody.removeChild(element));
}