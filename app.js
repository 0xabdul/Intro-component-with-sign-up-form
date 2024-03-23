let firstname = document.getElementById('fname-valid');
let lastname = document.getElementById('lname-valid');
let email = document.getElementById('email-valid');
let password = document.getElementById('pass-valid');
let press = document.getElementById('second-btn');
let second = document.getElementById('second-wrapper');
let imgerrorone = document.getElementById('errorstateone');
let imgerrortwo = document.getElementById('errorstatetwo');
let imgerrorthree = document.getElementById('errorstatethree');
let imgerrorfour = document.getElementById('errorstatefour');
let inputfirstname = document.getElementById('first-name');
let inputlastname = document.getElementById('last-name');
let inputemail = document.getElementById('gmail');
let inputpassword = document.getElementById('passkey');
let ga = document.getElementById('ga');
press.addEventListener('click',function(e){
e.preventDefault();
let fname = inputfirstname.value;
let lname = inputlastname.value;
let emi = inputemail.value;
let pass = inputpassword.value;
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
if(fname === ""){
firstname.innerHTML = 'first name is empty';
firstname.style.color = 'red';
inputfirstname.style.borderColor = 'red';
imgerrorone.style.display = 'block';
}
else{
    firstname.innerHTML = 'corect first name';
    firstname.style.color = 'green';
    inputfirstname.style.borderColor = 'green';
    imgerrorone.style.display = 'none';
}
if(lname === ""){
    lastname.innerHTML = 'last name is empty';
    lastname.style.color = 'red';
    inputlastname.style.borderColor = 'red';
    imgerrortwo.style.display = 'block';
}
else{
    lastname.innerHTML = 'corect last name';
    lastname.style.color = 'green';
    inputlastname.style.borderColor = 'green';
    imgerrortwo.style.display = 'none';
}
if(emi === ""){
    email.innerHTML = 'Gmail is empty';
    email.style.color = 'red';
    inputemail.style.borderColor = 'red';
    imgerrorthree.style.display = 'block';
}
else if (!emailPattern.test(emi)) {
    email.innerHTML = 'invalid email';
    email.style.color = 'red';
    inputemail.style.borderColor = 'red';
    imgerrorthree.style.display = 'block';
}
else{
    email.innerHTML = 'corect Email Address';
    email.style.color = 'green';
    inputemail.style.borderColor = 'green';
    imgerrorthree.style.display = 'none';
}
if(pass === ""){
    password.innerHTML = 'password is empty';
    password.style.color = 'red';
    inputpassword.style.borderColor = 'red';
    imgerrorfour.style.display = 'block';

}
else if (!passwordPattern.test(pass)){
    password.innerHTML = 'password atleast eight characters';
    password.style.color = 'red';
    inputpassword.style.borderColor = 'red';
    imgerrorfour.style.display = 'block';
}
else{
    password.innerHTML = 'corect Password';
    password.style.color = 'green';
    inputpassword.style.borderColor = 'green';
    imgerrorfour.style.display = 'none';
    setTimeout(() => {
        location.reload();
    },2500);

}
second.style.gap = '0.1rem';
second.style.height = '25.5rem';
ga.style.top = '0.7rem';
})