// Assignment code here

function generatePassword() {

  // PASSWORD LENGTH PROMPT
  var passwordLength = parseInt(window.prompt('How many Characters would you like? Choose a number between 8 and 128?'));         //parseInt converts to numeric (Got from Walter in Study group)
    
    if (passwordLength >= 8 && passwordLength <= 128) {
    //VALID
    window.alert('Your password will be ' + passwordLength + ' characters long.');
  
    } else {
    //INVALID
    window.alert('Please enter a valid password length!');
    return generatePassword();
    }

    var confirmLength = window.confirm('Are you sure you want your password to be ' + passwordLength + ' characters long?')
      if (confirmLength === false) {
        return generatePassword();        
      } 

      
  // PASSWORD LOWERCASE PROMPT
  lowercaseFunction = function() {
  passwordLowercase = window.confirm('Would you like to include lowercase characters in your password?');
    if (passwordLowercase === true) {
      var confirmSelection = window.confirm('Are you sure you want to include lowercase characters in your password?');
        if (confirmSelection === true) {
          passwordLowercase = 'abcdefghijklmnopqrstuvwxyz';
        } else {
          return lowercaseFunction();
        }
    }
    
    if (passwordLowercase === false) {
      var confirmSelection = window.confirm('Are you sure you DO NOT want to include lowercase characters in your password?');
        if (confirmSelection === true) {
          passwordLowercase = false;
        } else {
          return lowercaseFunction();
        }
    }
  }

  // PASSWORD UPPERCASE PROMPT
  uppercaseFunction = function() {
    passwordUppercase = window.confirm('Would you like to include uppercase characters in your password?');
      if (passwordUppercase === true) {
        var confirmSelection = window.confirm('Are you sure you want to include uppercase characters in your password?');
          if (confirmSelection === true) {
            passwordUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          } else {
            return uppercaseFunction();
          }
      }
      
      if (passwordUppercase === false) {
        var confirmSelection = window.confirm('Are you sure you DO NOT want to include uppercase characters in your password?');
          if (confirmSelection === true) {
            passwordUppercase = false;
          } else {
            return uppercaseFunction();
          }
      }
  }

  // PASSWORD NUMBERS PROMPT
  numbersFunction = function() {
    passwordNumbers = window.confirm('Would you like to include numbers in your password?');
      if (passwordNumbers === true) {
        var confirmSelection = window.confirm('Are you sure you want to include numbers in your password?');
          if (confirmSelection === true) {
            passwordNumbers = '0123456789';
          } else {
            return numbersFunction();
          }
      }
      
      if (passwordNumbers === false) {
        var confirmSelection = window.confirm('Are you sure you DO NOT want to include numbers in your password?');
          if (confirmSelection === true) {
            passwordNumbers = false;
          } else {
            return numbersFunction();
          }
      }
  }

  // PASSWORD SPECIAL CHARACTERS PROMPT
  specialFunction = function() {
    passwordSpecial = window.confirm('Would you like to include special characters in your password?');
      if (passwordSpecial === true) {
        var confirmSelection = window.confirm('Are you sure you want to include special characters in your password?');
          if (confirmSelection === true) {
            passwordSpecial = "!”#$%&()*+,-./:;<=>?@[\]^_`{|}~";
          } else {
            return specialFunction();
          }
      }
      
      if (passwordSpecial === false) {
        var confirmSelection = window.confirm('Are you sure you DO NOT want to include special characters in your password?');
          if (confirmSelection === true) {
            passwordSpecial = false;
          } else {
            return specialFunction();
          }
      }
  }

  
  lowercaseFunction();
  uppercaseFunction();
  numbersFunction();
  specialFunction();

  

  var arr = [passwordLowercase, passwordUppercase ,passwordNumbers, passwordSpecial]  //LEARNED HOW TO FILTER OUT FALSE BOOLEANS AT https://www.techiedelight.com/remove-all-falsy-values-from-an-array-in-javascript/
  var filtered = arr.filter(Boolean);
  

  let passwordString = filtered.join('');                                             //LEARNED HOW TO TURN ARRAYS INTO STRINGS HERE https://www.w3schools.com/jsref/jsref_join.asp
  
  


    function makePassword(length) {
      var length           = passwordLength;
      var result           = '';
      var characters       = passwordString;
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
    }
    return result;
  }


  document.getElementById('password').innerHTML = (makePassword(passwordLength));     // figured out how to transfer java strings into html here https://stackoverflow.com/questions/1497481/javascript-password-generator


}







// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// var password.numbers = 0123456789
// UPPER CASE = ABCDEFGHIJKLMNOPQRSTUVWXYZ
// LOWER CASE = abcdefghijklmnopqrstuvwxyz
// SPECIAL CHARACTERS = !”#$%&’()*+,-./:;<=>?@[\]^_`{|}~
// CHARACTER LENGTH = 8 - 128





// SATURDAY STUDY GROUP NOTES

// var passLowercase = confirm(
//   'Would you like Lowercase?'
// );

// var passUpercase = confirm(
//   'Would you like Uppercase?'
// );

// var passLength = parseInt( prompt(          //parseInt converts to numeric
//   'How many Characters would you like. Choose a number between 8 and 128?'
// ));

// if (passLength >= 8 && passLength <= 128) {
//   //VALID
//   alert('Password will be ' + passLength);
// } else {
//   //INVALID
//   alert('Please enter a valid password length!');
// }

// END SATURDAY STUDY GROUP NOTES




