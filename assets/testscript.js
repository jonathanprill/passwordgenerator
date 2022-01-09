// Assignment code here



function generatePassword() {
  
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
  
    lowercaseFunction();
    uppercaseFunction();
  
  var arr = [passwordUppercase, passwordLowercase]
  var filtered = arr.filter(Boolean);
  console.log(filtered);









  

  



  

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
