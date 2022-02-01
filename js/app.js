//get the desire elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

})

//checking the inputs
const checkInputs = () => {

    //get inputs from value
    const userNameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    //validate the username 

    if(userNameValue === '') {
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank');
    }
    else {
         setSuccessFor(username);
    }

    //validate the email

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid')
    } else {
        setSuccessFor(email)
    }

    //validate the password

    if(passwordValue === '') {
        setErrorFor( password , 'Password cannot be blank')
    }
    else {
        setSuccessFor(password)
    }

    //validate the password2 field

    if(passwordValue  !==  password2Value) {
        setErrorFor(password2, 'Password does not match')
    } else {
        setSuccessFor(password2)
    }

    
    

}

//error message for input boxes

const setErrorFor = (input, message) => {
    const formControl = input.parentElement; //form control
    const small = formControl.querySelector('small');

    //add error message inside small 
    small.innerText = message;

    //add error class 
    formControl.className = 'form-control error';
}

//success message for input boxes.

const setSuccessFor = (input) => {
    const formControl = input.parentElement;

    //add success class
    formControl.className = 'form-control success';
}

//regex for validating email from.

const isEmail = email => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}




