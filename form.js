const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

//Check inpute of values
function checkInputs() {
    //get the values from input. trim will not allow white spaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if (usernameValue === '') {
        //show error and add to error class
        setErrorFor(username, 'Username cannot be blank')
    } else {
        setSuccessFor(username)
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid')
    }
    else {
        setSuccessFor(email)
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank')
    } else if(!isPassword(passwordValue)){
        setErrorFor(password, 'Password is not valid')
    }
    else {
        setSuccessFor(password)
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Password cannot be blank')
    } else if(passwordValue !== password2Value){
        setErrorFor(password2, 'Passwords do not match');
    }
    else {
        setSuccessFor(password2)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    // add error class
    formControl.className = 'form-control error';
    //add error message inside small
    small.innerText = message;
}

//for submit 
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
}

function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

function isPassword(password) {
    return /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);
}


//For Social Panel
const social_panel_container = document.querySelector('social-panel-container');
const close_btn = document.querySelector('close-btn') 
const floating_btn = document.querySelector('floating-btn')

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible');
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible')
})