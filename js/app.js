'use strict';

console.log('This file is connected.');
startGuessing();

function startGuessing() {

  var yourName = prompt('What is your name?');
  console.log(yourName);
  alert(yourName + ' How are you Buddy? ');
  askOne();
  askTwo();
  askThree();
  askFour();
  askFive();

}

function askOne() {
  var guessOne = prompt('Do I have two brothers?');

  var correctOne = guessOne.toLowerCase().trim();

//   console.log(correctOne);

  if (correctOne === 'yes' || correctOne === 'y') {
    alert('you got it dude!');
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

//   console.log(correctTwo);

  if (correctTwo ==='yes' || correctTwo ==='y') {
    alert('no way but it was in the south Florida!');
    askTwo();
  } else if(correctTwo === 'no' || correctTwo === 'n') {
    alert('it feels like you know me already!');
  } else {
    alert('still the same as the first question y , n , yes , no only!');
    askTwo();
  }

}

function askThree() {
  var guessThree = prompt('The warriors are my favorite team?');
  
  var correctThree = guessThree.toLowerCase().trim();

//   console.log(correctThree);

  if (correctThree === 'yes' || correctThree ==='y') {
    alert('of course not c\'mon');
    askThree();
  } else if(correctThree === 'no' || correctThree === 'n') {
    alert('steph who?');
  } else {
    alert('things have not changed');
    askThree();
  }

}

function askFour() {
  var guessFour = prompt('I have 5 children');

  var correctFour = guessFour.toLowerCase().trim();

//   console.log(correctFour);

  if (correctFour === 'yes' || correctFour === 'y') {
    alert('only two little angels lol');
    askFour()    
  } else if(correctFour === 'no' || correctFour === 'n') {
    alert('Big Facts!');
  } else {
    alert('another reminder of y n yes or no is strange!');
    askFour()
  }
}

function askFive() {
  var guessFive = prompt('I have met Snoop Dogg Twice!');

  var correctFive = guessFive.toLowerCase().trim();

//   console.log(correctFive);

  if (correctFive === 'no' || correctFive === 'n') {
    alert('he is taller in person trust me!');
    askFive()
  } else if(correctFive === 'yes' || correctFive === 'y') {
    alert('fan forever!');
  } else {
    alert('last one and you still need help lol!');
  }
}














































































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
