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

  it("lets a player mark a space", function() {
    var testPlayer = new Player("X");
    var testSpace = new Space(1, 2);
    testSpace.markBy(testPlayer);
    expect(testSpace.markedBy).to.equal(testPlayer.mark);
  });
});

describe('Board', function() {
  it("creates a 3x3 board grid when initialized", function() {
    var testBoard = new Board();
    expect(testBoard.spaces[0][2].coordinates).to.eql([0, 2]);
  });
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
  });

  it("returns whoseturn", function() {
    var newGame = new Game()
    var clare = newGame.player1;
    expect(newGame.whoseTurn()).to.equal(clare);
  });

  it("takes a turn", function() {
    var newGame = new Game()
    var clare = newGame.player1;
    var cory = newGame.player2;
    expect(newGame.turnCount).to.equal(1);
    expect(newGame.whoseTurn()).to.equal(clare);
    newGame.turnCount++;
    expect(newGame.turnCount).to.equal(2);
    expect(newGame.whoseTurn()).to.equal(cory);
  });

  it("marks a space while taking a turn", function() {
    var newGame = new Game()
    var clare = newGame.player1;
    newGame.takeTurn(clare, 0, 2);
    expect(newGame.board.spaces[0][2].markedBy).to.equal(clare.mark);
  });

  it("checks if the current player has won", function() {
    var newGame = new Game();
    var clare = newGame.player1;
    newGame.takeTurn(clare, 0, 0);
    expect(clare.hasWon).to.equal(false);
    newGame.takeTurn(clare, 1, 1);
    newGame.takeTurn(clare, 2, 2);
    expect(clare.hasWon).to.equal(true);
  });
});












//
