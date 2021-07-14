# self-tester
A program for self-testing to memorse and test read material. It takes in an input file compraised of reading material arranged in lines, and each line is presented to you in from of Fill-in-the blank like questions.

# Installation
Self-Tester can be installed on any OS that supports NodeJS, including Linux, Windows, MacOS, etc.
Use the following command from Comman-Prompt, or a Terminal Emulator to install Self-Tester via NPM:
```
npm i -g self-tester
```

# Usage
Just provide `self-tester` a text file using the `-f` flag, a starting line number of that file using `-sLine1`, and an ending line number of that file using `-eLine1`, and `self-tester` will Quiz you on everything that exists between these lines. For example:
```
self-tester -f abc.txt -sLine1 10 -eLine1 22
```
This will tell `self-tester` to quiz us form file `abc.txt`, starting form line #10, and not going further then line #22. The question will be random.

# Neural Network
We plan to include a neural-network to make the program significantly more meaningful. Right now the software uses an algorithm that redacts words depending upon their length and probalility of their importance.

# LICENSE
MIT License

Copyright (c) 2021 Ray Voice

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

