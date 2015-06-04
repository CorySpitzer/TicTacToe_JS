
turnCount = 0; //add var?
// function Player(mark) {


var Player = function(mark) {
  this.mark = mark;
  this.won = false;
}

var Space = function(x, y) {
  this.xCoordinate = x;
  this.yCoordinate = y;
  this.coordinates = [x,y]
  this.markedBy = false;
}

// Space.prototype.coordinates = function() {
//   return [this.xCoordinate, this.yCoordinate];
// }

Space.prototype.mark_by = function(player) {
  this.markedBy = player.mark;
}

var Board = function() {

  this.spaces = [];

  for (var x=0; x <= 2; x++) {
    this.spaces[x] = [];
    for (var y=0; y <= 2; y++) {
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
  this.player1 = new Player("X");
  this.player2 = new Player("O");
  this.board = new Board();
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
