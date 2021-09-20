import PropTypes from 'prop-types'
import { ThemeProvider } from 'next-themes'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import { UserContext } from '../lib/context'
import { useUserData } from '../lib/hooks'

function MyApp({ Component, pageProps }) {
  const userData = useUserData()

  return (
    <ThemeProvider attribute="class">
      <UserContext.Provider value={userData}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </ThemeProvider>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
}
