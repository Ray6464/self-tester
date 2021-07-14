#!/usr/bin/env node

const {blankedOutContents, arrayOfAnswers} = require('./getArrayOfQuestions.js');
const {screen, box, showAnswerButton, submitButton} = require('./gui.js');

submitButton.on('click', function(data) {
  box.setContent('Clicked Button!'); // make this the nextQuestion Function
  screen.render();
});

showAnswerButton.on('click', function(data) {
  box.setContent('Clicked Button!'); // make this the nextQuestion Function
  screen.render();
});


function showAnswer(textBox, qNum, answer) {
  const oldText = textBox.getContent();
  const newText = oldText + '\n\n'
    + `{center}${answer}{/center}`;
  textBox.setContent(newText);
  screen.render();
}

function updateQuestion(textBox, qNum, question) {
  const oldText = textBox.getContent();
  const newText = oldText + '\n\n'
    + `{center}Question ${qNum} out of ${blankedOutContents.length}{/center}` 
    + '\n\n' + `{center}${question}{/center}`;
  textBox.setContent(newText);
  screen.render();
}

