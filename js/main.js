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
    let item = document.createElement('div');
    
    let inputContactName = inputName.value;
    let inputContactNumber = inputNumber.value;

    let changeBtn = document.createElement('button');
    changeBtn.textContent = 'Ändra';
    
    let removeBtn = document.createElement('button');
    removeBtn.textContent = 'Radera';

    let contactInfo = `Namn: ${inputContactName}, Nummer: ${inputContactNumber}`;
    item.textContent = contactInfo;
    
    container.append(item, changeBtn, removeBtn);
    contactItem.append(container);
    contactList.append(contactItem);

    //Function för ändra-knappen
    changeBtn.addEventListener('click', function () {
        let nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.value = inputContactName;

        let numberInput = document.createElement('input');
        numberInput.type = 'text';
        numberInput.value = inputContactNumber;

        item.innerHTML = '';
        item.appendChild(nameInput);
        item.appendChild(numberInput);

        nameInput.addEventListener('blur', function () {
            inputContactName = nameInput.value;
            item.innerHTML = `Namn: ${inputContactName}, Nummer: ${inputContactNumber}`;
        });

        numberInput.addEventListener('blur', function () {
            inputContactNumber = numberInput.value;
            item.innerHTML = `Namn: ${inputContactName}, Nummer: ${inputContactNumber}`;
        });
    });
}

addBtn.addEventListener('click', addContactToList);
