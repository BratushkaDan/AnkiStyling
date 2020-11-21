const Prism =  require('prismjs');
const PrismJsx = require('prismjs/components/prism-jsx.min');
const copy = require('clipboardy');


let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.jsx, 'jsx');
html = `<div class="code_container javascript"><pre>${html}</pre></div>`;
copy.write(html);