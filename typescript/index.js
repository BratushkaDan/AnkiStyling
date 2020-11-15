const Prism =  require('prismjs');
const PrismTS = require('prismjs/components/prism-typescript.min');
const copy = require('clipboardy');


let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.typescript, 'typescript');
html = `<div class="code_container typescript"><pre><code>${html}</code></pre></div>`;
copy.write(html);