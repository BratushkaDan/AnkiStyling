const Prism = require('prismjs');
const PrismLess = require('prismjs/components/prism-less.min');
const copy = require('clipboardy');

let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.less, 'less');
html = `<div class="code_container css"><pre>${html}</pre></div>`;
copy.write(html);

