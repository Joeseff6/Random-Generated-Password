// Assignment Code
var generateBtn = document.querySelector(`#generate`);

var passwordText = {
  lower: ``,
  upper: ``,
  numerical: ``,
  special: ``,
  value: ``
};


function generatePassword() {
  choice1 = prompt(`Generate a password!\nDoes your password require lowercase characters?`).toLowerCase();
  if (choice1 === 'yes') {
    passwordText.lower = prompt(`Choose any character to lowercase in your password:`)
  };

  
  choice2 = prompt(`Does your password require uppercase characters?`).toLowerCase();
  if (choice2 === 'yes') {
  passwordText.upper = prompt(`Choose any character to uppercase in your password:`)
  };


  choice3 = prompt(`Does your password require numeric values?`);
  if (choice3 === 'yes') {
  passwordText.numerical = prompt(`Choose any number to include in your password:`)
  };


  choice4 = prompt(`Does your password require special characters?`);
  if (choice4 === 'yes') {
  passwordText.special = prompt(`Choose any special characters to include in your password:`)
  };


  choice5 = parseInt(prompt(`How long does your password need to be?\n8 characters minimum, 128 characters max)`));
  newNum = true;
  while (newNum === true) {
    if (choice5 <= 8 || choice5 >= 128) {
      newNum = true;
      alert(`Please enter a number in between 8 and 128.`);
      choice5 = prompt(`How long does your password need to be?`);
    } else {
      newNum = false;
    }
  }
    
  return password = passwordText.lower + passwordText.upper + passwordText.numerical + passwordText.special
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector(`#password`);

  passwordText.value = password;
  
}


// Add event listener to generate button
generateBtn.addEventListener(`click`, writePassword);

