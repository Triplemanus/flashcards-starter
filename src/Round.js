class Round {
  constructor(deck, roundCounter = 0) {
this.deck = deck,
this.turns = 0,
this.incorrectGuesses = [],
this.currentCardIndex = 0,
this.startTime = 0,
this.roundCounter = roundCounter
  }

  returnCurrentCard(){
    return this.deck.cards[this.currentCardIndex];
  }

  takeTurn(newGuess) {
    this.turns++;
    const Turn = require('../src/Turn');
    const turn = new Turn(newGuess, this.deck.cards[this.currentCardIndex]);
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
  endRound(startTime){
    let correctPercentage = this.calculatePercentCorrect();
    if(correctPercentage >= 90) {
    console.log('\n  *** Round Over! ***   \x1b[30mYou answered \x1b[35m' + correctPercentage + '%\x1b[30m of the questions correctly!\n\n\n  \x1b[97m@@@---You rock!---@@@\n\n \x1b[35m');
    let elapsedTime = Date.now() - startTime;
    let eSeconds = elapsedTime/1000 % 60;
    let eMinutes = eSeconds/60;
    console.log(`\x1b[92mYou took ${eMinutes.toFixed(0)} minutes and ${eSeconds.toFixed(2)} seconds to finsh!\n\n`);
    setTimeout((() => {  
      return process.exit(0);
  }), 1500);
    } else {
    console.log('\nYou answered \x1b[35m' + correctPercentage + '%\x1b[30m of the questions correctly! Unfortunately, that\'s not good enough. Try, try again! :()\n');
    const Game = require('../src/Game');
    const game = new Game();
    game.start(this.roundCounter);
    }
  }
}

module.exports = Round;