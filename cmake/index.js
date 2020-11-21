const Prism = require('prismjs');
const PrismCMake = require('prismjs/components/prism-cmake.min');
const copy = require('clipboardy');

let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.cmake, 'cmake');
html = `<div class="code_container c"><pre>${html}</pre></div>`;
copy.write(html);