import PropTypes from 'prop-types'

import { NavBar } from './'

export const Layout = (props) => {
  return (
    <div className="xl:flex h-screen w-full">
      <NavBar />

      <div className="container">
        { props.children }
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}
