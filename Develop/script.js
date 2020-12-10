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
  var choice1 = prompt(`Generate a password!\nDoes your password require lowercase characters?`);
  passwordText.lower = prompt(`Choose any character to lowercase in your password:`)
  prompt(`Does your password require uppercase characters?`);
  passwordText.upper = prompt(`Choose any character to uppercase in your password:`)
  prompt(`Does your password require numeric values?`);
  passwordText.numerical = prompt(`Choose any number to include in your password:`)
  prompt(`Does your password require special characters?`);
  passwordText.special = prompt(`Choose any special characters to include in your password:`)
  prompt(`How long does your password need to be? (Choose between 8 and 128 characters)`);
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

