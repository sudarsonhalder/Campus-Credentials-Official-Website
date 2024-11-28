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
 <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var script = document.createElement('script');
                script.src = "https://tally.so/widgets/embed.js";
                script.async = true;
                document.head.appendChild(script);
              })();
            `,
          }}
        />      <body className='bg-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
