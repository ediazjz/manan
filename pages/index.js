import Head from 'next/head'
import { useContext } from 'react'

import { UserContext } from '../lib/context'

import { Logo, SocialLogIn } from '../components'

export default function Home() {
  const { user, username } = useContext(UserContext)

  return (
    <>
      <Head>
        <title>manan</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="container h-screen pb-16 flex flex-col items-center justify-center">
        <Logo className="text-primary mb-8" />
        <Logo type="logotype" width="256" className="text-primary mb-12" />

        <div className="w-full">
          <SocialLogIn network="google" className="btn-social" />
          <SocialLogIn network="facebook" className="btn-social" />
          <SocialLogIn network="twitter" className="btn-social" />
        </div>
      </main>
    </>
  )
}
