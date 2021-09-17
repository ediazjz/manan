import Link from 'next/link'

import PropTypes from 'prop-types'

export const Button = ({ className, id, text, icon, href, type, onClick, disabled }) => {
  return (
    href
    ? <LinkButton
        className={className}
        id={id}
        href={href}
        text={text}
        icon={icon}
      />
    : <GeneralButton
        className={className}
        id={id}
        type={type}
        text={text}
        icon={icon}
        onClick={onClick}
        disabled={disabled}
      />
  )
}

const LinkButton = ({ className, id, text, icon, href }) => {
  return (
    <Link href={href}>
      <a className={`btn ${className}`} id={id}>
        {icon}
        {text && <span>{text}</span>}
      </a>
    </Link>
  )
}

const GeneralButton = ({ className, id, text, icon, type, onClick, disabled}) => {
  return (
    <button className={`btn ${className}`} id={id} type={type} onClick={onClick} disabled={disabled}>
      {icon}
      {text && <span>{text}</span>}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.element,
  href: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

LinkButton.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.element,
  href: PropTypes.node
}

GeneralButton.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.element,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}
GeneralButton.defaultProps = {
  type: "button"
}
