#!/usr/bin/env node

const flags = require('ray-flags');
const sucide = require('sucide');

if (flags.v) sucide('v1.0.4');

const {questionsHive} = require('./getArrayOfQuestions.js');
const {screen, box, showAnswerButton,
	nextButton, defaultScreenContent} = require('./gui.js');

nextButton.on('click', function(data) {
  currentQuestion.number++;
  updateQuestion();
  screen.render();
});

showAnswerButton.on('click', function(data) {
  showAnswer();
  screen.render();
});

let currentQuestion = {
  number: 1,
};
updateQuestion(box, currentQuestion, questionsHive[currentQuestion.number-1].question);

function showAnswer() {
  const oldText = box.getContent();
  const newText = oldText + '\n\n'
    + `{center}Answer:{/center}` + '\n\n'
    + `{center}${questionsHive[currentQuestion.number-1].uncensord}{/center}`;
  box.setContent(newText);
  screen.render();
}

function updateQuestion() {
  const newText = defaultScreenContent + '\n\n'
    + `{center}Question ${currentQuestion.number} out of ${questionsHive.length}{/center}` 
    + '\n\n' + `{center}${questionsHive[currentQuestion.number -1].question}{/center}`;
  box.setContent(newText);
  screen.render();
}

