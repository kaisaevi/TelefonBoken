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

        changeBtn.addEventListener('click', function () {
            inputContactName = nameInput.value;
            inputContactNumber = numberInput.value;
            item.innerHTML = `Namn: ${inputContactName}, Nummer: ${inputContactNumber}`;
        });

        changeBtn.addEventListener('click', function () {
            if (inputContactName === "" || inputContactNumber === "") {
                let emptyValueMessage = document.createElement('div');
                emptyValueMessage.textContent = "Du kan inte skapa tomma kontakt.";
                emptyValueMessage.setAttribute('id', 'invalid-value-message');
                item.appendChild(emptyValueMessage);
            } if (isNaN(inputNumber.value)) {
                let invalidNumberMessage = document.createElement('div');
                invalidNumberMessage.textContent = "Vänligen ange ett giltigt nummer."
                invalidNumberMessage.setAttribute('id', 'invalid-value-message');
                item.appendChild(invalidNumberMessage);
            } else {
            inputContactNumber = numberInput.value;
            item.innerHTML = `Namn: ${inputContactName}, Nummer: ${inputContactNumber}`;
            }
        });
    });
        //Function för radera-knappen
        removeBtn.addEventListener('click', function(e) {
            e.target.parentNode.parentNode.remove(); 
        });
};

addBtn.addEventListener('click', addContactToList);
