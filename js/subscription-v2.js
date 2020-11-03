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
                    document.getElementById('spanEmail').textContent = 'Not Approved';
                    document.getElementById('spanEmail').className = 'errorText';
                }
            }
    document.getElementById('email').addEventListener('focus', cleanEmail);
    function cleanEmail(){
        document.getElementById('spanEmail').className = 'removedText';
    }
        //Function to validate password with blur and clear the text using focus:
    document.getElementById('password').addEventListener('blur', valPassword);
    function valPassword(){
        var password = document.getElementById('password').value;
        var validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
                if (password.match(validPassword)){
                    document.getElementById('spanPassword').textContent = 'Approved';
                    document.getElementById('spanPassword').className = 'approvedText';
                    return name;
                }else{
                    document.getElementById('spanPassword').textContent = 'Not Approved';
                    document.getElementById('spanPassword').className = 'errorText';
                }
            }
    document.getElementById('password').addEventListener('focus', cleanPassword);
    function cleanPassword(){
        document.getElementById('spanPassword').className = 'removedText';
    }
        //Function to validate passwords are the same:
    document.getElementById('repeatPassword').addEventListener('blur', valRepeatPassword);
    function valRepeatPassword(){
            var password = document.getElementById('password').value;
            var repeatPassword = document.getElementById('repeatPassword').value;
                if (document.getElementById('password').value === document.getElementById('repeatPassword').value){
                    document.getElementById('spanRepeatPassword').textContent = 'Approved';
                    document.getElementById('spanRepeatPassword').className = 'approvedText';
                }else{
                    document.getElementById('spanRepeatPassword').textContent = 'Not Approved';
                    document.getElementById('spanRepeatPassword').className = 'errorText';
                }
            }
    document.getElementById('repeatPassword').addEventListener('focus', cleanRepeatPassword);
    function cleanRepeatPassword(){
        document.getElementById('spanRepeatPassword').className = 'removedText';
    }
        //Function to validate age with blur and clear the text using focus:
    document.getElementById('age').addEventListener('blur', valAge);
    function valAge(){
        var age = document.getElementById('age').value;
        var validAge = /^(0|[1-9]\d*)$/;
            if (age.match(validAge) && age >= 18){
                document.getElementById('spanAge').textContent = 'Approved';
                document.getElementById('spanAge').className = 'approvedText';
            }else{
                document.getElementById('spanAge').textContent = 'Not Approved';
                document.getElementById('spanAge').className = 'errorText';
            }
        }
        document.getElementById('age').addEventListener('focus', cleanAge);
        function cleanAge(){
            document.getElementById('spanAge').className = 'removedText';
    }
    //Function to validate phone number with blur and clear the text using focus:
    document.getElementById('phone').addEventListener('blur', valPhone);
    function valPhone(){
        var phone = document.getElementById('phone').value;
        var validPhone = /^(0|[1-9]\d*)$/;
            if (phone.match(validPhone) && phone.length >= 7){
                document.getElementById('spanPhone').textContent = 'Approved';
                document.getElementById('spanPhone').className = 'approvedText';
            }else{
                document.getElementById('spanPhone').textContent = 'Not Approved';
                document.getElementById('spanPhone').className = 'errorText';
            }
        }
        document.getElementById('phone').addEventListener('focus', cleanPhone);
        function cleanPhone(){
            document.getElementById('spanPhone').className = 'removedText';
    }
    //Function to validate address with blur and clear the text using focus:
    document.getElementById('address').addEventListener('blur', valAddress);
    function valAddress(){
        var address = document.getElementById('address').value;
        var validAddress = /^[a-zA-Z]+(?:\s[0-9]+)+$/;
            if (address.match(validAddress) && address.length >= 5){
                document.getElementById('spanAddress').textContent = 'Approved';
                document.getElementById('spanAddress').className = 'approvedText';
            }else{
                document.getElementById('spanAddress').textContent = 'Not Approved';
                document.getElementById('spanAddress').className = 'errorText';
            }
        }
        document.getElementById('address').addEventListener('focus', cleanAddress);
        function cleanAddress(){
            document.getElementById('spanAddress').className = 'removedText';
    }
    //Function to validate city with blur and clear the text using focus:
    document.getElementById('city').addEventListener('blur', valCity);
    function valCity(){
        var city = document.getElementById('city').value;
        var validCity = /^[a-zA-Z]+$/;
            if (city.match(validCity) && city.length >= 3){
                document.getElementById('spanCity').textContent = 'Approved';
                document.getElementById('spanCity').className = 'approvedText';
            }else{
                document.getElementById('spanCity').textContent = 'Not Approved';
                document.getElementById('spanCity').className = 'errorText';
            }
        }
        document.getElementById('city').addEventListener('focus', cleanAddress);
        function cleanAddress(){
            document.getElementById('spanCity').className = 'removedText';
    }
    //Function to validate zip code with blur and clear the text using focus:
    document.getElementById('zipCode').addEventListener('blur', valZipCode);
    function valZipCode(){
        var zipCode = document.getElementById('zipCode').value;
        var validZipCode = /^(0|[1-9]\d*)$/;
            if (zipCode.match(validZipCode) && zipCode.length >= 3){
                document.getElementById('spanZipCode').textContent = 'Approved';
                document.getElementById('spanZipCode').className = 'approvedText';
            }else{
                document.getElementById('spanZipCode').textContent = 'Not Approved';
                document.getElementById('spanZipCode').className = 'errorText';
            }
        }
        document.getElementById('zipCode').addEventListener('focus', cleanZipCode);
        function cleanZipCode(){
            document.getElementById('spanZipCode').className = 'removedText';
    }
    //Function to validate ID code with blur and clear the text using focus:
    document.getElementById('id').addEventListener('blur', valId);
    function valId(){
        var id = document.getElementById('id').value;
        var validId = /^(0|[1-9]\d*)$/;
            if (id.match(validId) && id.length >= 7 && id.length <= 8){
                document.getElementById('spanId').textContent = 'Approved';
                document.getElementById('spanId').className = 'approvedText';
            }else{
                document.getElementById('spanId').textContent = 'Not Approved';
                document.getElementById('spanId').className = 'errorText';
            }
        }
        document.getElementById('id').addEventListener('focus', cleanId);
        function cleanId(){
            document.getElementById('spanId').className = 'removedText';
    }
}