//Assigned my variables and split the strings to individuals 
var lowChar = "abcdefghijklmnopqrstuvwxyz".split("");
var upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numChar = "0123456789".split("");
var specChar = "!'#$%&()*+,-./:;<=>?@[]^_`{|}~".split("");

var generateBtn = document.querySelector("#generate");

//password function to contain entire password generator 
//event listener to wait for a click to run the writePassword function
generateBtn.addEventListener("click", writePassword);
function writePassword() {
  var prePassword = [];
  var postPassword = "";
//Prompt the user to choose a character count
  var userChoice = window.prompt(
    "How many characters would you like your password to contain?"
  );
//Alerts the user if they do not choose a number between 8 and 128 
//if statements allow the user to specify what kind of password to create 
  if (userChoice < 8 || userChoice > 128) {
    alert("Your password needs to be between 8-128 characters");
    writePassword();
  } else {
    if (confirm("Do you want lower case characters in your password?")) {
      prePassword = prePassword.concat(lowChar);
    }
    if (confirm("Do you want upper case characters in your password?")) {
      prePassword = prePassword.concat(upChar);
    }
    if (confirm("Do you want numbers in your password?")) {
      prePassword = prePassword.concat(numChar);
    }
    if (confirm("Do you want special characters in your password?")) {
      prePassword = prePassword.concat(specChar);
    }
    //if statement to alert the user that they must choose one time of character from the choices
    if (prePassword.length === 0) {
      alert(
        "You must choose atleast one type of character to create a password"
      );
      writePassword();
    } else {
        for (let i = 0; i < userChoice; i++) {
          var random = Math.floor(Math.random() * prePassword.length);
          postPassword += prePassword[random];
        }
    }
  }
  document.getElementById("password").innerHTML = postPassword
}



