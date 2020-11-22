const Prism = require('prismjs');
const PrismElm = require('prismjs/components/prism-elm.min');
const copy = require('clipboardy');

let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.elm, 'elm');
html = `<div class="code_container elm"><pre>${html}</pre></div>`;
copy.write(html);