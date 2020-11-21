const Prism = require('prismjs');
/*const PrismJava = require('prismjs/components/prism-java.min');*/
const PrismKotlin = require('prismjs/components/prism-kotlin.min');
const copy = require('clipboardy');

let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.kotlin, 'kotlin');
html = `<div class="code_container java"><pre>${html}</pre></div>`;
copy.write(html);