const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();

})
function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();


    if (usernameVal === '') {
        setError(username, 'username is required');
    }
    else {
        setSuccess(username);
    }

    if (emailVal === '') {
        setError(email, 'email is required');
    }
    else if (!isEmail(emailVal)) {
        setError(email, "please enter a valid email");
    }
    else {
        setSuccess(email);
    }

    if (passwordVal === '') {
        setError(password, "password is required");
    }
    else if (passwordVal.length < 8) {
        setError(password, "password must be atleast 8 characters");
    }
    else {
        setSuccess(password);
    }
    if (cpasswordVal === '') {
        setError(cpassword, "confirm password is required");
    }
    else if (cpasswordVal !== passwordVal) {
        setError(cpassword, "password does not match");

    }
    else {
        setSuccess(cpassword);
    }

}
function setError(element, message) {
    const inputs = element.parentElement;
    const errorElement = inputs.querySelector('.error')
    errorElement.innerText = message;
    inputs.classList.add('error')
    inputs.classList.remove('success')
}
function setSuccess(element) {
    const inputs = element.parentElement;
    const errorElement = inputs.querySelector('.error')
    errorElement.innerText = '';
    inputs.classList.add('success')
    inputs.classList.remove('error')
}
function isEmail(email){
    return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
