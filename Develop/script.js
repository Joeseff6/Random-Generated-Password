// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  prompt("Generate a password!\nDoes your password require lowercase characters?");
  prompt("Choose any character to lowercase in your password:")
  prompt("Does your password require uppercase characters?");
  prompt("Choose any character to uppercase in your password:")
  prompt("Does your password require numeric values?");
  prompt("Choose any number to include in your password:")
  prompt("Does your password require special characters?");
  prompt("Choose any special characters to include in your password:")
  prompt("How long does your password need to be? (Choose between 8 and 128 characters)");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

