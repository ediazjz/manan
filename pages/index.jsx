import Script from 'next/script'
import Head from 'next/head'
import { useEffect } from 'react'
import { Illustration } from '../components'
import { Logo, SocialLogIn } from '../components'

export default function Home() {
  useEffect(() => {
    const tween = KUTE.fromTo(
      '#hair1',
      { path: '#hair1' },
      { path: '#hair2' },
      { repeat: 999, duration: 3000, yoyo: true }
    ).start();
  }, [])

  return (
    <>
      <Head>
        <title>manan</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/kute.js@2.1.2/dist/kute.min.js" strategy="beforeInteractive" />
      <Illustration width="600" />
    </>
  )
}

const SignInButtons = () => {
  return (
    <main className="container h-screen flex flex-col items-center justify-center">
      <Logo className="text-primary mb-8" />
      <Logo type="logotype" width="256" className="text-primary mb-12" />

      <div className="w-full pb-16">
        <SocialLogIn network="google" className="btn-social" />
        <SocialLogIn network="facebook" className="btn-social" />
        <SocialLogIn network="twitter" className="btn-social" />
      </div>
    </main>
  )
}

const Meditate = () => {
  return (
    <>
      <h1>Meditate</h1>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </>
  )
}
