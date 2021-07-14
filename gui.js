const blessed = require('blessed');

const defaultScreenContent = '{bold}Smart-Tester{/bold} by Ray Voice! @rayshorthead';
const screen = blessed.screen({
  smartCSR: true
});
screen.title = 'Self-Tester';

const box = blessed.box({
  content: defaultScreenContent,
  tags: true,
  border: {type: 'line'},
});
screen.append(box);

const nextButton = blessed.button({
  top: '48%',
  left: 'center',
  height: '6%',
  width: '18%',
  content: 'Next Question',
  border: {type:'line'},
  style: { hover: { bg: 'green'}}
});
screen.append(nextButton);

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
  defaultScreenContent: defaultScreenContent,
  screen: screen,
  box: box,
  showAnswerButton: showAnswerButton,
  nextButton: nextButton,
}

