function generatePassword(){
  
  
    document.getElementById('password').innerHTML = 'test';
    

}


// var finalPassword = document.getElementById('password');
// finalPassword.textContent = 'block';



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


