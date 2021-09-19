import PropTypes from 'prop-types'

import { LoadingIcon } from "."

export const LoadingScreen = ({ text }) => {
  return (
    <div className="flex flex-col items-center text-primary">
      <LoadingIcon className="w-16 md:w-20 xl:w-24 mb-4" />

      <span className="h4">{text}</span>
    </div>
  )
}

LoadingScreen.propTypes = {
  text: PropTypes.string.isRequired
}
