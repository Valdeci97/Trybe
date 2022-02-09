const fs = require('fs');

function fileReader(file, content) {
  fs.writeFileSync(`${file}`, `${content}`);
  return 'ok';
}

module.exports = fileReader;
