// Assignment code here

// Create Arrays of characters
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharArray = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">" ,"?", "@", "^", "|"];



function generatePassword() {
//create prompts for length, upper/lower case, numbers and special characters
var passwordLength = prompt("Choose a password length between 8 and 128 characters")
if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
  alert("Please enter a number between 8 and 128")
  return null;
}

alert("Your password will have " + passwordLength + " characters")

var chosenChars = []

var lowerCase = confirm("Do you want lower case letters?")
if (lowerCase) {
  chosenChars = lowerArray.concat(chosenChars)
  alert("Lower case you shall have!")
}

var upperCase = confirm("Do you want upper case letters?")
if (upperCase) {
  chosenChars = upperArray.concat(chosenChars)
  alert("Some caps. Nice choice.")
}

var numeric = confirm("Do you want numbers?")
if (numeric) {
  chosenChars = numberArray.concat(chosenChars)
  alert("Numbers for you")
}

var specialChar = confirm("Do you want special characters?")
if (specialCharArray) {
  chosenChars = specialCharArray.concat(chosenChars)
  alert("There's gonna be some special characters in it now")
}

if (!lowerCase && !upperCase && !numeric && !specialChar) {
  alert("You must choose a unique property")
  return null;
}

var finalPassword = []
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}

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
