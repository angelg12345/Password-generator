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

  if (userChoice >= 8 && userChoice <= 128 )  {


// This is going to do the confirmation plus it gives a varible to each set
  var lowercase = confirm('click ok to confirm including lowercase letters?');
  var upercase = confirm('click ok to confirm including uppercase letters?');
  var numbers = confirm('click ok to confirm including numbers?');
  var special = confirm('click ok to confirm including special characters?');
  } else {
    alert('must be a number between 8-128')
    return '';
  }
  // calls each var and adds the necessary characters
  var characters = '';
if (lowercase){
    characters += 'abcdefghijklmnopqrstuvwxyz';
  }

  if (upercase) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }

  if (numbers) {
    characters += '0123456789'
  }

  if (special) {
    characters += '!@#$%^&*()'
  } else {
    alert('must have atleast one condition')
    return ''
  }

  password = '';
  for (var i = 0; i < userChoice; i++) {
    var random = Math.floor(Math.random() * characters.length);
    password += characters[random]
  }
  return(password);
};  




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
