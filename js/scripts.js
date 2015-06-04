var Player = function(mark) {
  this.mark = mark;
  this.hasWon = false;
};

var Space = function(x, y) {
  this.xCoordinate = x;
  this.yCoordinate = y;
  this.coordinates = [x,y];
  this.markedBy = false;
};

// TODO: change parameter to just the mark string
Space.prototype.markBy = function(player) {
  this.markedBy = player.mark;
};

var Board = function() {

  this.spaces = [];

  for (var x=0; x <= 2; x++) {
    this.spaces[x] = []; //one array for each row. each array has three spaces.
    for (var y=0; y <= 2; y++) {
      this.spaces[x][y] = new Space(x, y);
    };
  };
};

var Game = function() {
  var board = new Board();
  this.player1 = new Player("X");
  this.player2 = new Player("O");
  this.board = new Board();
  this.turnCount = 1;
};

Game.prototype.whoseTurn = function() {
  if (this.turnCount % 2 !== 0) {
    return this.player1;
  } else {
    return this.player2;
  };
};

Game.prototype.takeTurn = function(player, x, y) {
  // debugger;
  this.board.spaces[x][y].markBy(player);
  this.board.winCondition(player);
  this.turnCount++;
};

Board.prototype.winCondition = function(player) {

  if (((this.spaces[0][0].markedBy === player.mark) && (this.spaces[1][0].markedBy === player.mark) && (this.spaces[2][0].markedBy === player.mark))
    || ((this.spaces[1][0].markedBy === player.mark) && (this.spaces[1][1].markedBy === player.mark) && (this.spaces[2][1].markedBy === player.mark))
    || ((this.spaces[2][0].markedBy === player.mark) && (this.spaces[2][1].markedBy === player.mark) && (this.spaces[2][2].markedBy === player.mark))
    || ((this.spaces[0][0].markedBy === player.mark) && (this.spaces[0][1].markedBy === player.mark) && (this.spaces[0][2].markedBy === player.mark))
    || ((this.spaces[1][0].markedBy === player.mark) && (this.spaces[1][1].markedBy === player.mark) && (this.spaces[1][2].markedBy === player.mark))
    || ((this.spaces[2][0].markedBy === player.mark) && (this.spaces[2][1].markedBy === player.mark) && (this.spaces[2][2].markedBy === player.mark))
    || ((this.spaces[0][0].markedBy === player.mark) && (this.spaces[1][1].markedBy === player.mark) && (this.spaces[2][2].markedBy === player.mark))
    || ((this.spaces[2][0].markedBy === player.mark) && (this.spaces[1][1].markedBy === player.mark) && (this.spaces[0][2].markedBy === player.mark))) {

    player.hasWon = true;
  };
};

$(function(){
  var newGame = new Game();
  $('li#one').click(function() {
    alert('clicked!');
    var mark = newGame.whoseTurn().mark;
    alert(mark);
    newGame.takeTurn(newGame.whoseTurn(), 0, 0);
    $('#one').text(mark);
  });

});
