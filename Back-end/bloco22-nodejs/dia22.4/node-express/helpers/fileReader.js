const fs = require('fs').promises;
const { join } = require('path');

async function fileReader(file) {
  try {
    const content = await fs.readFile(file, 'utf-8');
    const parser = JSON.parse(content);
    return parser;
  } catch(err) {
    console.error(err);
  }
}

module.exports = { fileReader };
