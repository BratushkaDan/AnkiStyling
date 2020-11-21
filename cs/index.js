const Prism = require('prismjs');
const PrismCS = require('prismjs/components/prism-csharp.min');

const copy = require('clipboardy');

let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.cs, 'cs');
html = `<div class="code_container cs"><pre>${html}</pre></div>`;
copy.write(html);