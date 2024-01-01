// Array/List 
var specialCharacters = [
    "!", 
    "@",
    "#", 
    "$", 
    "%", 
    "^", 
    "&", 
    "*", 
    "(", 
    ")", 
    "-", 
    "_", 
    "+", 
    "=", 

]

var numericChacters = [
    "0", 
    "1", 
    "2", 
    "3", 
    "4", 
    "5", 
    "6", 
    "7", 
    "8", 
    "9",

]

var lowerCasedCharacters = [

    "a", 
    "b", 
    "c", 
    "d", 
    "e", 
    "f", 
    "g", 
    "h", 
    "i", 
    "j", 
    "k", 
    "l", 
    "m", 
    "n", 
    "o", 
    "p", 
    "q", 
    "r", 
    "s", 
    "t", 
    "u", 
    "v", 
    "w", 
    "x", 
    "y", 
    "z",

]

var upperCasedCharacters = [
    "A",
    "B",
    "C",
    "D", 
    "E", 
    "F", 
    "G", 
    "H", 
    "I", 
    "J", 
    "K", 
    "L", 
    "M", 
    "N", 
    "O", 
    "P", 
    "Q", 
    "R", 
    "S", 
    "T", 
    "U", 
    "V", 
    "W", 
    "X", 
    "Y", 
    "Z",
]

// Assignment code here


function getPasswordOptions() {

    var length = parseInt(prompt("How many characters would you like in your password?"), 10);

    if(Number.isNaN(length)){

        alert("Password length must be provided as a number")
        return null
    };

    if(length < 8){
        alert("Password must be 8 characters long")
        return null
    }

    if(length > 128){
        alert("Password CANNOT be longer than 128 characters")
        return null
    }

    var hasSpecialCharacters = confirm(
        "Click ok to confirm Special Characters"
    )

    var hasNumericCharacters = confirm(
        "Click ok to confirm Numeric Charaters"
    )


    var hasLowerCasedCharacters = confirm(
        "Click ok to confirm Lower Cased Characters"
    )

    var hasUpperCasedCharacters = confirm(
        "Click ok to confirm Upper Cased Characters"
    )

    if(hasSpecialCharacters === false &&
        hasNumericCharacters === false &&
        hasLowerCasedCharacters === false &&
        hasUpperCasedCharacters === false 
        )
         {
            alert("Must select at least one character type")
            return null
        }


        var passwordOptions = {
            length: length,
            hasSpecialCharacters: hasSpecialCharacters,
            hasNumericCharacters: hasNumericCharacters,
            hasLowerCasedCharacters: hasLowerCasedCharacters,
            hasUpperCasedCharacters: hasUpperCasedCharacters,
        }

        return passwordOptions;

}

function getRandom(arr) {
    var randomIndex = Math.floor(Math.random()* arr.length);
    var randomElement = arr[randomIndex];
    return randomElement;

}


function generatePassword() {

    var options = getPasswordOptions();
    var results = []
    var possibleCharacters = []
    var guaranteedCharacters = [];
    if(!options) return null;
    if(options.hasSpecialCharacters){
        possibleCharacters = possibleCharacters.concat(specialCharacters)
        guaranteedCharacters.push(getRandom(specialCharacters));
    }
    if(options.hasNumericCharacters){
            possibleCharacters = possibleCharacters.concat(numericChacters)
            guaranteedCharacters.push(getRandom(numericChacters));
    }
    if(options.hasLowerCasedCharacters){
                possibleCharacters = possibleCharacters.concat(lowerCasedCharacters)
                guaranteedCharacters.push(getRandom(lowerCasedCharacters));
    }
    if(options.hasUpperCasedCharacters){
                    possibleCharacters = possibleCharacters.concat(upperCasedCharacters)
                    guaranteedCharacters.push(getRandom(upperCasedCharacters));
    }
     for(var index = 0; index < options.length; index++){

     var possibleCharacter = getRandom(possibleCharacters);
     results.push(possibleCharacter);

     }
    for(var index = 0; index < guaranteedCharacters.length; index++){
        results[index] = guaranteedCharacters[index];
    }

    return results.join("")

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);