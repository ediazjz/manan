import Head from 'next/head'
import { Layout } from '../components'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Manan</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Hello, world!
        </h1>
      </main>
    </Layout>
  )
}
