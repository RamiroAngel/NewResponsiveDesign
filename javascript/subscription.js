// Variables //
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
var submit = document.getElementsByClassName('submitButton');
// Blur Event //
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
// Focus Event //
fullName.addEventListener('focus', focusFullName);
email.addEventListener('focus', focusEmail);
password.addEventListener('focus', focusPassword);
repeatPassword.addEventListener('focus', focusRepeatPassword);
age.addEventListener('focus', focusAge);
phone.addEventListener('focus', focusPhone);
address.addEventListener('focus', focusAddress);
city.addEventListener('focus', focusCity);
zipCode.addEventListener('focus', focusZipCode);
id.addEventListener('focus', focusId);


/* 

            //  I could write the functions through the logic of "If and Else":  //

    function veriFullName(){
            // if this fails, then show the following alert //
        alert('Must be more than 6 letters and separated by a space between Name & Last Name.');
    }
    function veriEmail(){
            // if this fails, then show the following alert //
        alert('Must be a valid email format.');
    }
    function veriPassword(){
            // if this fails, then show the following alert //
        alert('At least 8 characters, consisting of letters and numbers.');
    }
    function veriRepeatPassword(){
            // if this fails, then show the following alert //
        alert('Repeat the password chosen.');
    }
    function veriAge(){
            // if this fails, then show the following alert //
        alert('Must be an integer number and iqual or greatear than 18.');
    }
    function veriPhone(){
            // if this fails, then show the following alert //
        alert('At least a 7 digit number, without spaces nor symbols nor parenthesis.');
    }
    function veriAddress(){
            // if this fails, then show the following alert //
        alert('At least 5 characters, consisting of letters and numbers, separated by a space between.');
    }
    function veriCity(){
            // if this fails, then show the following alert //
        alert('At least 3 characters.');
    }
    function veriZipCode(){
            // if this fails, then show the following alert //
        alert('At least 3 characters.');
    }
    function veriId(){
            // if this fails, then show the following alert //
        alert('Number between 7 and 8 digits.');
    } 

*/


            // But I'll be trying to make it works with the following way: //

function veriFullName(){
    a = document.getElementById("fullName").value;
    if (a.indexOf(" ") === -1 || a.length < 7){
        document.querySelector(".advFullName").style.display = "block";
        return ("Error: check the field conditions");
    } else {
        return a;
    }
}
function veriEmail(){
    a = document.getElementById("email").value;
    if (a.search(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) === -1){
        document.querySelector(".advEmail").style.display = "block";
        return ("Error: check the field conditions");
    } else {
        return a;
    }
}
function veriPassword(){
    a = document.getElementById("password").value;
    if (/[a-zA-Z]/.test(a) === false || /\s/.test(a) === true || /\d/.test(a) === false || a.length < 8){
        document.querySelector(".advPassword").style.display = "block";
        return ("Error: check the field conditions");
    } else {
        return a;
    }
}
function veriRepeatPassword(){
    a = document.getElementById("password").value;
    b = document.getElementById("repeatPassword").value;
    if (a !== b){
        document.querySelector(".advRepeatPassword").style.display = "block";
        return ("Error: check the field conditions");
    } else {
        return a;
    }
}
function veriAge(){
    a = document.getElementById("age").value;
    if (a < 18 || Number.isInteger(Number(a)) === false){
        document.querySelector(".advAge").style.display = "block";
        return ("Error: check the field conditions");
    } else {
        return a;
    }
}
function veriPhone(){
    a = document.getElementById("phone").value;
    if (a.length < 7 || /[a-zA-Z]/.test(a) === true){
        document.querySelector(".advPhone").style.display = "block";
        return ("Error: check the field conditions");
    } else {
        return a;
    }
}
function veriAddress(){
    a = document.getElementById("address").value;
    if (a.length < 7 || /\s/.test(a) === false || /\d/.test(a) === false || /[a-zA-Z]/.test(a) === false ){
        document.querySelector(".advAddress").style.display = "block";
        return ("Error: check the field conditions");
    } else {
        return a;
    }
}
function veriCity(){
    a = document.getElementById("city").value;
    if (a.length < 3){
        document.querySelector(".advCity").style.display = "block";
        return ("Error: check the field conditions");
    } else {
        return a;
    }
}
function veriZipCode(){
    a = document.getElementById("zipCode").value;
    if (a.length < 3){
        document.querySelector(".advZipCode").style.display = "block";
        return ("Error: check the field conditions");
    } else {
        return a;
    }
}
function veriId(){
    a = document.getElementById("id").value;
    if (a.length < 7 || a.length > 8){
        document.querySelector(".advId").style.display = "block";
        return ("Error: check the field conditions");
    } else {
        return a;
    }
}

function focusFullName(){
    document.querySelector(".advFullName").style.display = "none";
}
function focusEmail(){
    document.querySelector(".advEmail").style.display = "none";
}
function focusPassword(){
    document.querySelector(".advPassword").style.display = "none";
}
function focusRepeatPassword(){
    document.querySelector(".advRepeatPassword").style.display = "none";
}
function focusAge(){
    document.querySelector(".advAge").style.display = "none";
}
function focusPhone(){
    document.querySelector(".advPhone").style.display = "none";
}
function focusAddress(){
    document.querySelector(".advAddress").style.display = "none";
}
function focusCity(){
    document.querySelector(".advCity").style.display = "none";
}
function focusZipCode(){
    document.querySelector(".advZipCode").style.display = "none";
}
function focusId(){
    document.querySelector(".advId").style.display = "none";
}


//Onclick function
submitButton.onclick = function(){
    alert ("Full Name " + veriFullName() +
           " - Email " + veriEmail() +
           " - Password " + veriPassword() +
           " - Repeat the Password " + veriRepeatPassword() +
           " - Age " + veriAge() +
           " - Phone Number " + veriPhone() +
           " - Address" + veriAddress() +
           " - City " + veriCity() +
           " - Zip Code " + veriZipCode() +
           " - ID " +veriId());
}