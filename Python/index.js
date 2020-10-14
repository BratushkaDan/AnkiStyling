const Prism = require('prismjs');
const PrismPy = require('prismjs/components/prism-python.min');
const copy = require('clipboardy');

let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.python, 'python');
html = `<div class="code_container"><pre><code>${html}</code></pre></div>`;
copy.write(html);

