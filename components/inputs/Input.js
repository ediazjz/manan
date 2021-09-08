import PropTypes from 'prop-types'

export const Input = ({ className, type, name, placehoder, value, onChange, disabled }) => {
  return (
    <input
      className={`
        py-2 md:py-3 px-3 md:px-6
        border border-inky-lighter focus:border-secondary rounded
        focus:ring focus:ring-secondary-lighter
        placeholder-inky-lighter
        bg-neutral-lighter
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}`}
      type={type}
      name={name}
      placeholder={placehoder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  )
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placehoder: PropTypes.string,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}
