const fs = require('fs').promises;

async function fileReader(file) {
  try {
    const content = await fs.readFile(file, 'utf-8');
    const parser = JSON.parse(content);
    return parser;
  } catch(err) {
    console.error(err);
  }
}

function updateFile(file, content) {
  return fs.writeFile(file, JSON.stringify(content));
}

module.exports = { fileReader, updateFile };
