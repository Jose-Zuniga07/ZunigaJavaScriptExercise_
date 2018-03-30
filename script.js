// ----Exercise 1 prompt user for number and get an output----//
var userN = prompt("Welcome user, please choose a Number")

var total = 0;

for (var num = 1; num < userN; num++) {
    total = total + num;
}
console.log("Output:" + total);

// ----Exercise 2 do...while loop----//

// ask user if they want to play
var answer = prompt("do you want to play?");
// did toUpperCase incase if they entered it caps
if (answer.toUpperCase() === 'yes'); {
    // ask user for word
    var word = prompt("Enter a word");
}
if (word === 'word'); {
    // ask user if they want to play again
    var again = prompt("do you want to play again?");
}
if (again === 'yes'); {
    // ask user for word2
    var word2 = prompt("Enter a word")
}
if (word2 === 'word2'); {
    // ask user if they want to play again  
    var askAgain = prompt("do you want to play again?");
}
if (askAgain !== 'yes'); {
    console.log(word + ' ' + word2);
}

// ---Exercise 3 write a while loop---//
//working on it when i wake up


// ask user to print name
var printName = prompt("Would you like to print your name?");

var exMark = '!';

var answer = "yes";

while (printName === answer); {
    // ask user for name
    var userName = prompt("what is your name?");
    console.log("Hello. " + "My name is " + userName);
    // ask user if they wish to continue
    printName = prompt("Would you like to print your name again?");
    console.log("Hello. " + "My name is " + userName + "!");
    console.log("Hello. " + "My name is " + userName + exMark + exMark);
    console.log("Hello. " + "My name is " + userName + exMark + exMark + exMark);
}

// ----Exercise 4 prompt user for time of day----//
var timeOfDay = prompt("what time of day is it?");

var dayMorning = "morning"

if (timeOfDay == "morning") {
    console.log("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
} else if (timeOfDay == "noon") {
    console.log("Since it is noon, you should be eating lunch. We suggest a salad.");
} else if (timeOfDay == "evening") {
    console.log("Since it is evening, you should be eating dinner. We suggest chicken and rice.");
}