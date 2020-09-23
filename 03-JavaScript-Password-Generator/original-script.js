// Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

// GIVEN I need a new, secure password


// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria


// WHEN prompted for password criteria
// THEN I select which criteria to include in the password


// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
var userlength = 8;

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
var lowerArr = ["abcdefghijklmnopqrstuvwxyz"];
var upperArr = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numArr = ["1234567890"];
var specialArr = ["~!@#$%^&*"];


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected


// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria


// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");
    // This creates a Node containing the generate id

// Write password to the #password input
function writePassword() {
    // declares a function with the name writePassword
    var password = generatePassword();
    // Creates a variable named password that calls the function generatePassword
    var passwordText = document.querySelector("#password");
    // Creates a Node named passwordText containing the password id

    passwordText.value = password;
    // Sets the value of passwordText to password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
