import Head from 'next/head'
import { Layout, SocialLogIn } from '../components'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Manan</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="container">
        <SocialLogIn network="google" />
        <SocialLogIn network="facebook" />
        <SocialLogIn network="twitter" />
      </main>
    </Layout>
  )
}
