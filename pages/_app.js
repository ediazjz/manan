import PropTypes from 'prop-types'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import { UserContext } from '../lib/context'
import { useUserData } from '../lib/hooks'

function MyApp({ Component, pageProps }) {
  const userData = useUserData()

  return (
    <UserContext.Provider value={userData}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp

MyApp.propsTypes = {
  Component: PropTypes.element,
  pageProps: PropTypes.object
}
