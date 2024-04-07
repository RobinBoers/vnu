#!/usr/bin/env node

'use strict';

const { spawn } = require('child_process');
const vnu = require('vnu-jar');

// The first two arguments will be ['node', 'thisscript']
const args = process.argv.slice(2);

const process = spawn('java', ['-jar', vnu, ...args], { stdio: 'inherit' });

process.on('exit', (code, signal) => {
  if (code !== null) process.exit(code);

  console.error(`Child process terminated with signal ${signal}`);
  process.exit(1);
});
