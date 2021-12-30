// Assignment code here

// Create Arrays of characters
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharArray = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">" ,"?", "@", "^", "|"];


function generatePassword() {
//create prompts for length, upper/lower case, numbers and special characters
var passwordLength = parseInt(prompt("Choose a password length between 8 and 128 characters"))
if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
  alert("Please enter an number between 8 and 128")
  return null;
}

var lowerCase = confirm("Do you want lower case letters?")

var upperCase = confirm("Do you want upper case letters?")

var numeric = confirm("Do you want numbers?")

var specialChar = confirm("Do you want special characters?")

if (!lowerCase && !upperCase && !numeric && !specialChar) {
  alert("You must choose a unique property")
  return null;
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
