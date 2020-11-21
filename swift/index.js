const Prism = require('prismjs');
const PrismSwift = require('prismjs/components/prism-swift.min');
const copy = require('clipboardy');

let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.swift, 'swift');
html = `<div class="code_container swift"><pre>${html}</pre></div>`;
copy.write(html);