// Assignment Code
var generateBtn = document.querySelector(`#generate`);

// Create an object to assign values via user prompt.
var passwordText = {
  lower: ``,
  upper: ``,
  numerical: ``,
  special: ``,
  value: ``
};

function generatePassword() {
    // User chooses if lower-cased characters are required.
  low = prompt(`Generate a password!\nDoes your password require lowercase characters?`).toLowerCase();
  if (low === 'yes') {
    passwordText.lower = prompt(`Choose any character to lowercase in your password:`)
  };

  // User chooses if upper-cased characters are required.
  up = prompt(`Does your password require uppercase characters?`).toLowerCase();
  if (up === 'yes') {
  passwordText.upper = prompt(`Choose any character to uppercase in your password:`)
  };

  // User chooses if numeric values are required.
  numeric = prompt(`Does your password require numeric values?`);
  if (numeric === 'yes') {
  passwordText.numerical = prompt(`Choose any number to include in your password:`)
  };

  // User chooses if special characters are required.
  spec = prompt(`Does your password require special characters?`);
  if (spec === 'yes') {
  passwordText.special = prompt(`Choose any special characters to include in your password:`)
  };

  // User chooses character length of password. User cannot choose anything outside of a number 8 through 128.
  charLength = parseInt(prompt(`How long does your password need to be?\n8 through 128 characters allowed)`));
  newNum = true;
  while (newNum === true) {
    if (charLength < 8 || charLength > 128 || isFinite(charLength) === false) {
      newNum = true;
      alert(`Please choose between 8 and 128.`);
      charLength = prompt(`How long does your password need to be?`);
    } else {
      newNum = false;
    }
  }

  // Give a value to the password variable once the function is over.
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

