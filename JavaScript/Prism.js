const Prism = require('prismjs');
const fs = require('fs');
const path = require('path');

const fname = process.argv[2];
const filePath = path.join(__dirname, 'out', 'output.txt');

let data = '';

fs.readFile(path.join(__dirname, fname), "utf-8", (error, data) => {
  console.log(data.split("\n"));
});

fs.writeFile(filePath, '', err => {
  if (err) throw err;
});

let code = "";

// let html = Prism.highlight(code, Prism.languages.javascript, 'jsx');
// html = `<div class="code_container"><pre><code>${html}</code></pre></div>`;
// console.log(html);

