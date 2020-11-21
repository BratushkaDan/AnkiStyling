const Prism = require('prismjs');
const PrismGQ = require('prismjs/components/prism-graphql.min');
const copy = require('clipboardy');

let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.graphql, 'graphql');
html = `<div class="code_container graphql"><pre>${html}</pre></div>`;
copy.write(html);