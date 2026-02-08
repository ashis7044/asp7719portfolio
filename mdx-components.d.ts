declare module '*.mdx' {
  import type { MDXComponents } from 'mdx/types'
  
  export const metadata: {
    title?: string
    description?: string
    date?: string
    tags?: string[]
    image?: string
    [key: string]: unknown
  }
  
  export default function MDXContent(props: {
    components?: MDXComponents
  }): JSX.Element
}
