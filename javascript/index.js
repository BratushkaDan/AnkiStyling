const Prism = require('prismjs');
const copy = require('clipboardy');

let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
html = `<div class="code_container code_container-javascript"><pre><code>${html}</code></pre></div>`;
copy.write(html);