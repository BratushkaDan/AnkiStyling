const Prism = require('prismjs');
const copy = require('clipboardy');

let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
html = `<div class="code_container javascript"><pre>${html}</pre></div>`;
copy.write(html);