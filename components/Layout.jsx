import PropTypes from 'prop-types'

import { NavBar } from './'

export const Layout = (props) => {
  return (
    <>
      <NavBar />
      { props.children }
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.element
}
