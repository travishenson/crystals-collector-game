// Initial variables for wins, losses, and score declarations
var wins = 0;
var losses = 0;
var score = 0;

// Variable declarations for Random Number and each crystal
var randNum = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;

// New game function
var newGame = function () {
  // Assign random numbers to crystals
  crystal1 = Math.floor(Math.random() * 12) + 1;
  crystal2 = Math.floor(Math.random() * 12) + 1;
  crystal3 = Math.floor(Math.random() * 12) + 1;
  crystal4 = Math.floor(Math.random() * 12) + 1;

  console.log(crystal1);
  console.log(crystal2);
  console.log(crystal3);
  console.log(crystal4);

  // Reset score
  score = 0;

  // Reset crystal "show"
  $('#crystalScore1').addClass('crystalScore');
  $('#crystalScore2').addClass('crystalScore');
  $('#crystalScore3').addClass('crystalScore');
  $('#crystalScore4').addClass('crystalScore');

  // Assign random number to randNum
  randNum = Math.floor(Math.random() * 101) + 19;

  // Display variables in appropriate HTML placeholders
  $('#randNum').text(randNum);
  $('#yourScore').text(score);
  $('#wins').text(wins);
  $('#losses').text(losses);

  $('#crystalScore1').text('Value: ' + crystal1);
  $('#crystalScore2').text('Value: ' + crystal2);
  $('#crystalScore3').text('Value: ' + crystal3);
  $('#crystalScore4').text('Value: ' + crystal4);
};

// Check score function
var checkScore = function () {
  if (score === randNum) {
    wins++;
    newGame();
  } else if (score > randNum) {
    losses++;
    newGame();
  };
}

// Manual reset function
var manualReset = function () {
  $('.reset').click(function () {
    wins = 0;
    losses = 0;
    newGame();
  })
}

// Call newGame
newGame();

// Add value of each crystal to score on click
$('#crystal1').click(function () {
  console.log('Click works');
  $('#crystalScore1').removeClass('crystalScore');
  score += crystal1;
  $('#yourScore').text(score);
  checkScore();
});

$('#crystal2').click(function () {
  console.log('Click works');
  $('#crystalScore2').removeClass('crystalScore');
  score += crystal2;
  $('#yourScore').text(score);
  checkScore();
});

$('#crystal3').click(function () {
  console.log('Click works');
  $('#crystalScore3').removeClass('crystalScore');
  score += crystal3;
  $('#yourScore').text(score);
  checkScore();
});

$('#crystal4').click(function () {
  console.log('Click works');
  $('#crystalScore4').removeClass('crystalScore');
  score += crystal4;
  $('#yourScore').text(score);
  checkScore();
});

// Call reset
manualReset();
