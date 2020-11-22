const regex = require('./regex');

module.exports = function (code) {
  let r = /<span class="token regex-source language-regex">(.+?)?<\/span>/gm;
  let m = code.match(r);
  if (code.match(r)) {
    for (let match of m) {
      code = code.replace(r, regex(match.split(r)[1]));
    }
  }
  return code;
};