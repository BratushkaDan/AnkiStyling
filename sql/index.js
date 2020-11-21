const Prism = require('prismjs');
const PrismSQL = require('prismjs/components/prism-sql.min');
const copy = require('clipboardy');

let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.sql, 'sql');
html = `<div class="code_container SQL"><pre>${html}</pre></div>`;
copy.write(html);