const Prism = require('prismjs');
const copy = require('clipboardy');

let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.html, 'html');
html = `<div class="code_container html"><pre><code>${html}</code></pre></div>`;
copy.write(html);