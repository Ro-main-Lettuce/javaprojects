function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add('form__message--${type}');
}

function setInputError(inputElement,message){
    inputElement.classList.add('form__input--error')
    inputElement.parentElement.querySelector('.form_input-error-message').textContent = message;

}

function clearInputError(inputElement){
    inputElement.classList.remove('form__input--error')
    inputElement.parentElement.querySelector('.form_input-error-message').textContent = '';

}

function hover(element){
    element.setAttribute9('src', 'img/updateBunny2.png');
}
function unhover(element){
    element.setAttribute('src', 'img/updateBunnyaction.png');
}
document.addEventListener('DOMContentLoaded', function() {
    var bunnyImg = document.getElementById('bunny-img');
    bunnyImg.addEventListener('mouseover', function(){
        this.src = 'img/updateBunnyaction.png';
    });
    bunnyImg.addEventListener('mouseout', function(){
        this.src = 'img/updateBunny2.png';
    });

});
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login');
    const createAccountForm = document.querySelector('#createAccount');

    document.querySelector('#linkCreateAccount').addEventListener('click',e => {
        e.preventDefault();
        loginForm.classList.add('form--hidden');
        createAccountForm.classList.remove('form--hidden');
    });

    document.querySelector('#linklogin').addEventListener('click', e => {
        e.preventDefault();
        loginForm.classList.remove('form--hidden');
        createAccountForm.classList.add('form--hidden');
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        //perfrom your ajax/fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });
document.querySelectorAll('.form__input').forEach(inputElement => {
    inputElement.addEventListener('blur', e => {
        if (e.target.id === 'signupUsername' && e.target.value.length > 0 && e.target.value.length < 10) {
            setInputError(inputElement, 'Username must be at least 10 characters in length');
        }
    });
});
    

    document.querySelectorAll('.form_input').forEach(inputElement => {
        inputElement.addEventListener('blur', e => {
            if(e.target.id === 'signupUsername' && e.target.value.length > 0 && e.target.value.length < 10){
                setInputError(inputElement, 'Username must be at least 10 characters in length');
            }
        });
        inputElement.addEventListener('input', e => {
            clearInputError(inputElement);
        });
    });
   
});
