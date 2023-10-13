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
    changeBtn.style.height = '30px';
    changeBtn.style.width = '100px';
    changeBtn.innerText = 'Ändra';
    let removeBtn = document.createElement('button');
    removeBtn.style.height = '30px';
    removeBtn.style.width = '100px';
    removeBtn.innerText = 'Radera';

    let contactInfo = `Namn: ${inputContactName}, Nummer: ${inputContactNumber}` + changeBtn + removeBtn;
    inputItem.value = contactInfo;
    
    container.append(inputItem);
    container.append(changeBtn, removeBtn);
    contactItem.append(container);
    contactList.append(contactItem);
}

addBtn.addEventListener('click', addContactToList);


//Function för att kontrollera error-meddelandet
// function inputWatcher(inputContactName, inputContactNumber) {

//     if (!isNaN(inputContactNumber) || inputContactName.trim() === "") {
//         errorMessage.style.display = "block";
//         return true;
//     } else {
//         errorMessage.style.display = "none";
//         return false;
//     }
// };

// function addContactToList() {

//     if (!inputWatcher(inputContactName, inputContactNumber)) {
//         let contactItem = document.createElement('input');
//         contactItem.innerHTML = `Namn: ${inputContactName}, Nummer: ${inputContactNumber}`;
//         contactList.append(contactItem);
//     }
//     addBtn.addEventListener('click', addContactToList);
// }


//Gör så att det går att trycka på knappen för att lägga till en kontakt
// addBtn.addEventListener('click', addContactToList);

//Gör så att man kan trycka på knappen för att radera hela kontaktlistan

//let nameInput = document.createElement('input');
// nameInput.type = 'text';
// nameInput.value = inputContactName;

// let numberInput = document.createElement('input');
// numberInput.type = 'text';
// numberInput.value = inputContactNumber;

// let nameItem = document.createElement('li');
// nameItem.appendChild(nameInput);

// let numberItem = document.createElement('li');
// numberItem.appendChild(numberInput);

// contactList.appendChild(nameItem);
// contactList.appendChild(numberItem);