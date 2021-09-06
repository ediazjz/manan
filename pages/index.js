import Head from 'next/head'
import { useContext } from 'react'

import { UserContext } from '../lib/context'
import { auth } from '../lib/firebase'
import { Logo, SocialLogIn, UsernameSelection } from '../components'

export default function Home() {
  const { user, username } = useContext(UserContext)

  return (
    <>
      <Head>
        <title>manan</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      {user
        ? !username
          ? <UsernameSelection />
          : <Meditate />
        : <SignInButtons />
      }
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
