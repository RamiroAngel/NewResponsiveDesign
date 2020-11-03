window.onload = function(){
    //Function to validate name with blur and clear the text using focus:
document.getElementById('fullName').addEventListener('blur', valFullName);
function valFullName(){
    var name = document.getElementById('fullName').value;
    var validName = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/;
    console.log(name);
    if(name.length > 6 && name.match(validName)){
        document.getElementById('spanName').textContent = 'Approved';
        document.getElementById('spanName').className = 'approvedText';
        return name;
    }else{
        document.getElementById('spanName').textContent = 'Not Approved';
        document.getElementById('spanName').className = 'errorText';
    }
}
document.getElementById('fullName').addEventListener('focus', cleanName);
function cleanName(){
    document.getElementById('spanName').className = 'removedText';
}
    //Function to validate mail with blur and clear the text using focus:
document.getElementById("email").addEventListener('blur', valEmail);
function valEmail(){
    var email = document.getElementById('email').value;
    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validEmail)){
        document.getElementById('spanEmail').textContent = 'Approved';
        document.getElementById('spanEmail').className = 'approvedText';
        return name;
    }else{
        document.getElementById('spanEmail').textContent = 'Not Approved'
        document.getElementById('spanEmail').className = 'errorText';
    }
}
document.getElementById('email').addEventListener('focus', cleanEmail);
function cleanEmail(){
    document.getElementById('spanEmail').className = 'removedText';
}
}