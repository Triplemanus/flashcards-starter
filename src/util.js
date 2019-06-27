const inquirer = require('inquirer');

const genList = (round) => {
  let card = round.returnCurrentCard();
  
  let choices = card.answers.map((answer, index) => {
    return {
      key: index,
      value: answer
    }
  });
  return {
    type: 'rawlist',
    message: `\x1b[92mQuestion(${round.currentCardIndex+1})  \x1b[31m` + card.question,
    name: 'answers',
    choices: choices
  };
}

const getRound = (round) => {
  return Promise.resolve(round);
}

const confirmUpdate = (id, round) => {
  const feedback = round.takeTurn(id);
  return {
    name: 'feedback',
    message: `Your answer of ${id} is ${feedback}`
  }
}

async function main(round) {

  const currentRound = await getRound(round);
  const getAnswer = await inquirer.prompt(genList(currentRound));
  const getConfirm = await inquirer.prompt(confirmUpdate(getAnswer.answers, round));

    if(!round.returnCurrentCard()) {

      round.endRound(round.startTime);
    } else {
      if (round.startTime === 0) {
        round.startTime = Date.now();}
      //console.log(`Start time is ${round.startTime}`);
      main(round);
    }
}

module.exports.main = main;