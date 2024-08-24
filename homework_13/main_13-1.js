const background = document.createElement("div");
background.className = "background";
document.body.appendChild(background);
const containerBackground = document.querySelector('.background');

const newForm = document.createElement("form");
newForm.className = "form";
containerBackground.appendChild(newForm);
const form = document.querySelector('.form');


const newDiv = document.createElement("div");
newDiv.className = "form_block";
form.appendChild(newDiv);
const formBlock = document.querySelector('.form_block');


const title = document.createElement("h1");
formBlock.appendChild(title);
title.className = 'form_block-title';
title.textContent = 'We would like to help you';


const name = document.createElement("input");
form.appendChild(name);
name.className = "form_input";
name.id = 'name';
name.placeholder = 'Name';
name.required = true;

const message = document.createElement("input");
form.appendChild(message);
message.className = "form_input form_input-message";
message.id = 'message';
message.placeholder = 'Message';
message.required = true;

const subTitle = document.createElement('h2');
form.appendChild(subTitle);
subTitle.className = 'form_title';
subTitle.textContent = 'How to answer you?';


const phone = document.createElement("input");
form.appendChild(phone);
phone.className = "form_input";
phone.id = 'phone';
phone.placeholder = 'Phone number';
phone.required = true;


const email = document.createElement("input");
form.appendChild(email);
email.className = "form_input";
email.id = 'email';
email.placeholder = 'Email';
email.required = true;


const buttonSubmit = document.createElement("button");
form.appendChild(buttonSubmit);
buttonSubmit.className = "form_send";
buttonSubmit.textContent = 'Send message';


function validInput(event) {
    const incomingEvent = event.target
    const incomingClass = incomingEvent.id;
    const incomingValue = incomingEvent.value;
    switch (incomingClass) {
        case 'name':
            if (incomingValue.trim() === '') {
                incomingEvent.setCustomValidity('Заполните это поле.')
            }else {
                incomingEvent.setCustomValidity('')
            }
            break
        case 'message':
            if (incomingValue.length < 5) {
                incomingEvent.setCustomValidity('Поле должно содержать не менее 5 символов.')
            }else {
                incomingEvent.setCustomValidity('')
            }
            break
        case 'phone':
            const phonePattern = /^\+380[0-9]{9}$/;
            if (!phonePattern.test(phone.value)) {
                phone.setCustomValidity('Номер телефона должен быть в формате +380XXXXXXXXX.');
            } else {
                phone.setCustomValidity('');
            }
            break
        case 'email':
            if (!incomingValue.includes('@')) {
                email.setCustomValidity('Эмейл должен содержать "@".');
            } else if (!incomingValue.endsWith('.com')) {
                email.setCustomValidity('Эмпйл должен заканчиваться на ".com".');
            } else {
                email.setCustomValidity('');
            }
            break
    }
}

form.addEventListener('input', validInput);
form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
        event.preventDefault();
    }else {
        event.preventDefault();
        const userData = {
            name: name.value,
            message: message.value,
            phone: phone.value,
            email: email.value
        };
        console.log('User Data:', userData);
    }
});
