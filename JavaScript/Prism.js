const Prism = require('prismjs');

let code = "class MarkdownEditor extends React.Component {\n" +
  "  constructor(props) {\n" +
  "    super(props);\n" +
  "    this.md = new Remarkable();\n" +
  "    this.handleChange = this.handleChange.bind(this);\n" +
  "    this.state = { value: 'Hello, **world**!' };\n" +
  "  }\n" +
  "\n" +
  "  handleChange(e) {\n" +
  "    this.setState({ value: e.target.value });\n" +
  "  }\n" +
  "\n" +
  "  getRawMarkup() {\n" +
  "    return { __html: this.md.render(this.state.value) };\n" +
  "  }\n" +
  "\n" +
  "  render() {\n" +
  "    return (\n" +
  "      <div className=\"MarkdownEditor\">\n" +
  "        <h3>Input</h3>\n" +
  "        <label htmlFor=\"markdown-content\">\n" +
  "          Enter some markdown\n" +
  "        </label>\n" +
  "        <textarea\n" +
  "          id=\"markdown-content\"\n" +
  "          onChange={this.handleChange}\n" +
  "          defaultValue={this.state.value}\n" +
  "        />\n" +
  "        <h3>Output</h3>\n" +
  "        <div\n" +
  "          className=\"content\"\n" +
  "          dangerouslySetInnerHTML={this.getRawMarkup()}\n" +
  "        />\n" +
  "      </div>\n" +
  "    );\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  "ReactDOM.render(\n" +
  "  <MarkdownEditor />,\n" +
  "  document.getElementById('markdown-example')\n" +
  ");";
let html = Prism.highlight(code, Prism.languages.javascript, 'jsx');
html = `<div class="code_container"><pre><code>${html}</code></pre></div>`;
console.log(html);