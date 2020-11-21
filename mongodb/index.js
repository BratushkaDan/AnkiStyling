const Prism = require('prismjs');
const PrismMongo = require('prismjs/components/prism-mongodb.min');
const copy = require('clipboardy');

let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.mongodb, 'MongoDB');
html = `<div class="code_container mongo"><pre>${html}</pre></div>`;
copy.write(html);