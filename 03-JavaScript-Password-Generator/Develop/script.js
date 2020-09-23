// Creating function that goes inside generatePassword to get a valid number between 8-128.
function getLength() {
    while (true) {
        var userLength = parseInt(prompt("How many numbers, between 8 and 128, would you like to use? (Enter 0 to cancel)"));
        if (userLength == 0) {
            return 0;
        } else if (userLength > 128 || userLength < 8) {
            alert("You must enter a number between 8-128.");
        } else if (userLength <= 128 && userLength >= 8) {
            alert("Great! Your have selected a password with " + userLength + " characters.");
            return userLength;
        }
    } 
}

// Creating function that pulls random characters from the array passwordCharacters that is built later when asking user for options
function randChar(passwordCharacters) {
    return passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
}

// function makePassword(userLength, passwordCharacters) { 
//     var securePassword = "";
//     for (i = 0; i < userLength; i++) {    
//         securePassword += randChar(passwordCharacters);
//     }
//     return securePassword;
// }

// functions are like a recipe, validateOptions would be the dish's name, and the arguments the programmer passes are its ingredients. The computer is the chef but the programmer is the one responsible for getting all the ingredients and telling the chef what to make
// function validateOptions(basePassword, askLowerCase, askUpperCase, askNumerals, askSpecial) {

//     //  Creating a variable is like grabbing a bowl to mix or hold ingredients
//     var securePassword = basePassword;

//     // while (missing requirements) 
//         // Validate that all selected characters have been included

//         //  if securePassword does not contain lowercase, 
//         //      then replace a random char in string with lowercase character
//         //  if securePassword does not contain uppercase,
//         //      then replace a random char in string with uppercase character
//         //  if securePassword does not contain numbers,
//         //      then replace a random char in string with numeral character
//         //  if securePassword does not contain special characters,
//         //      then replace a random char in string with a special character
    
//     // Using return is like serving the completed dish back to whoever ordered it
//     return securePassword;
// }

function makeSecurePassword( userLength, askLowerCase, askUpperCase, askNumerals, askSpecial ) {
    const lowCaseArr = "abcdefghijklmnopqrstuvwxyz";
    const upCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeralArr = "1234567890";
    const specialArr = "!@#$%^&*";

    var password = [];

    // Decide which chars to consider:
    charArray = [];
    if ( askLowerCase ) {
        charArray.push( lowCaseArr );
    }
    if ( askUpperCase ) {
        charArray.push( upCaseArr );
    }
    if ( askNumerals ) {
        charArray.push( numeralArr );
    }
    if ( askSpecial ) {
        charArray.push( specialArr );
    }
    
    let x = 0; // index into charArray
    for ( var i=0; i < userLength; i++ ) {
        var a = charArray[x]; // Which array of chars to look at

        // Insert at random spot:       
        password.splice( password.length, 1, randChar( a ) );

        // Pick next set of chars:
        if ( ++x >= charArray.length ) {
            x = 0; // Start with the first set of chars if we went past the end
        }
    }
    
    return password.join(''); // Create a string from the array of random chars
}

function generatePassword() {
    var userLength = getLength();
    if (userLength == 0) {
        return "User Cancelled Request";
    }

    var askLowerCase = confirm("Would you like to include lower case characters? (a, b, c)");
    if (askLowerCase !== true) {
        alert("Got it. No lower case characters will be included.");
    } else {
        alert("Great! Your password will include lower case characters!");
    }

    var askUpperCase = confirm("Would you like to include upper case characters? (A, B, C)");
    if (askUpperCase !== true) {
        alert("Got it. No upper case characters will be included.");
    } else {
        alert("Great! Your password will include upper case characters!");
    }

    var askNumerals = confirm("Would you like to include numeral characters? (1, 2, 3)");
    if (askNumerals !== true) {
        alert("Got it. No numeral characters will be included.");
    } else {
        alert("Great! Your password will include numeral characters!");
    }

    var askSpecial = confirm("Would you like to include special characters? (~, !, @)");
    if (askSpecial !== true) {
        alert("Got it. No special characters will be included.");
    } else {
        alert("Great! Your password will include special characters!");
    }    

    // Now that we have provided all of the selected options to the var basePassword, we can ask another function to verify all are included
    var securePassword = makeSecurePassword(userLength, askLowerCase, askUpperCase, askNumerals, askSpecial);

    return securePassword;
}

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////