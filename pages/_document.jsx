import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Manan is a social web app for meditation." />
          <meta name="application-name" content="manan" />
          <meta name="theme-color" content="#4e7d96" />

          <link rel="manifest" href="/site.webmanifest" />

          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4e7d96" />
          
          <meta name="apple-mobile-web-app-title" content="manan" />
          <meta name="msapplication-TileColor" content="#4e7d96" />
          <meta name="msapplication-TileImage" content="/mstile-144x144.png" />

          <link rel="icon" href="/favicon.ico" />
        </Head>

        <body className="bg-neutral-light dark:bg-inky-darker text-inky dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
