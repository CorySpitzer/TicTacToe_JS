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

// Space.prototype.coordinates = function() {
//   return [this.xCoordinate, this.yCoordinate];
// }

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

// Board.prototype.find = function(x,y) {
//   return this.spaces[x][y];
// };

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

// Game.prototype.play = function() {
//   var moveList = [[0,0], [1,2], [1,1], [2,1], [2,2]]; //add user input jquery
//   for (this.turnCount = 1; this.turnCount<=9; this.turnCount++) {
//     // debugger;
//     var move = moveList[this.turnCount - 1];
//     this.takeTurn(this.whoseTurn, move[0], move[1]);
//     debugger;
//     if (this.whoseTurn.hasWon) {
//       break;
//     };
//   };
// };

Game.prototype.takeTurn = function(player, x, y) {
  // debugger;
  this.board.spaces[x][y].markBy(player);
  this.board.winCondition(player);
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

// document.ready
//   jquery blah blah
//   game = new Game



//
//
//
//
//
//
//
//
//
//
//
//
//
// //None of this functions yet!
// $(document).ready(function(){
//
//   $("btn#newgame").submit(function(event) {
//     event.preventDefault();
//     var newGame = new Game();
//
//     $("#one").click(function() {
//       alert("You clicked on " + this);
//     });
//
//     // $("#game").click(function() {
//     //   var ??= game.children()
//     //   document.getElementById("game#li")
//     //   player.markBy(square);
//     // })
//
//
//   });
//
//
//
// });
