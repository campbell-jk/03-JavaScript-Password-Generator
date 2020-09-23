///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

// WHEN I click the button to generate a password


function generatePassword() {
  //  prompts for password criteria
  // length of the password
  // restr.. later 8 characters and no more than 128 characters

  // lowercase,
  //var isLower = confirm("is lower");
  // if (isLower) {
  userPassword.push(lowerArr);

  //}
  //uppercase,
  var isUpper;
  userPassword.push(upperArr);

  //numeric,
  var isNum;
  //special characters
  var isSpecial;
  var userpw;

  //masterarray is build

  for (var i = 0; i < userlength; i++) {
    if (i < userlength) {
    //  // userPassword[i][]
    // }
    // console.log(Math.floor(Math.random() * (userPassword[0].length - 0)) + 0);
    console.log(
      userPassword[i][
        Math.floor(Math.random() * (userPassword[i].length - 0)) + 0
      ]
    );
    } else {
     // var currarray=a random val btwn 0 and userPassword.length-1

      //userPassword[currarray][btwn 0 andcurrarr.length-1]
      // console.log(
      //   userPassword[Math.floor(Math.random() * ((userPassword.length - 1)) - 0 + 1) + 0
      //   ]
      // [
      //     Math.floor(Math.random() * (max - min + 1)) + min
      //   ]
      // );
      
  }

  // later ..THEN my input should be validated and at least one character type should be selected

  // THEN a password is created based on data
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
