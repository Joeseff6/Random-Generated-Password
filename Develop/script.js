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
  choice = prompt(`Generate a password!\nDoes your password require lowercase characters?`).toLowerCase();
  
  // While loop will ensure user puts an appropriate value. 
  choiceLow = true;
  while (choiceLow === true) {
    if (choice === `yes`) {
      passwordText.lower = prompt(`Choose any character to lowercase in your password (will automatically lowercase):`).toLowerCase();
      choiceLow = false;
    } 
    else if (choice === `no`) {
      passwordText.lower = ``;
      choiceLow = false;
    } 
    else {
      alert(`You must choose yes or no`);
      choice = prompt(`Does your password require lowercase characters?`).toLowerCase();
      choiceLow = true;
    };
  }


  // User chooses if upper-cased characters are required.
  choice = prompt(`Does your password require uppercase characters?`).toLowerCase();

  // While loop will ensure user puts an appropriate value. 
  choiceUp = true;
  while (choiceUp === true) {
    if (choice === `yes`) {
      passwordText.upper = prompt(`Choose any character to uppercase in your password (will automatically uppercase):`).toUpperCase();
      choiceUp = false;
    }
    else if (choice === `no`) {
      passwordText.upper = ``;
      choiceUp = false;
    } 
    else {
      alert(`You must choose yes or no`);
      choice = prompt(`Does your password require uppercase characters?`).toLowerCase();
      choiceUp = true;
    };
  }


  // User chooses if numeric values are required.
  choice = prompt(`Does your password require numeric values?`).toLowerCase();

  // While loop will ensure user puts an appropriate value. 
  choiceNumeric = true;
  while (choiceNumeric  === true) {
    if (choice === `yes`) {
      passwordText.numerical = prompt(`Choose any number to include in your password:`);
      choiceNumeric = false;
    } 
    else if (choice === `no`) {
      passwordText.numerical = ``;
      choiceNumeric = false;
    } 
    else {
      alert(`You must choose yes or no`);
      choice = prompt(`Does your password require numeric values?`).toLowerCase();
      choiceNumeric = true;
    };
  }


  // User chooses if special characters are required.
  choice = prompt(`Does your password require special characters?`);

  // While loop will ensure user puts an appropriate value. 
  choiceSpec = true;
  while (choiceSpec === true) {
    if (choice === `yes`) {
      passwordText.special = prompt(`Choose any special characters to include in your password:`);
      choiceSpec = false;
    } 
    else if (choice === `no`) {
      passwordText.special = ``;
      choiceSpec = false;
    } 
    else {
      alert(`You must choose yes or no`);
      choice = prompt(`Does your password require special characters?`);
      choiceSpec = true;
    };
  }


  // User chooses character length of password. User cannot choose anything outside of a number 8 through 128.
  charLength = parseInt(prompt(`How long does your password need to be?\n8 through 128 characters allowed)`));
  newNum = true;
  // While loop will ensure user puts an appropriate value. 
  while (newNum === true) {
    if (charLength < 8 || charLength > 128 || isFinite(charLength) === false) {
      alert(`Please choose between 8 and 128.`);
      charLength = prompt(`How long does your password need to be?`);
      newNum = true;
    } else {
      newNum = false;
    }
  }

  // Add variables for the for the for loop to randomize string.
  var chars = passwordText.lower + passwordText.upper + passwordText.numerical + passwordText.special;
  pass = ``

  // for loop for randomizing the characters in the password.
  let i = 0
  for (i = 0; i < charLength; i++) {
    pass = pass + chars[Math.floor(Math.random() * Math.floor(chars.length))];
  }

  // Give a value to the password variable once the function is over.
  return password = pass;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector(`#password`);

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener(`click`, writePassword);
