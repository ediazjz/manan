import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { UserContext } from '../lib/context'
import { LoadingScreen, UserAuth } from '../components'

export default function Login() {
  const { user, username } = useContext(UserContext)
  const router = useRouter()

  useEffect(() => {
    if (user && username)
      router.push("/meditate")
  }, [user, username])

  return (
    <>
      <Head>
        <title>manan: Login</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="container h-screen flex flex-col items-center justify-center">
        {(user && username)
          ? <LoadingScreen text="Logging you in..." />
          : <UserAuth />
        }
      </main>
    </>
  )
}
