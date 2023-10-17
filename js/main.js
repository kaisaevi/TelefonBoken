const inputName = document.querySelector('#add-name');
const inputNumber = document.querySelector('#add-mobile-number');

const errorMessage = document.querySelector('#error-message');
const addBtn = document.querySelector('#add-contact-btn');
const removeListBtn = document.querySelector('#remove-contactlist-btn');
const contactList = document.querySelector('#contact-list');

const inputContactName = inputName.value;
const inputContactNumber = inputNumber.value;

//Funktion för att radera hela kontaktlistan
removeListBtn.addEventListener('click', function(){
    contactList.innerHTML = "";
});
//Funktion för error-meddelandet
function errorController(inputContactName, inputContactNumber) {
    if (inputName.value.trim() === "" || isNaN(inputNumber.value) || inputNumber.value.trim() === "") {
                errorMessage.style.display = "block";
                return true;
            } else {
                errorMessage.style.display = "none";
                return false;
    }
};
//Funktion för ändra-knappen
function changeContact(event){
        if (event.target.getAttribute('knappState') === 'Ändra') {
            event.target.setAttribute('knappState', 'Spara');
            const divItem = event.target.parentNode.querySelector('.divItem');
            const info = divItem.innerHTML;
            const infoArray = info.split(" ");
            const number = infoArray[3];
            const name = infoArray[1].slice(0, -1);

            const nameInput = document.createElement('input');
            nameInput.type = 'text';
            nameInput.value = name;
            nameInput.className = 'nameInput';
    
            const numberInput = document.createElement('input');
            numberInput.type = 'text';
            numberInput.value = number;
            numberInput.className = 'numberInput';

            divItem.innerHTML = '';
            divItem.append(nameInput, numberInput);

        } else {
            event.target.setAttribute('knappState', 'Ändra');
            const divItem = event.target.parentNode.querySelector('.divItem');
            const nameInput = divItem.querySelector('.nameInput');
            const numberInput = divItem.querySelector('.numberInput');
            const name = nameInput.value;
            const number = numberInput.value;
            if (name === "" || number === "" || isNaN(numberInput.value)) {
                const emptyValueMessage = document.createElement('div');
                emptyValueMessage.textContent = "Du kan inte skapa tomma kontakt eller ange ogiltiga nummer.";
                emptyValueMessage.setAttribute('id', 'invalid-value-message');
                divItem.appendChild(emptyValueMessage);
                event.target.setAttribute('knappState', 'Spara');
            } else {
                divItem.innerHTML = `Namn: ${name}, Nummer: ${number}`;
            }
        }
    };
//Funktion för att radera en specifik kontakt
function deleteContact(event) {
    event.target.parentNode.parentNode.remove(); 
}

//Funktion för att kunna lägga till en kontakt i listan
function addContactToList() {
    if (errorController()) {
        return;
    }
    const contactItem = document.createElement('li');
    const container = document.createElement('div');
    const item = document.createElement('div');
    item.className = 'divItem';
    
    const inputContactName = inputName.value;
    const inputContactNumber = inputNumber.value;

    const changeBtn = document.createElement('button');
    changeBtn.textContent = 'Ändra';
    changeBtn.setAttribute('knappState', 'Ändra');
    
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Radera';

    const contactInfo = `Namn: ${inputContactName}, Nummer: ${inputContactNumber}`;
    item.textContent = contactInfo;
    
    container.append(item, changeBtn, removeBtn);
    contactItem.append(container);
    contactList.append(contactItem);

    const hr = document.createElement('hr');
    contactList.append(hr);

    //Lägger till function för ändra-knappen
    changeBtn.addEventListener('click', changeContact);

    //Lägger till function för radera-knappen
    removeBtn.addEventListener('click', deleteContact);

    //Tömmer inputfälten när användaren har lagt till en kontakt 
    inputName.value = '';
    inputNumber.value = '';
};
//Lägger till function för läggtillkontakt-knappen
addBtn.addEventListener('click', addContactToList);
