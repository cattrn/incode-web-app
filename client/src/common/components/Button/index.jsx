import PropTypes from 'prop-types'
import StyledButton from './Button.style'

const Button = (props) => {
  return <StyledButton>{props.name}</StyledButton>
}

Button.propTypes = {
  name: PropTypes.string.isRequired
}

export default Button
