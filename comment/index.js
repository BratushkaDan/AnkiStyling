const copy = require('clipboardy');
let result = '';

for (let str of copy.readSync().split('\n')) {
  if (str.length) {
    result += str + '<br>';
  }
}

copy.write(`<div class="comment"><div>${result}</div></div>`);
