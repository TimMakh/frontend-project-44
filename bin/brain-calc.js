#!/usr/bin/env node

import runGame from '../src/index.js';
import { description, getQuestionAnswer } from '../src/games/calc.js';

runGame(description, getQuestionAnswer);
