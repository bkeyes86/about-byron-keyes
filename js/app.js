/* eslint-disable no-undef */
/* eslint-disable indent */
'use strict';

console.log('This file is connected.');
startGuessing();

function startGuessing() {

    var yourName = prompt('What is your name?');
    console.log(yourName);
    alert(yourName + ' How are you Buddy? ');
  var userPoints = 0;
    askOne();
    askTwo();
    askThree();
    askFour();
    askFive();
    askSix();
    askSeven();
}

function askOne() {
  var guessOne = prompt('Do I have two brothers?');

  var correctOne = guessOne.toLowerCase().trim();

  //   console.log(correctOne);

  if (correctOne === 'yes' || correctOne === 'y') {
    alert('you got it dude!');
    userPoints +=1;
  } else if(correctOne === 'no' || correctOne === 'n') {
    alert('Nah');
    alert('try again');
    askOne();
  } else {
    alert('only yes no y or n please and thank you!');
    askOne();
  }

}

function askTwo() {
  var guessTwo = prompt('Did I live in Alabama?');

  var correctTwo = guessTwo.toLocaleLowerCase().trim();

    console.log(correctTwo);

  if (correctTwo ==='yes' || correctTwo ==='y') {
    alert('no way but it was in the south Florida!');
    askTwo();
  } else if(correctTwo === 'no' || correctTwo === 'n') {
    alert('it feels like you know me already!');
      userPoints +=1;
  } else {
    alert('still the same as the first question y , n , yes , no only!');
    askTwo();
  }

function askFour() {
  var guessFour = prompt('I have 5 children');

  var correctFour = guessFour.toLowerCase().trim();

  //   console.log(correctFour);

  if (correctFour === 'yes' || correctFour === 'y') {
    alert('only two little angels lol');
    askFour();
  } else if(correctFour === 'no' || correctFour === 'n') {
    alert('Big Facts!');
    userPoints +=1;
  } else {
    alert('another reminder of y n yes or no is strange!');
    askFour();
  }
}

function askFive() {
  var guessFive = prompt('I have met Snoop Dogg Twice!');

  var correctFive = guessFive.toLowerCase().trim();

  //   console.log(correctFive);

  if (correctFive === 'no' || correctFive === 'n') {
    alert('he is taller in person trust me!');
    askFive();
  } else if(correctFive === 'yes' || correctFive === 'y') {
    alert('fan forever!');
    userPoints +=1;
  } else {
    alert('last one and you still need help lol!');
  }
}


function askSix() {
    for(var i = 0; i < 4; i++){
    var question = prompt('what is my birth month by number 1 - 12?');
    var answer = Number(question);

   if( answer > 10 ){
   alert('Too High guess lower');
//    askSix();
   }
   else if(answer < 10){
      alert('Too Low guess higher');
    //    askSix();
   }
   else if(answer === 10){
      alert('Octobers very Own');
      userPoints +=1;
      break;
   }
   else{
      alert('Please enter Numbers only');
      askSix();
   }
  }//closes for loop
}//closes function

    // eslint-disable-next-line no-undef
    // eslint-disable-next-line for-direction













function askSeven() {
    var guesses = 0;
    var foods = ['tacos', 'pizza', 'burgers', 'steak', 'ice cream'];

    while (guesses < 6) {
        var food2 = prompt('what are my favorite foods?').toLowerCase().trim();
        // var answer = food2;
        var right = false;
        if (!food2) {
          break;
        }

        for(var i = 0; i < foods.length; i++){
            if(food2 === foods[i]) {
                alert('yum, ' + foods[i] + ' do you like them too?');
                right = true;
                userPoints +=1;
                break;
            } else {
                console.log('wrong answer');
            }
        }
        if(right === false) {
            alert('yuck no way am I eating that!');
        } else {
          break;
        }
        guesses +=1;
    }
    alert('I like to eat tacos, pizza, burgers, and steak');
  }

}






// As a user, I would like to view a series of data related to the site owners interest so that the I can quickly view more information about them.
// Create a “Top Ten” at the bottom of your HTML page as an ordered list in HTML. Some ideas that you can include could be top ten movies, top ten favorite places, or top ten places to visit. You may choose to do whatever top ten list that you wish.
// Convert your work experience and education summary into an unordered list using HTML

// As a user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.
// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

// As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.

// As a user, I would like to know my final score so that I can know how well I did.
// Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.
// In addition to the user stories stated above, continue to use console.logs throughout the code to track the questions that are being asked to the user, and add addtional CSS to style your HTML page.

// Stay within scope of what was taught so far in class. Do not write functions within your application. Avoid the use of “helper” methods such as .includes() and .join(). Work with the instructional staff directly if you have questions about this requirement.















































































//prompt our user for input data
// var userName = prompt('What is your name?');
// console.log(userName);

//Greet the user
// alert('Hello ' + userName);

// //convert the input to lowerCase
// var lowerCaseName = userName.toLowerCase();
// console.log(lowerCaseName);

// //Validate the input using conditional logic using strict equals.
// if(lowerCaseName === 'craig' || lowerCaseName === 'bob') {
//   alert('Welcom back to my page, ' + userName);
// } else {
//   alert('Welcome new user to my page.');
// }


// logical operator example
// var myBooleenValueTrue = true;
// var anotherBooleenValueFalse = false;
// var thirdBooleenValueTrue = true;
//else if
// var myBooleenValueTrue = true;
// var anotherBooleenValueFalse = false;
// var thirdBooleenValueTrue = false;
//next else if
// var myBooleenValueTrue = false;
// var anotherBooleenValueFalse = false;
// var thirdBooleenValueTrue = true;
//else
// var myBooleenValueTrue = false;
// var anotherBooleenValueFalse = false;
// var thirdBooleenValueTrue = false;

// if (myBooleenValueTrue && thirdBooleenValueTrue){
//   alert('The && will run if both are true');
//   console.log('both values were true');
// } else if(myBooleenValueTrue || anotherBooleenValueFalse){
//   alert('The || will run if both are true');
//   console.log('one of values was true');
// } else if(thirdBooleenValueTrue){
//   alert('the 3rd value was tru so this will run');
//   console.log('thirdBooleenValueTrue was true');
// } else {
//   console.log('There were no true values');
// }


//create an empty array
// var emptyArray = [];
//Create an array full of "quiz answers" by putting the answers into the array
//                 0   1   2   3   4
// var quizAnswer = ['b','c','d','a','c'];

//nested array
// var nestedArray = [['yes', 'y'], ['no', 'n'],['maybe', 'maybeNot']];

//multiline
// var nestedArrayMultiLine  = [
//   ['yes', 'y'],
//   ['no', 'n'],
//   ['maybe', 'maybeNot']
// ];

// we don't always have to commit to a specific data type
// var mixedDataTypes = ['Harry', 'Potter', 10, true, 'magic'];
