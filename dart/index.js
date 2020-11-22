const Prism = require('prismjs');
const PrismDart = require('prismjs/components/prism-dart.min');
const copy = require('clipboardy');

let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.dart, 'dart');
html = `<div class="code_container dart"><pre>${html}</pre></div>`;
copy.write(html);