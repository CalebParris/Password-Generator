// Assignment Code
var generateBtn = document.querySelector("#generate");

// Defines an object for the password values
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

  // Defines the variables as a string
  var passwordChars = "";
  var finalPassword = "";

  // Determines what characters are available to choose from in the password
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
  
  // Loops number of times equal to the input amount
  for (i = 0; i < parseInt(lengthInput); i++){

    // Appends a random character from the available choices to the end of the previous loop
    finalPassword += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
  }

  // Prints the outcome of the loop in the password text area
  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);