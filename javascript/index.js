const Prism = require('prismjs');
const copy = require('clipboardy');
const processRegex = require('../modules/regex');

let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
html = `<div class="code_container javascript"><pre>${html}</pre></div>`;
html = processRegex(html);
copy.write(html);