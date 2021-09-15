import PropTypes from 'prop-types'

import { NavBar } from './'

export const Layout = (props) => {
  return (
    <div className="xl:flex h-screen w-full">
      <NavBar />

      <div className="container pb-28 md:pb-40 xl:pb-10 2xl:pb-12 xl:overflow-y-auto">
        { props.children }
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}
