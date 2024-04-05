const prettier = require('prettier');

module.exports = function (content) {
  if (this.outputPath && this.outputPath.endsWith('.html')) {
    return prettier.format(content, { parser: 'html' });
  }
  return content;
};
