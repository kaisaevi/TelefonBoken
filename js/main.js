let inputName = document.querySelector('#add-name');
let inputNumber = document.querySelector('#add-mobile-number');

let errorMessage = document.querySelector('#error-message');
let addBtn = document.querySelector('#add-contact-btn');
let removeListBtn = document.querySelector('#remove-contaktlist-btn');
let contactList = document.querySelector('#contact-list');

function addContactToList() {
    let inputContactName = inputName.value;
    let inputContactNumber = inputNumber.value;

    if (!inputWatcher()) {
        let contactItem = document.createElement('li');
        contactItem.innerHTML = `Namn: ${inputContactName}, Nummer: ${inputContactNumber}`;
        contactList.append(contactItem);
    }
}

//Function för att kontrollera error-meddelandet
function inputWatcher() {
    if (!isNaN(inputContactNumber.value) || inputContactName.value.trim() === "") {
        errorMessage.style.display = "block";
        return true;
    } else {
        errorMessage.style.display = "none";
        return false;
    }
};
inputName.addEventListener('input', inputWatcher);
inputNumber.addEventListener('input', inputWatcher);


//Gör så att det går att trycka på knappen för att lägga till en kontakt
// addBtn.addEventListener('click', addContactToList);

//Gör så att man kan trycka på knappen för att radera hela kontaktlistan
removeListBtn.addEventListener('click', function(){
    contactList.innerHTML = "";
});

