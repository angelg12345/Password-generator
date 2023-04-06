// Assignment Code
var generateBtn = document.querySelector("#generate");


// this is where the password is made and the generatepassword function is called on line 57
function generatePassword() {
  console.log('hey you clicked the button')
 
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
    characters += '!@#$%^&*()+,-./:;<=>?[]_{}|'
  } else {
    alert('must have atleast one condition')
    return ''
  }
// This is where the password goes and randomizes depending on characters added and length chosen by user.
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
