
turnCount = 0; //add var?
// function Player(mark) {


var Player = function(mark) {
  this.mark = mark;
  this.won = false;
}

var Space = function(xCoordinate, yCoordinate) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.markedBy = false;
}

Space.prototype.coordinates = function() {
  return [this.xCoordinate, this.yCoordinate]; //can we combine this with the Space consructor?
}

Space.prototype.mark_by = function(Player) {
  this.markedBy = Player
  return this.markedBy;
}

var Board = function() {
  this.width = 3;
  this.height = 3;

  this.spaces = [];
  var x, y;
  for (x=1; x <= this.width; x++) {
    this.spaces[x] = [];
    for (y=1; y <= this.height; y++) {
      this.spaces[x][y] = new Space(x, y);
    }
  }
}

Board.prototype.find = function(x,y) {
  return this.spaces[x][y];
}

// Yikes, we dont even know about this .turn
Board.prototype.turn = function(player) {
  if (turnCount > 9) {
    alert("Game ends in a tie.");
  } else if (turnCount % 2 === 0) {
    console.log("Player X's turn");

  //  player marks something
  //   SPACEID.mark_by(player)
    if (player.winCondition){  //winCondition is supposed to be called on a board, not a player?
                                //The player is the parameter of winCondition?

      return player.mark + " has won!";

    } else {
      console.log("Player O's turn");
      this.turn(player2);
    };
  };
  space.mark_by(player);
};

Board.prototype.winCondition = function(player) {
  if (((this.spaces[1][1].markedBy === player) && (this.spaces[2][1].markedBy === player) && (this.spaces[3][1].markedBy === player))
    || ((this.spaces[2][1].markedBy === player) && (this.spaces[2][2].markedBy === player) && (this.spaces[3][2].markedBy === player))
    || ((this.spaces[3][1].markedBy === player) && (this.spaces[3][2].markedBy === player) && (this.spaces[3][3].markedBy === player))
    || ((this.spaces[1][1].markedBy === player) && (this.spaces[1][2].markedBy === player) && (this.spaces[1][3].markedBy === player))
    || ((this.spaces[2][1].markedBy === player) && (this.spaces[2][2].markedBy === player) && (this.spaces[2][3].markedBy === player))
    || ((this.spaces[3][1].markedBy === player) && (this.spaces[3][2].markedBy === player) && (this.spaces[3][3].markedBy === player))
    || ((this.spaces[1][1].markedBy === player) && (this.spaces[2][2].markedBy === player) && (this.spaces[3][3].markedBy === player))
    || ((this.spaces[3][1].markedBy === player) && (this.spaces[2][2].markedBy === player) && (this.spaces[1][3].markedBy === player))) {

      return player.won = true;
  }

  turnCount++;
  console.log("End.");
}

var Game = function() {
  var board = new Board();
  var player1 = new Player("X"), player2 = new Player("O");
}
















//None of this functions yet!
$(document).ready(function(){

  $("btn#newgame").submit(function(event) {
    event.preventDefault();
    var newGame = new Game();

    $("#one").click(function() {
      alert("You clicked on " + this);
    });

    // $("#game").click(function() {
    //   var ??= game.children()
    //   document.getElementById("game#li")
    //   player.mark_by(square);
    // })


  })



})
