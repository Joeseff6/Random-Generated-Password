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
  low = prompt(`Generate a password!\nDoes your password require lowercase characters?`).toLowerCase();
  if (low === 'yes') {
    passwordText.lower = prompt(`Choose any character to lowercase in your password:`)
  };


  up = prompt(`Does your password require uppercase characters?`).toLowerCase();
  if (up === 'yes') {
  passwordText.upper = prompt(`Choose any character to uppercase in your password:`)
  };


  numeric = prompt(`Does your password require numeric values?`);
  if (numeric === 'yes') {
  passwordText.numerical = prompt(`Choose any number to include in your password:`)
  };


  spec = prompt(`Does your password require special characters?`);
  if (spec === 'yes') {
  passwordText.special = prompt(`Choose any special characters to include in your password:`)
  };


  charLength = parseInt(prompt(`How long does your password need to be?\n8 characters minimum, 128 characters max)`));
  newNum = true;
  while (newNum === true) {
    if (charLength <= 8 || charLength >= 128) {
      newNum = true;
      alert(`Please enter a number in between 8 and 128.`);
      charLength = prompt(`How long does your password need to be?`);
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

