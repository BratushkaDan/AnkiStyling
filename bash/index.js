const Prism = require('prismjs');
const PrismBash = require('prismjs/components/prism-bash.min');
const copy = require('clipboardy');

function bash() {
  let code = copy.readSync();
  let html = Prism.highlight(code, Prism.languages.bash, 'bash');
  html = `<div class="code_container bash"><pre>${html}</pre></div>`;
  copy.write(html);
}

bash();

module.exports = {
  bash
}