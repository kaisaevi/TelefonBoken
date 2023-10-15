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
    item.className = 'divItem';
    
    let inputContactName = inputName.value;
    let inputContactNumber = inputNumber.value;

    let changeBtn = document.createElement('button');
    changeBtn.textContent = 'Ändra';
    changeBtn.setAttribute('knappState', 'Ändra');
    
    let removeBtn = document.createElement('button');
    removeBtn.textContent = 'Radera';

    let contactInfo = `Namn: ${inputContactName}, Nummer: ${inputContactNumber}`;
    item.textContent = contactInfo;
    
    container.append(item, changeBtn, removeBtn);
    contactItem.append(container);
    contactList.append(contactItem);

    //Function för ändra-knappen
    changeBtn.addEventListener('click', function (e) {

        if (e.target.getAttribute('knappState') === 'Ändra') {
            e.target.setAttribute('knappState', 'Spara');
            let divItem = e.target.parentNode.querySelector('.divItem');
            let info = divItem.innerHTML;
            let infoArray = info.split(" ");
            let number = infoArray[3];
            let name = infoArray[1].slice(0, -1);

            let nameInput = document.createElement('input');
            nameInput.type = 'text';
            nameInput.value = name;
            nameInput.className = 'nameInput';
    
            let numberInput = document.createElement('input');
            numberInput.type = 'text';
            numberInput.value = number;
            numberInput.className = 'numberInput';

            item.innerHTML = '';
            item.appendChild(nameInput);
            item.appendChild(numberInput);

        } else {
            e.target.setAttribute('knappState', 'Ändra');
            let divItem = e.target.parentNode.querySelector('.divItem');
            let nameInput = divItem.querySelector('.nameInput');
            let numberInput = divItem.querySelector('.numberInput');
            let name = nameInput.value;
            let number = numberInput.value;
            divItem.innerHTML = `Namn: ${name}, Nummer: ${number}`;
        }





        // changeBtn.addEventListener('click', function () {
        //     if (inputContactName === "" || inputContactNumber === "") {
        //         let emptyValueMessage = document.createElement('div');
        //         emptyValueMessage.textContent = "Du kan inte skapa tomma kontakt.";
        //         emptyValueMessage.setAttribute('id', 'invalid-value-message');
        //         item.appendChild(emptyValueMessage);
        //     } if (isNaN(inputNumber.value)) {
        //         let invalidNumberMessage = document.createElement('div');
        //         invalidNumberMessage.textContent = "Vänligen ange ett giltigt nummer."
        //         invalidNumberMessage.setAttribute('id', 'invalid-value-message');
        //         item.appendChild(invalidNumberMessage);
        //     } else {
        //     inputContactNumber = numberInput.value;
        //     item.innerHTML = `Namn: ${inputContactName}, Nummer: ${inputContactNumber}`;
        //     }
        // });
    });
        //Function för radera-knappen
        removeBtn.addEventListener('click', function(e) {
            e.target.parentNode.parentNode.remove(); 
        });
};

addBtn.addEventListener('click', addContactToList);
