import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <script
        src="https://embed.cal.com/embed.js"
        strategy="beforeInteractive"
      />
      <script async src="https://tally.so/widgets/embed.js"></script>
      <body className='bg-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
