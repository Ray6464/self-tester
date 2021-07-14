const blessed = require('blessed');

const screen = blessed.screen({
  smartCSR: true
});
screen.title = 'Self-Tester';

const box = blessed.box({
  content: '{bold}Smart-Tester{/bold} by Ray Voice! @rayshorthead',
  tags: true,
  border: {type: 'line'},
});
screen.append(box);

const submitButton = blessed.button({
  top: '48%',
  left: 'center',
  height: '6%',
  width: '18%',
  content: 'Submit Answer',
  border: {type:'line'},
  style: { hover: { bg: 'green'}}
});
screen.append(submitButton);

const showAnswerButton = blessed.button({
  top: '40%',
  left: 'center',
  height: '6%',
  width: '18%',
  content: 'Show Answer',
  border: {type:'line'},
  style: { hover: { bg: 'green'}}
});
screen.append(showAnswerButton);


// BoilerPlate Code for Blessed
screen.key(['escape', 'C-c'], function(ch, key) {
  return process.exit(0);
});

box.focus();
screen.render();

module.exports = {
  screen: screen,
  box: box,
  showAnswerButton: showAnswerButton,
  submitButton: submitButton,
}

