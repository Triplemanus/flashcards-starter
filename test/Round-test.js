const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck')
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Round', function() {

  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  }); 

  const deck = new Deck([card1, card2, card3]);
  const round = new Round(deck);
  it('should return the first card in a deck', function() {
 //const deck = new Deck([card1, card2, card3]);
//const round = new Round(deck);
    expect(round.deck.cards[0]).to.deep.equal({ id: 1,
      question: 'What is Robbie\'s favorite animal',
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter' 
      });
  });  

  it('should return number of turns taken', function() {
    expect(round.turns).to.equal(0);

    expect(round.takeTurn('sea otter')).to.equal('Correct!');
    expect(round.takeTurn('spleen')).to.equal('Incorrect!');
    expect(round.takeTurn('listening to music')).to.equal('Incorrect!');

    expect(round.turns).to.equal(3);

  }); 

  it('when a guess is made, a new Turn is created', function() {
    expect(round.takeTurn('sea otter')).to.equal('Correct!');
    expect(round.takeTurn('spleen')).to.equal('Incorrect!');
    expect(round.takeTurn('listening to music')).to.equal('Incorrect!');
  })
  it('should return array of incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  }); 
 
  it('it should return message indicating correct guess', function() {
    expect(round.takeTurn('sea otter').to.equal('Correct!'));
  });

});