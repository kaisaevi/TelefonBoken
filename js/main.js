let inputName = document.querySelector('#add-name');
let inputNumber = document.querySelector('#add-mobile-number');

let errorMessage = document.querySelector('#error-message');
let addBtn = document.querySelector('#add-contact-btn');
let removeListBtn = document.querySelector('#remove-contactlist-btn');
let contactList = document.querySelector('#contact-list');

let inputContactName = inputName.value;
let inputContactNumber = inputNumber.value;

removeListBtn.addEventListener('click', function(){
    contactList.innerHTML = "";
});

function errorController(inputContactName, inputContactNumber) {
    if (inputName.value.trim() === "" || isNaN(inputNumber.value) || inputNumber.value.trim() === "") {
                errorMessage.style.display = "block";
                return true;
            } else {
                errorMessage.style.display = "none";
                return false;
    }
}

function addContactToList() {
    if (errorController()) {
        return;
    }

    let contactItem = document.createElement('li');
    let container = document.createElement('div');
    let inputItem = document.createElement('input');
    inputItem.type = 'text';
    
    let inputContactName = inputName.value;
    let inputContactNumber = inputNumber.value;

    let changeBtn = document.createElement('button');
    changeBtn.innerText = 'Ändra';
    
    let removeBtn = document.createElement('button');
    removeBtn.innerText = 'Radera';

    let contactInfo = `Namn: ${inputContactName}, Nummer: ${inputContactNumber}` + changeBtn + removeBtn;
    inputItem.value = contactInfo;
    
    container.append(inputItem);
    container.append(changeBtn, removeBtn);
    contactItem.append(container);
    contactList.append(contactItem);
}

addBtn.addEventListener('click', addContactToList);