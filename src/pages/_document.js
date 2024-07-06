import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/icons/logo-white.svg" />
        <meta
          key="description"
          name="description"
          content="Scrap Up is our passion project, dedicated to transforming waste into valuable opportunities."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
