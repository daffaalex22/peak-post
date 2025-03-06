import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const formattedContent = content.replace(/\\n/g, '\n');

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          // Custom components for markdown elements
          h1: ({ children }) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
          h2: ({ children }) => <h2 className="text-2xl font-bold my-3">{children}</h2>,
          p: ({ children }) => <p className="my-2">{children}</p>,
          a: ({ href, children }) => (
            <a href={href} className="text-blue-500 hover:text-blue-700">
              {children}
            </a>
          ),
          code: ({ children }) => (
            <code className="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1">
              {children}
            </code>
          ),
        }}
      >
        {formattedContent}
      </ReactMarkdown>
    </article>
  );
}