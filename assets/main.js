var yourScore = document.getElementById('yourScore');
yourScore.innerHTML = 0; //
var targetScore = document.getElementById('targetScore');
targetScore.innerHTML = getRandomValue(12, 4);

function addToScore(val) {
  var numberToAdd = parseInt(val);
  var currentScore = parseInt(yourScore.innerHTML);
  yourScore.innerHTML = numberToAdd + currentScore;
}





var sapphire = document.getElementById("sapphire");
sapphire.setAttribute("value", "5");
console.log(sapphire.value);

var rose = document.getElementById("rose");

var amethyst = document.getElementById("amethyst");

var opal = document.getElementById("opal");






sapphire.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

rose.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

amethyst.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

opal.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});







function getRandomValue (a, b){
  return Math.floor((Math.random() * a) + b);
}

function checkPlayerScore() {
  var playerInt = parseInt(yourScore.innerHTML);
  var targetInt = parseInt(targetScore.innerHTML);
  if (playerInt === targetInt) {
      alert('You win');
  } else if (playerInt > targetInt) {
    alert('You lose');
  } 
}

console.log(getRandomValue(12, 4));