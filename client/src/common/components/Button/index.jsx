import PropTypes from 'prop-types'

const Button = (props) => {
  return <button className="Button">{props.name}</button>
}

Button.propTypes = {
  name: PropTypes.string.isRequired
}

export default Button
