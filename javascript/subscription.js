var fullName = document.getElementById('fullName');
var email = document.getElementById('email');
var password = document.getElementById('password');
var repeatPassword = document.getElementById('repeatPassword');
var age = document.getElementById('age');
var phone = document.getElementById('phone');
var address = document.getElementById('address');
var city = document.getElementById('city');
var zipCode = document.getElementById('zipCode');
var id = document.getElementById('id');
fullName.addEventListener('blur', veriFullName);
email.addEventListener('blur', veriEmail);
password.addEventListener('blur', veriPassword);
repeatPassword.addEventListener('blur', veriRepeatPassword);
age.addEventListener('blur', veriAge);
phone.addEventListener('blur', veriPhone);
address.addEventListener('blur', veriAddress);
city.addEventListener('blur', veriCity);
zipCode.addEventListener('blur', veriZipCode);
id.addEventListener('blur', veriId);

function veriFullName(){
    /*if this fails, then show the following alert*/
    alert('Must be more than 6 letters and separated by a space between Name & Last Name.');
}

function veriEmail(){
    /*if this fails, then show the following alert*/
    alert('Must be a valid email format.');
}

function veriPassword(){
    /*if this fails, then show the following alert*/
    alert('At least 8 characters, consisting of letters and numbers.');
}

function veriRepeatPassword(){
    /*if this fails, then show the following alert*/
    alert('Repeat the password chosen.');
}

function veriAge(){
    /*if this fails, then show the following alert*/
    alert('Must be an integer number and iqual or greatear than 18.');
}

function veriPhone(){
    /*if this fails, then show the following alert*/
    alert('At least a 7 digit number, without spaces nor symbols nor parenthesis.');
}

function veriAddress(){
    /*if this fails, then show the following alert*/
    alert('At least 5 characters, consisting of letters and numbers, separated by a space between.');
}

function veriCity(){
    /*if this fails, then show the following alert*/
    alert('At least 3 characters.');
}

function veriZipCode(){
    /*if this fails, then show the following alert*/
    alert('At least 3 characters.');
}

function veriId(){
    /*if this fails, then show the following alert*/
    alert('Number between 7 and 8 digits.');
}
