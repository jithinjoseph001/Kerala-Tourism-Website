let inputEmail = document.getElementById("inputEmail");
let inputpassword = document.getElementById("inputPassword");

let error = document.getElementById("error")

function validate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/

    // email
    
    if(regexp.test(inputEmail.value)){
        error.innerHTML="Valid";
        error.style.color= "green";
        return true;
    }
    

    // password
 
   else if (inputpassword.value == "") {
        inputpassword.style.background = 'Yellow';
        error = "You didn't enter a password.\n";
        alert(error);
        return false;
 
    } else if ((inputpassword.value.length < 7) || (inputpassword.value.length > 15)) {
        error = "The password is the wrong length. \n";
        inputpassword.style.background = 'red';
        alert(error);
        return false;
 
    } else if (regexp.test(inputpassword.value)) {
        error = "The password contains illegal characters.\n";
        inputpassword.style.background = 'red';
        alert(error);
        return false;
 
    } else if ( (inputpassword.value.search(/[a-zA-Z]+/)==-1) || (inputpassword.value.search(/[0-9]+/)==-1) ) {
        error = "The password must contain at least one numeral.\n";
        inputpassword.style.background = 'red';
        alert(error);
        return false;
 
    } else {
        inputpassword.style.background = 'White';
        error.innerHTML= "Invalid";
        error.style.color= "red";
        return false;
        
    }
   return true;
    
}


// signup
let inputAddress = document.getElementById(inputAddress);
let inputAddress2= document.getElementById(inputAddress2); 
let inputCity = document.getElementById(inputCity);
let inputZip = document.getElementById(inputZip);


function validateSignup(){

    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    var pat1=/^\d{6}$/;

    if(inputEmail.value==""){
            alert("Email should not empty")
            return false;
    }
    if(regexp.test(inputEmail.value)){
        error.innerHTML="Valid";
        error.style.color= "green";
        return true;
    }

    

     if (inputpassword.value == "") {
        inputpassword.style.background = 'Yellow';
        error = "You didn't enter a password.\n";
        alert(error);
        return false;
 
    } 
     if ((inputpassword.value.length < 7) || (inputpassword.value.length > 15)) {
        error = "The password is the wrong length. \n";
        inputpassword.style.background = 'red';
        alert(error);
        return false;
 
    }  if (regexp.test(inputpassword.value)) {
        error = "The password contains illegal characters.\n";
        inputpassword.style.background = 'red';
        alert(error);
        return false;
 
    }  if ( (inputpassword.value.search(/[a-zA-Z]+/)==-1) || (inputpassword.value.search(/[0-9]+/)==-1) ) {
        error = "The password must contain at least one numeral.\n";
        inputpassword.style.background = 'red';
        alert(error);
        return false;
 
     } 
    //else {
    //     inputpassword.style.background = 'White';
    //     error.innerHTML= "Invalid";
    //     error.style.color= "red";
    //     return false;
        
    //}

     if (inputAddress.value == "") {
        inputAddress.style.background = 'Yellow';
        error = "You didn't enter a password.\n";
        alert(error);
        return false;
    }
     if (inputAddress.value == "") {
        inputAddress.style.background = 'Yellow';
        error = "You didn't enter a password.\n";
        alert(error);
        return false;
    }

     if (inputCity.value == "") {
        inputCity.style.background = 'Yellow';
        error = "You didn't enter a password.\n";
        alert(error);
        return false;
    }


    // 
    if (!pat1.test(inputZip.value))  {
        alert("Pin code should be 6 digits ");
        pin_code.focus();
        return false;
    }


    // 

    else {
            inputpassword.style.background = 'White';
            error.innerHTML= "Invalid";
            error.style.color= "red";
            return false;
            
        }
}
