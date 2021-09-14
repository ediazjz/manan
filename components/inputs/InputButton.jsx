import PropTypes from 'prop-types'

export const InputButton = ({ className, label, type, name, value, checked, onChange}) => {
  return (
    <label
      className={`
        ${(type == "radio") ? "radio" : "checkbox"}
        relative
        flex items-center
        h-6 md:h-7 xl:h-8
        group
        cursor-pointer
        ${className}
      `}
    >
      <span className="ml-8 md:ml-9 xl:ml-10 select-none cursor-pointer">
        {label}
      </span>

      <input
        className="absolute h-0 w-0 opacity-0"
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />

      <span
        className={`
          absolute top-0 left-0
          h-6 md:h-7 xl:h-8
          w-6 md:w-7 xl:w-8
          border-2 border-primary ${(type == "radio") ? "rounded-full" : "rounded"}
          group-hover:bg-primary-lighter
          transition duration-300
        `}
      ></span>
    </label>
  )
}

InputButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func
}
