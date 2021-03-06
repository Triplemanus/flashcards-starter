const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Game', function() {
  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of a game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });
  it('should kick off a game!', function() {
    const game = new Game();
    const gameStart = game.start();
  });
});