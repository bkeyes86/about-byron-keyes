function askSix() {

  var question = prompt('what is my birth month by number 1 - 12?');

  var answer = Number(question);
  var month = 10;
  var rounds = 4;

  if (answer > month) {
   alert('nope lower ');
   askSix();
  } else if(answer < month) {
      alert('nope higher');
      askSix();
  } else if (answer === month) {
      alert('octobers very own');
  } else {
      alert('answer needs a number');
      askSix();
  }

  // eslint-disable-next-line no-undef
  // eslint-disable-next-line for-direction
  for(var i = 0; i > question; i++) {
      alert('that is four try again it is 10!');
      console.log('loop');
  }
//   var el = document.getElementById('correct');
//   el.innerHTML = msg;

}

function askSeven() {
    var q2 = prompt('what are my favorite foods?');

    var favoriteFoods;

    foods.length;

}
