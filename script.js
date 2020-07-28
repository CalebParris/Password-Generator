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
  // Prompts you for the length of the password
  var lengthInput = prompt("Please choose a password containing between 8 and 128 characters in length?");

  // Cancels the promt and refreshes the page if the 'cancel' button is clicked
  if (lengthInput === null){
    return location.reload();
  }

  // Loops continuously until a valid number input is entered between 8 and 128
  while (lengthInput < 8 || lengthInput > 128 || isNaN(lengthInput)){
    lengthInput = prompt("Invalid entry, password must be between 8 and 128 characters in length. Please enter a valid length.");

    // Cancels the promt and refreshes the page if the 'cancel' button is clicked
    if (lengthInput === null){
      return location.reload();
    }
  }

  // Prompts the user to confirm what type of characters they want in the password
  var specialInput = confirm("Do you want to include special characters?");
  var numbersInput = confirm("Do you want to include number?");
  var lowerCaseInput = confirm("Do you want to include lowercase letters?");
  var upperCaseInput = confirm("Do you want to include uppercase letters?");

  // Loops continuously until at least one of the choices is selected
  while (specialInput === false && numbersInput === false && lowerCaseInput === false && upperCaseInput === false){
    alert("You must choose one of the options to continue")
    var specialInput = confirm("Do you want to include special characters?");
    var numbersInput = confirm("Do you want to include number?");
    var lowerCaseInput = confirm("Do you want to include lowercase letters?");
    var upperCaseInput = confirm("Do you want to include uppercase letters?");
  }


  // Defines the variables as a string
  var passwordChars = "";
  var finalPassword = "";

  // Determines what characters are available in the password based on the user's previous input
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
  
  // Loops until the user's chosen length is reached
  for (i = 0; i < parseInt(lengthInput); i++){

    // Concatenates a random character from the available choices to the end of the password until it reaches the length that was chosen by the user
    finalPassword += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
  }

  // Prints the outcome of the loop in the password text area
  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);