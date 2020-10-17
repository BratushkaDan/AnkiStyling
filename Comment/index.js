const copy = require('clipboardy');
copy.write(`<div class="comment">${copy.readSync()}</div>`);