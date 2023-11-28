const form = document.getElementById("form");
const Username = document.getElementById("Username");
const Email = document.getElementById("Email");
const Password = document.getElementById("Password");
const Password1 = document.getElementById("Password1");

form.addEventListener('submit',e=>{
    e.preventDefault();
    checkInputs();
});
function checkInputs(){
    const UsernameValue = Username.Value.trim();
    const EmailValue = Email.Value.trim();
    const PasswordValue = Password.Value.trim();
    const Password1Value = Password1.Value.trim();
}
 if(UsernameValue===""){
    setErrorFor(Username,"username cannot be blank");
}
 else{
    setSuccessFor(Username);
}

if(EmailValue===""){
    setErrorFor(Email,"email cannot be blank");
}
else if(!isemail(EmailValue)){
    setErrorFor(Email("not a valid email"));
}
else{
    setSuccessFor(Email);
}

if(PasswordValue===""){
    setErrorFor(Password,"password cannot be blank");
}
else{
    setSuccessFor(Password);
}

if(Password1Value===""){
    setErrorFor(Password1,"password cannot be blank");
}
else if(PasswordValue!==Password1Value){
    setErrorFor(Password1,"passwords does not match");
}
else{
    setSuccessFor(Password1);
}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
function isemail(Email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


