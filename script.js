// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  console.log('hey you clicked the button')
 
  // 1. prompt the user for the password criteria
  // 1b. password length 8- 128
  // c. promp the user whether they want to include lowercase, uppercase, and or special charcters
  //2. validate the input.
  //3. generate password based on criteria
  //4. display the generated password to the page
 var userChoice = window.prompt ('How many characters would you like your password to contain?')

  if (userChoice >= 8 && userChoice <= 128 ) {
    confirm('do you want to include lowercase?')
  } else{
    window.prompt('must be between 8-128')
  }



  return('generated password will go here');
};  




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
