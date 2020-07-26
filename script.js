// Assignment Code
var generateBtn = document.querySelector("#generate");

// Added an object for the password values
var passwordOptions = {
  special: "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
  numbers: "0123456789",
  lowerCase: "acbdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  // Declared the prompts and confirms for the password choices
  var lengthInput = prompt("How many characters would you like your password to contain?");
  var specialInput = confirm("Click OK to confirm including special characters.");
  var numbersInput = confirm("Click OK to confirm including numeric characters.");
  var lowerCaseInput = confirm("Click OK to confirm including lowercase characters.");
  var upperCaseInput = confirm("Click ok to confirm including uppercase characters.");

  // Defines the passwordChars variable as a and adds the object keys based on if the confirm was true or false
  var passwordChars = "";
  if (specialInput){
    passwordChars += passwordOptions.special;
  } 
  if (numbersInput){
    passwordChars += passwordOptions.numbers;
  } 
  if (lowerCaseInput){
    passwordChars += passwordOptions.lowerCase;
  } 
  if (upperCaseInput){
    passwordChars += passwordOptions.upperCase;
  }
  
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);