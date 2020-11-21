const Prism = require('prismjs');
const PrismJSON = require('prismjs/components/prism-json.min');
const copy = require('clipboardy');

let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.json, 'json');
html = `<div class="code_container json"><pre>${html}</pre></div>`;
copy.write(html);