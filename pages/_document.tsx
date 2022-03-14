import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    return await Document.getInitialProps(ctx);
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com/" />
          <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Frank+Ruhl+Libre:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
