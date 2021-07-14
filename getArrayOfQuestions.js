const fs = require('ray-fs');
const flags = require('ray-flags');
const {sucide} = require('sucide');
const path = require('path');
const {rangeOfChara} = require('ironberry').string;

if (flags.f === undefined) sucide('Please provide a valid file using the -f flag!');
if (flags.sLine1 === undefined) sucide('Please provide a starting line using the -sLine1 flag!');
if (flags.eLine1 === undefined) sucide('Please provide a starting line using the -eLine1 flag!');

const fileName = flags.f;
const fileContents = fs.readArray(fileName).value;
const exactFacts = fileContents.slice(flags.sLine1, flags.eLine1);
const condensedFileContents = exactFacts.filter(line => /[\w]+/.test(line));

/* Use a Neural net to blank out stuff, the code form #20 to #27 is just an alternative to the Neural net until I implement it!*/

const arrayOfAnswers = [];

// There is an inverse co-relatin between the length of the word and its importance, generally speaking
const blankedOutContents = condensedFileContents.map((line, index) => {
  return line.split(' ').map(word => {
    if (9 < word.length) {
      arrayOfAnswers.push(word);
      return rangeOfChara('_', word.length);
    }
    else if (7 < word.length && 3 < randomNumber(1,10)) {
      arrayOfAnswers.push(word);
      return rangeOfChara('_', word.length);
    }
    else if (5 < word.length && 5 < randomNumber(1,10)) {
      arrayOfAnswers.push(word);
      return rangeOfChara('_', word.length);
    }
    else if (3 < word.length && 7 < randomNumber(1,10)) {
      arrayOfAnswers.push(word);
      return rangeOfChara('_', word.length);
    } else {
      return word;
    }
  }).join(' ');
}) 
/* Neural net will work on generating blankedOutContents*/

const questionsHive = blankedOutContents.map((line, index) => {
  return { question: line, uncensord: condensedFileContents[index] }
});

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function shuffle(arr) { // Fisher-Yates/Knuth algo,
  let r;
  arr.forEach((item, index)=>{
    r = Math.floor(Math.random() * index);
    [arr[index], arr[r]] = [arr[r], arr[index]];
  });
  return arr;
}

module.exports = {
  blankedOutContents: blankedOutContents, 
  arrayOfAnswers: arrayOfAnswers,
  questionsHive: shuffle(questionsHive),
}

