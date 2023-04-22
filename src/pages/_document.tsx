import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" data-theme="halloween" className='aurora bg-no-repeat bg-cover h-screen'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
