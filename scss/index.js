const Prism = require('prismjs');
const PrismSCSS = require('prismjs/components/prism-scss.min');
const copy = require('clipboardy');

let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.scss, 'scss');
html = `<div class="code_container scss"><pre>${html}</pre></div>`;
copy.write(html);

