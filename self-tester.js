#!/usr/bin/env node

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

const blankedOutContents = condensedFileContents.map(line => line.split(' ').map(word => {
  if (word.length > 2) {
    if (randomNumber(1,100) > 75) return rangeOfChara('_', word.length);
    else return word;
  } else {
    return word;
  }
}).join(' ')); 

const questions = blankedOutContents.join('\n');




function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

