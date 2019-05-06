

class Card{
  constructor(cardID, cardQuestion, answers, correctAnswer) {
    this.id = cardID,
    this.question = cardQuestion,
    this.answers =  answers,
    this.correctAnswer = correctAnswer
  }
}

module.exports = Card;