// const pathname = require("pathname");
const Index = require('prismjs');
const copy = require('clipboardy');

let code = copy.readSync();
let html = Index.highlight(code, Index.languages.javascript, 'javascript');
html = `<div class="code_container"><pre><code>${html}</code></pre></div>`;
copy.write(html);

