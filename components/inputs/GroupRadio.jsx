import PropTypes from 'prop-types'

import { InputButton } from "."

export const GroupRadio = ({ classContainer, label, className, name, onChange, options}) => {
  return (
    <div className={`flex flex-col mb-4 xl:mb-6 ${classContainer}`}>
      {label &&
        <span className="mb-1 xl:mb-2">
          {label}
        </span>
      }

      <div className="flex flex-wrap" onChange={onChange}>
        {options.map((option, index) => {
          return (
            <InputButton
              key={index}
              className={`mb-1 xl:mb-2 ${className}`}
              label={option.label}
              type="radio"
              name={name}
              value={option.value}
            />
          )
        })}
      </div>
    </div>
  )
}

GroupRadio.propTypes = {
  classContainer: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
}
