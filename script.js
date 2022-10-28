// Assignment code here
var lowChar = "abcdefghijklmnopqrstuvwxyz".split("");
var upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numChar = "0123456789".split("");
var specChar = "!'#$%&()*+,-./:;<=>?@[]^_`{|}~".split("");
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var prePassword = [];
  var postPassword = "";

  var userChoice = window.prompt(
    "How many characters would you like your password to contain?"
  );

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



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*if else userchoice.length < 8 {
  window.alert("Your password must be atleast 8 characters")
  return
};*/

//document.getElementById("password").value = password;
