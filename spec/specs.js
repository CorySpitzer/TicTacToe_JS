describe('Player', function(){
  it("returns the player's mark", function(){
    var testPlayer = new Player("X");
    expect(testPlayer.mark).to.equal("X");
  });
});

describe('Space', function() {
  it("returns the x-coordinate", function() {
    var testSpace =new Space(1,2);
    expect(testSpace.xCoordinate).to.equal(1);
  });

  it("returns the y-coordinate", function() {
    var testSpace =new Space(1,2);
    expect(testSpace.yCoordinate).to.equal(2);
  });

  // it("returns both the x and y coordinates", function() {
  //   var testSpace = new Space(1,2);
  //   expect(testSpace.coordinates()).to.eql([1,2]);
  // });

  it("lets a player mark a space", function() {
    var testPlayer = new Player("X");
    var testSpace = new Space(1, 2);
    testSpace.mark_by(testPlayer);
    expect(testSpace.markedBy).to.equal(testPlayer.mark);
  });

});

describe('Board', function() {
  it("creates a 3x3 board grid when initialized", function() {
    var testBoard = new Board();
    expect(testBoard.spaces[0][2].coordinates).to.eql([0, 2]);
  });


  // it("determines if a player has won", function() { Testing winCondition
  //   var testBoard = new Board();
  //   var testPlayer = new Player("X");
  //   testBoard.find(1,1).mark_by(testPlayer);
  //   testBoard.find(1,2).mark_by(testPlayer);
  //   testBoard.find(1,3).mark_by(testPlayer);
  //   expect(testBoard.turn(testPlayer)).to.equal("X wins!");
  // });
});

describe('Game', function() {
  it("initializes a game", function() {
    var newGame = new Game();
    var clare = newGame.player1;
    var cory = newGame.player2;
    expect(newGame.player1).to.equal(clare);
    expect(newGame.player2).to.equal(cory);
  });

  it("has a board", function() {
    var newGame = new Game();
    var myBoard = new Board()
    expect(newGame.board).to.eql(myBoard);
    // expect(clare.game).to.equal(newGame);
    // expect(newGame.winner).to.equal('none');
  });

  it("returns whoseturn", function() {
    var newGame = new Game()
    var clare = newGame.player1;
    expect(newGame.whoseTurn()).to.equal(clare);
  });

  // it("takes a turn", function() {
  //   var newGame = new Game()
  //   var clare = newGame.player1;
  //   var cory = newGame.player2;
  //   expect(newGame.turnCount).to.equal(1);
  //   expect(newGame.whoseTurn).to.equal(clare);
  //   newGame.turnCount++;
  //   expect(newGame.turnCount).to.equal(2);
  //   expect(newGame.whoseTurn).to.equal(cory);
  // });


  // var newGame = new Game()
  // var clare = newGame.player1;
  // var cory = newGame.player2;
  // newGame.play()
});












//
