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

  // User chooses character length of password. User cannot choose anything outside of a number 8 through 128.
  var charLength = parseInt(prompt(`Generate a password!\nHow many characters does your password need to have?\n(8 through 128 characters allowed)`));
  var newNum = true;

  // While loop will ensure user puts an appropriate value. 
  while (newNum === true) {
    if (charLength < 8 || charLength > 128 || isFinite(charLength) === false) {
      alert(`Please choose between 8 and 128.`);
      charLength = prompt(`How many characters does your password need to have?\n(8 through 128 characters allowed)`);
      newNum = true;
    } else {
      newNum = false;
    }
  }
  
  // While loop used to nest all user inputs for validation that user makes a choice
  var charchoices = true;
  while (charchoices === true) {
    // User chooses if lower-cased characters are required.
    var choice = confirm(`Does your password require lowercase characters?`);
    if (choice === true) {
      passwordText.lower = `abcdefghijklmnopqrstuvwxyz`;
    } else {
      passwordText.lower = ``;
    }

    // User chooses if upper-cased characters are required.
    choice = confirm(`Does your password require uppercase characters?`);
    if (choice === true) {
      passwordText.upper = (`abcdefghijklmnopqrstuvwxyz`).toUpperCase();
    } else {
      passwordText.upper = ``;
    }

    // User chooses if numeric values are required.
    choice = confirm(`Does your password require numeric values?`);
    if (choice === true) {
      passwordText.numerical = (`1234567890`);
    } else {
      passwordText.numerical = ``;
    }

    // User chooses if special characters are required.
    choice = confirm(`Does your password require special characters?`);
    if (choice === true) {
      passwordText.special = (`!"#$%&'()*+,-./:;<=>?@[\]^_\`{|}~`);
    } else {
      passwordText.special = ``;
    }

    // Condition to validate if user chose any set of characters to include in password
    if (passwordText.lower === `` && passwordText.upper === `` && passwordText.numerical === `` && passwordText.special === ``) {
      alert("You must choose at least one characterset to include in your password!");
    } else {
      charchoices = false;
    }
  }



  // Add variables for the for the for loop to randomize string.
  var chars = passwordText.lower + passwordText.upper + passwordText.numerical + passwordText.special;
  var pass = ``;

  // for loop for randomizing the characters in the password.
  let i = 0;
  for (i = 0; i < charLength; i++) {
    pass = pass + chars[Math.floor(Math.random() * Math.floor(chars.length))];
  }

  var password = pass;

  // Give a value to the password variable once the function is over.
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector(`#password`);

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener(`click`, writePassword);
