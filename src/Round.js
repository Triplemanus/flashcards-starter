class Round {
  constructor(deck) {
this.deck = deck,
this.turns = 0,
this.incorrectGuesses = [],
this.currentCardIndex = 0
  }

  returnCurrentCard(){
    return this.deck.cards[this.currentCardIndex];
  }

  takeTurn(newGuess) {
    this.turns++;
    const Turn = require('../src/Turn');
    const turn = new Turn(newGuess, this.deck.cards[this.currentCardIndex]);
    //console.log(this.deck.cards[this.currentCardIndex].correctAnswer);
    this.currentCardIndex++;
    const answer = turn.giveFeedback(newGuess);
    if(answer === 'Incorrect!') {
      this.incorrectGuesses.push(this.deck.cards[this.currentCardIndex].id);
    }
    return answer;
  }

  calculatePercentCorrect() {
    return Math.round((1 - this.incorrectGuesses.length / this.turnCount)* 10000)/100;
  }

  calculatePercentCorrect() {
    return Math.round((1 - this.incorrectGuesses.length / this.turns)* 10000)/100;
  }
  endRound(){
    let correctPercentage = this.calculatePercentCorrect();
    if(correctPercentage >= 85) {
    console.log('\n  *** Round Over! ***   \x1b[30mYou answered \x1b[35m' + correctPercentage + '%\x1b[30m of the questions correctly!\n\n\n  \x1b[97m@@@---You rock!---@@@\n\n \x1b[35m');
    setTimeout((() => {  
      return process.exit(0);
  }), 1500);
    } else {
    console.log('\nYou answered \x1b[35m' + correctPercentage + '%\x1b[30m of the questions correctly! Unfortunately, that\'s not good enough. Try, try again.\n');
    const Game = require('../src/Game');
    const game = new Game();
    game.start();
    }
  }
}

module.exports = Round;