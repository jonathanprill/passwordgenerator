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
  
  console.log(passwordString);




  var jumbled = passwordString.split('').sort(function(){return 0.5-Math.random()}).join('');   //Found a good string randomizer here https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript

  console.log(jumbled);    

}







// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// var password.numbers = 0123456789
// UPPER CASE = ABCDEFGHIJKLMNOPQRSTUVWXYZ
// LOWER CASE = abcdefghijklmnopqrstuvwxyz
// SPECIAL CHARACTERS = !”#$%&’()*+,-./:;<=>?@[\]^_`{|}~
// CHARACTER LENGTH = 8 - 128




// // we attempted to work with numbers first try. Because we knew we would have to compare numbers in the "if" conditional statements. But we decided it was easier to work with strings
// //
// //IMPORTANT IMPORTANT IMPORTANT you must open the console to see the results
// //
// // create the coices we chose to work with an array of strings.
// var choices = ['R', 'P', 'S'];
// //Save the user choice to a variable. the prompt returns a string value.
// var userChoice = prompt('Rock = R , Paper = P, or Scissors = S?');
// // this var makes a randon pick of the "choices" array.
// var robotChoice = choices[Math.floor(Math.random() * choices.length)];
// // I wanted to make sure the userChoice was an uppercase character. The game will allow incorrect iput such as lowercase and numbers
// userChoice.toUpperCase();

// function gameResult() {
//   //there are nine different game outcomes. I thought it was easiest to explicitly type them out and compare.
//   //this could have been made into a nested loop, i think (not sure).
//   if (userChoice === 'R' && robotChoice === 'R') {
//     console.log('Its a Tie');
//   } else if (userChoice === 'P' && robotChoice === 'P') {
//     console.log('Its a Tie');
//   } else if ((userChoice = 'S') && robotChoice === 'S') {
//     console.log('Its a Tie');
//   } else if (userChoice === 'R' && robotChoice === 'S') {
//     console.log('Its a win');
//   } else if (userChoice === 'P' && robotChoice === 'R') {
//     console.log('Its a win');
//   } else if (userChoice === 'S' && robotChoice === 'P') {
//     console.log('Its a win');
//   } else if (userChoice === 'R' && robotChoice === 'P') {
//     console.log('Its a loss');
//   } else if (userChoice === 'P' && robotChoice === 'S') {
//     console.log('Its a loss');
//   } else if (userChoice === 'S' && robotChoice === 'R') {
//     console.log('Its a loss');
//   } else {
//     // do noting
//   }
// } //calls the function to console log the game result
// gameResult();






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







//  // PASSWORD LOWERCASE PROMPT
//  var passwordLowercase = window.confirm('Would you like to include lowercase characters in your password?');
//  if (passwordLowercase === true) {
//    window.confirm('Are you sure you want to include lowercase characters in your password?');
//    passwordLowercase = true
//  } else {
//    window.confirm('Are you sure you DO NOT want to include lowercase characters in your password?');
//    passwordLowercase = false
//  }

 
// // PASSWORD UPPERCASE PROMPT
// var passwordUppercase = window.confirm('Would you like to include uppercase characters in your password?');
//  if (passwordUppercase === true) {
//    window.confirm('Are you sure you want to include uppercase characters in your password?');
//    passwordUppercase = true
//  } else {
//    window.confirm('Are you sure you DO NOT want to include uppercase characters in your password?');
//    passwordUppercase = false
//  }

// // PASSWORD SPECIAL CHARACTERS PROMPT
// var passwordSpecial = window.confirm('Would you like to include special characters in your password?');
//  if (passwordSpecial === true) {
//    window.confirm('Are you sure you want to include special characters in your password?');
//    passwordSpecial = true
//  } else {
//    window.confirm('Are you sure you DO NOT want to include special characters in your password?');
//    passwordSpecial = false
//  }




  // PASSWORD LOWERCASE PROMPT



  // var lowercaseVar = window.confirm('Would you like to include lowercase characters in your password?');
  //   if (lowercaseFunction === true) {
  //     var confirmSelection = window.confirm('Are you sure you want to include lowercase characters in your password?');
  //       if (confirmSelection === true) {
  //         passwordLowercase = true;
  //       } else {
  //         return lowercaseVar
  //       }
      
  //       }  
  
    
  
 
