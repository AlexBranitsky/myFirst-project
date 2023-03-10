'use strict';
const btnAdd = document.querySelector('.btnadd');
btnAdd.addEventListener('click', addNewUser);
function addNewUser () {
    // создание новой строки
    const template = document.querySelector('.newrow');
    const newrow = template.content.cloneNode(true);
    const tbody = document.querySelector('.myTable');

    const tr = newrow.querySelector('tr');
    const nameInput = newrow.querySelector('.name input');
    const emailInput = newrow.querySelector('.email input');
    const cityInput = newrow.querySelector('.city input');
    const telephoneInput = newrow.querySelector('.telephone input');

    tbody.append(tr);

    // btn cancel
    const btnCancel = document.querySelector('.btncancel');
    btnCancel.addEventListener('click', cancel);
    function cancel () {
        tbody.removeChild(tr);
    }
    // btn save
    const btnSave = document.querySelector('.btnsave');
    btnSave.addEventListener('click', saveUser);
    function saveUser () {
        const template = document.querySelector('.row1');
        const row1 = template.content.cloneNode(true);
        const tbody = document.querySelector('.myTable');

        row1.querySelector('.name').innerText = nameInput.value;
        row1.querySelector('.email').innerText = emailInput.value;
        row1.querySelector('.city').innerText = cityInput.value;
        row1.querySelector('.telephone').innerText = telephoneInput.value;
        
        const tr2 = row1.querySelector('tr');
        row1.querySelector('.deleteInfo').addEventListener('click', () => {
            tbody.removeChild(tr2);
        });

        tbody.append(row1);
        tbody.removeChild(tr);
    };
    
}
const btnDelUsers = document.querySelector('.btndelete');
btnDelUsers.addEventListener('click', deleteRowsFromBody);
function deleteRowsFromBody () {
    const tbody = document.querySelector('.myTable');
    console.log('tbody', tbody);
    const allRows = tbody.querySelectorAll('tr');
    allRows.forEach((element) => tbody.removeChild(element));
}


