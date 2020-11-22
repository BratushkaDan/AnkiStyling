const Prism = require('prismjs');
const PrismRegex = require('prismjs/components/prism-regex.min');

module.exports = code => Prism.highlight(code, Prism.languages.regex, 'regex');