// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var length = prompt("How many characters would you like your password to contain?");
  var special = confirm("Click OK to confirm including special characters.");
  var numbers = confirm("Click OK to confirm including numeric characters.");
  var lowerCase = confirm("Click OK to confirm including lowercase characters.");
  var upperCase = confirm("Click ok to confirm including uppercase characters.");
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);