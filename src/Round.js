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
    console.log(this.deck.cards[this.currentCardIndex].correctAnswer);
    this.currentCardIndex++;
    const answer = turn.giveFeedback(newGuess);
    if(answer === 'Incorrect!') {
      this.incorrectGuesses.push(this.deck.cards[this.currentCardIdx].id);
    }
    return answer;
  }
}

module.exports = Round;