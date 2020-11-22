const Prism = require('prismjs');
const PrismRust = require('prismjs/components/prism-rust.min');
const copy = require('clipboardy');

let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.rust, 'rust');
html = `<div class="code_container rust"><pre>${html}</pre></div>`;
copy.write(html);