var BowlingFrame = function(number) {

  this.number = number;
  this.rollIndex = 0;

  if (number !== 1 && game.newGame[1] === [null,null]) {
    throw new Error("You must add to frame one first");
  };
  if ( number !== 1 && game.newGame[number - 1][0] == null ) {
    throw new Error("You must add to frames in order");
  };
  if ( number > 10 ) {
    throw new Error("There are only ten frames");
  };
};

BowlingFrame.prototype.rollOne = function(input) {
  number = this.number;
  if (game.newGame[number][0] != null ) {
    throw new Error("You already have a score here");
  };
  if (input > 10 || input < 0) {
    throw new Error("Roll must be between 0 and 10");
  } else {
    rollIndex = this.rollIndex;
    game.newGame[number][0] = input;
  };
};

BowlingFrame.prototype.rollTwo = function(input) {
  number = this.number;
  rollIndex = 1;
  if (game.newGame[number][0] == null ) {
    throw new Error("You must add to frame one, roll one first");
  };
  if (game.newGame[number][1] != null ) {
    throw new Error("You already have a score here");
  };
  if (game.newGame[number][0] === 10) {
    throw new Error("You got a strike in this frame, well done!");
  } else if (input > (10 - game.newGame[number][0]) || input < 0) {
    throw new Error("Roll must be between 0 and " + (10 - game.newGame[number][0]));
  } else {
    game.newGame[number][1] = input;
  };
};

