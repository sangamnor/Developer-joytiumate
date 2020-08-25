// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var address = document.contactForm.address.value;
    var message =document.contactForm.message.value;
    var fullname = document.getElementById('fullname');
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            // Populate hobbies array with selected values
            hobbies.push(checkboxes[i].value);
        }
    }
      // To check empty form fields.
      if (fullname.value.length == 0) {
        document.getElementById('head').innerText = "* All fields are mandatory *"; // This segment displays the validation rule for all fields
        fullname.focus();
        return false;
        }
	// Defining error variables with a default value
    var nameErr = emailErr = mobileErr = countryErr = genderErr =addrErr= true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    //validate Address
    if(address==""){
        printError("addressErr","Please enter your Address")
    }else{
        var regex = /^[0-9a-zA-Z]+$/;
        if(regex.test(address)==false){
            printError("addressErr", "Please enter a valid address");
        } else{
            printError("addressErr", "");
            addressErr = false;
        }
    }
    // Validate country
    if(country == "Select") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }
    
    // Validate gender
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    //validate message
        //validate Address
        if(address==""){
            printError("messageErr","Please enter your Message")
        }else{
            var regex = /^[0-9a-zA-Z]+$/;
            if(regex.test(message)==false){
                printError("messageErr", "Please enter a valid message");
            } else{
                printError("messageErr", "");
                mobileErr = false;
            }
        }
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || mobileErr || countryErr || genderErr || addresErr || messageErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Address:" + address +"\n" +
                          "Country: " + country + "\n" +
                          "Gender: " + gender + "\n" +
                          "Message" + message + "\n";
        if(hobbies.length) {
            dataPreview += "Hobbies: " + hobbies.join(", ");
        }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};