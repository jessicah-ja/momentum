const greetForm = document.querySelector('.js-greetForm'),
    greetInput = greetForm.querySelector('input'),
    greeting = document.querySelector('.js-greeting');

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = greetInput.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    greetForm.classList.add(SHOWING_CN);
    greetForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    greetForm.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}!`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if( !currentUser ) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function greetInit() {
    loadName();
}

greetInit();