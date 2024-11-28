import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <Script
        src="https://embed.cal.com/embed.js"
        strategy="beforeInteractive"
      />
      <Script async src="https://tally.so/widgets/embed.js"></Script>
      <body className='bg-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
