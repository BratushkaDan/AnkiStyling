const Prism = require('prismjs');
const copy = require('clipboardy');

let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.jsx, 'jsx');
html = `<div class="code_container"><pre><code>${html}</code></pre></div>`;
copy.write(html);