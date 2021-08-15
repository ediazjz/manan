import Head from 'next/head'
import { Layout } from '../components'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Manan</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        <h1>
          Hello, world!
        </h1>
      </main>
    </Layout>
  )
}
