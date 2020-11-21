const Prism = require('prismjs');
const PrismSass = require('prismjs/components/prism-sass.min');
const copy = require('clipboardy');

let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.sass, 'sass');
html = `<div class="code_container css"><pre>${html}</pre></div>`;
copy.write(html);

