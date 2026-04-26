import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const CodeBlock = ({ children, language = 'jsx' }) => {
  const dedent = code => {
    if (typeof code !== 'string') return String(code);

    const lines = code.split('\n');

    const nonEmptyLines = lines.filter(line => line.trim().length > 0);
    if (nonEmptyLines.length === 0) return code;

    const minIndent = Math.min(
      ...nonEmptyLines.map(line => {
        const match = line.match(/^\s+/);
        return match ? match[0].length : 0;
      }),
    );

    return lines
      .map(line => {
        if (line.trim().length === 0) {
          return line;
        }
        return line.slice(minIndent);
      })
      .join('\n')
      .trim();
  };

  let codeString = '';
  if (typeof children === 'string') {
    codeString = children;
  } else if (children?.props?.children) {
    codeString = children.props.children;
  } else {
    codeString = String(children);
  }

  codeString = dedent(codeString);

  return (
    <SyntaxHighlighter
      language={language}
      showLineNumbers={true}
      style={atomDark}
      customStyle={{
        borderRadius: '8px',
        padding: '16px',
      }}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
