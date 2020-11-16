const copy = require('clipboardy');
copy.write(`<div class="comment"><div>${copy.readSync()}</div></div>`);
