import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import { UserContext } from '../lib/context'
import { useUserData } from '../lib/hooks'

function MyApp({ Component, pageProps }) {
  const userData = useUserData()

  return (
    <UserContext.Provider value={{ user: null, username: null }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp
