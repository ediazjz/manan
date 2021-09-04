import Head from 'next/head'
import { Logo, SocialLogIn } from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>manan</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="container">
        <Logo className="text-primary" />

        <SocialLogIn network="google" className="btn-social" />
        <SocialLogIn network="facebook" className="btn-social" />
        <SocialLogIn network="twitter" className="btn-social" />
      </main>
    </>
  )
}
