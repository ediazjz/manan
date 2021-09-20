import Head from 'next/head'
import { useRouter } from 'next/router'

import { LogoutIcon } from '@heroicons/react/solid'

import { auth } from '../lib/firebase'
import { Button, Layout } from '../components'

export default function Meditate() {
  const router = useRouter()

  return (
    <Layout>
      <Head>
        <title>manan: Meditate</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div>
        This will be the meditation page

        <Button
          className="btn-primary"
          text="Sign out"
          icon={<LogoutIcon className="btn-icon" />}
          onClick={() => {
            auth.signOut()
            router.push("/")
          }}
        />
      </div>
    </Layout>
  )
}
