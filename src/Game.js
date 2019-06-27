const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = 1
  }

  printMessage(deck, round) {
      console.log(`\x1b[96m***------Welcome to FlashCards! This is \x1b[31mRound ${this.currentRound}\x1b[96m, you are playing with ${deck.countCards()} cards.------***\x1b[34m
-----------------------------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start(){
    const cards = prototypeQuestions.map((quest) => {
      let card = new Card(quest.id, quest.question, quest.answers, quest.correctAnswer);
      return card;
      });
    
    const deck = new Deck(cards);
    const round = new Round(deck);

    this.printMessage(deck, round);
    this.printQuestion(round)
  }
}

module.exports = Game;