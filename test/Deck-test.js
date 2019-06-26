const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck')
//const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Deck', function() {

  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it('should return number of cards in deck', function() {
    const deck = new Deck([card1, card2, card3]);
    expect(deck.countCards()).to.equal(3);
  });  

  it('should return number of cards in deck', function() {
    const deck = new Deck([card1, card2, card3]);
    expect(deck.countCards()).to.not.equal(6);
  }); 

  it('should return number of cards in deck', function() {
    const deck = new Deck([card1, card2, card3, card1, card2, card3]);
    expect(deck.countCards()).to.equal(6);
  }); 
});