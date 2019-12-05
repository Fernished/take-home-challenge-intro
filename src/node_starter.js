#!/usr/bin/env node

const fs = require('fs');
const contents = process.argv.splice(2);
const data = JSON.parse(fs.readFileSync(contents[0], 'utf-8'));

console.log('data =', data);
