const Prism = require('prismjs');
const PrismVim = require('prismjs/components/prism-vim.min')
const copy = require('clipboardy');

let code = copy.readSync();
let html = Prism.highlight(code, Prism.languages.vim, 'vim');
html = `<div class="code_container vim"><pre>${html}</pre></div>`;
copy.write(html);