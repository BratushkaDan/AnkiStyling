const Prism = require('prismjs');
const PrismC = require('prismjs/components/prism-c.min');
const PrismCpp = require('prismjs/components/prism-cpp.min');
const copy = require('clipboardy');

let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.cpp, 'cpp');
html = `<div class="code_container c"><pre>${html}</pre></div>`;
copy.write(html);