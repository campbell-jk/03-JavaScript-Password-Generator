// Function to prompt user to give a length, then validates that it is within the given range of lengths.
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

// Function to grab a random character from the array compiled by the user input
function randomCharacter(passwordCharacters) {
    return passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
}

// Function to consider all password criteria and create the array of chosen criteria.
function makeSecurePassword(userLength, askLowerCase, askUpperCase, askNumerals, askSpecial) {
    // Storing all of the arrays
    const lowCaseArr = "abcdefghijklmnopqrstuvwxyz";
    const upCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeralArr = "1234567890";
    const specialArr = "!@#$%^&*";
    // A blank array to add selected criteria
    var password = [];

    // Decide which characters to consider:
    charArray = [];
    if (askLowerCase) {
        charArray.push(lowCaseArr);
    }
    if ( askUpperCase ) {
        charArray.push(upCaseArr);
    }
    if (askNumerals) {
        charArray.push(numeralArr);
    }
    if ( askSpecial ) {
        charArray.push(specialArr);
    }
    
    let x = 0; // index into charArray
    for (var i=0; i < userLength; i++) {
        var a = charArray[x]; // Which array of chars to look at

        // Insert at random spot:       
        password.splice( password.length, 1, randomCharacter(a));

        // Pick next set of chars:
        if (++x >= charArray.length) {
            x = 0; // Start with the first set of chars if we went past the end
        }
    }
    
    return password.join(''); // Create a string from the array of random chars
}

// 
function generatePassword() {
    // Calls the getLength function to ask for a length
    var userLength = getLength();
    if (userLength == 0) {
        return "User Cancelled Request";
    }

    // Asks a series of Boolean statements to see which arrays to include
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