#!/usr/bin/env node

import runGame from '../src/index.js';
import { description, getQuestionAnswer } from '../src/games/prime.js';

runGame(description, getQuestionAnswer);
