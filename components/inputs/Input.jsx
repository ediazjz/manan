import PropTypes from 'prop-types'

export const Input = ({ classContainer, label, className, id, type, name, placeholder, value, onChange, disabled }) => {
  return (
    <div className={`flex flex-col mb-4 xl:mb-6 ${classContainer}`}>
      {label &&
        <label htmlFor={id}>
          {label}
        </label>
      }

      <input
        className={`
          py-2 md:py-3 px-3 md:px-6
          border border-inky-lighter focus:border-secondary rounded
          focus:ring focus:ring-secondary-lighter
          placeholder-inky-lighter text-inky
          bg-neutral-lighter
          transition-all duration-300
          disabled:opacity-50 disabled:cursor-not-allowed
          ${className}
        `}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  )
}

Input.propTypes = {
  classContainer: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}
