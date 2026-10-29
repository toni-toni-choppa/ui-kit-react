import type { ComponentProps } from 'react'
import '@/styles/components/CodeBlock.css'

type CodeBlockProps = ComponentProps<'pre'> & {
  language?: string
}

export function CodeBlock({ children, language, ...props }: CodeBlockProps) {
  return (
    <div className="code-block">
      <div className="code-block-header">
        <small>{language ? language : 'Text'}</small>
        <button className="copy-button">Copy</button>
      </div>
      <pre {...props}>
        <code>{children}</code>
      </pre>
    </div>
  )
}
