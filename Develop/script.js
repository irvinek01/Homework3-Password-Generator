// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // Pops prompt box with an input textbox
  var userpwLength = window.prompt("How many characters would you like your Password to contain?"+
  "\nChoose at least 8 characters length" +
  "\nAnd no more than 128 characters length");

  // CHECKS if user did not enter anything
  // CHECKS if user did put number 7 or less
  // CHECKS if user did put number 129 or more
  // CHECKS if user did put number 8 - 128
  // CHECKS else, user put something that is not a number
  if (userpwLength == null || userpwLength == "") {
    alert("You did not enter anything");
  } else if (parseInt(userpwLength) <= 7) {
    alert("Password should be at least 8 or more characters!");
  } else if (parseInt(userpwLength) >= 129) {
    alert("Maximum is 128 characters!");
  } else if(parseInt(userpwLength) >= 8 && 
  parseInt(userpwLength) <= 128) {

    console.log(userpwLength);

    // 4 consecutive confirm popups, acts like checkboxes, results are True/False
    var lowerCharBoolean = confirm("Click OK to confirm including LOWERCASE Characters");
    var upperCharBoolean = confirm("Click OK to confirm including UPPERCASE Characters");
    var numericCharBoolean = confirm("Click OK to confirm including NUMERIC Characters");
    var specialCharBoolean = confirm("Click OK to confirm including SPECIAL Characters");

    // CHECKS if the 4 booleans above are all False
    if (!lowerCharBoolean && !upperCharBoolean && !numericCharBoolean && !specialCharBoolean) {
      alert("YOU MUST SELECT ONE CHARACTER CRITERIA");
      return false;
    }

    console.log(lowerCharBoolean);
    console.log(upperCharBoolean);
    console.log(numericCharBoolean);
    console.log(specialCharBoolean);

    // Reference
    // https://stackoverflow.com/questions/1497481/javascript-password-generator
    // 3rd Answer post, 31 Vote as of 18 MAR 21
    // Answered by user "hajikelist" and edited by "Bruno Bronosky"

    pwLength = userpwLength;
    var upString = upperCharBoolean ? ("abcdefghijklmnopqrstuvwxyz").toUpperCase() : "";
    var lowString = lowerCharBoolean ? "abcdefghijklmnopqrstuvwxyz" : "";
    var numeric = numericCharBoolean ? "0123456789" : "";
    var special = specialCharBoolean ? "!@#$%^&*()_+~`|}{[]\:;?><,./-=" : "";
    var password = "";
    var character = "";
    // if (numericCharBoolean) {
    //   numeric="0123456789";
    // } else {
    //   numeric="";
    // }  is equivalent to numericCharBoolean ? "0123456789" : "";

    while( password.length<pwLength ) {
      
        //Generate random characters based on pwLength
        lowCaseChar = Math.ceil(lowString.length * Math.random()*Math.random());
        numericChar = Math.ceil(numeric.length * Math.random()*Math.random());
        specialChar = Math.ceil(special.length * Math.random()*Math.random());
        upCaseChar = Math.ceil(upString.length * Math.random()*Math.random());   

        // Concatenates every 
        character += lowString.charAt( lowCaseChar );
        character += numeric.charAt( numericChar );
        character += special.charAt( specialChar );
        character += upString.charAt( upCaseChar );

        password = character;
    }

    console.log(password);
    // Jumbles the characters
    password=password.split("").sort(function(){return 0.5-Math.random()}).join("");
    
    console.log(password.substr(0,pwLength));
    document.getElementById("password").placeholder = (password.substr(0,pwLength));

  } else {
    alert("You entered something that is not a number!");
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


