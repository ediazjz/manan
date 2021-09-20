import PropTypes from 'prop-types'

export const Textarea = ({ classContainer, label, className, id, name, placehoder, value, onChange, disabled }) => {
  return (
    <div className={`flex flex-col ${classContainer}`}>
      {label &&
        <label htmlFor={id}>
          {label}
        </label>
      }

      <textarea
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
        rows="12"
        cols="56"
        name={name}
        placeholder={placehoder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  )
}

Textarea.propTypes = {
  classContainer: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placehoder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
} 
