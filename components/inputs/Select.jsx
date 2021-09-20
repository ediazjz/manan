import { useState } from 'react'

import PropTypes from 'prop-types'

import { ChevronDownIcon } from '@heroicons/react/solid'

export const Select = ({ classContainer, label, className, id, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const toggleView = () => setIsOpen(!isOpen)

  const selectOption = (label, value) => () => {
    setSelectedOption(label)
    onChange(value)
    setIsOpen(false)
  }

  return (
    <div className={`flex flex-col ${classContainer}`}>
      {label &&
        <label htmlFor={id}>
          {label}
        </label>
      }

      <div className={`relative z-20 ${className}`}>
        <div
          className={`
            flex justify-between
            py-2 md:py-3 px-3 md:px-6
            border border-inky-lighter hover:border-inky ${isOpen && "border-b-0 rounded-b-none"} rounded
            bg-neutral-lighter
            text-inky-lighter hover:text-inky
            transition duration-300 ease-out
            cursor-pointer
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
          id={id}
          onClick={toggleView}
        >
          <span>{selectedOption || "Select one"}</span>

          <ChevronDownIcon className={`h-6 md:h-7 transition-all duration-300 ${isOpen && "transform rotate-180"}`}/>
        </div>

        {isOpen &&
          <ul
            className="
              absolute
              w-full py-3
              border-l border-b border-r border-inky-lighter hover:border-inky rounded-b
              bg-neutral-lighter
            "
          >
            {options.map((item, index) => {
              return (
                <li
                  key={index}
                  className="py-2 px-3 md:px-6 hover:bg-primary hover:text-white cursor-pointer"
                  data-value={item.value}
                  onClick={selectOption(item.label, item.value)}
                >
                  {item.label}
                </li>
              )
            })}
          </ul>
        }
      </div>
    </div>
  )
}

Select.propTypes = {
  classContainer: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
}
