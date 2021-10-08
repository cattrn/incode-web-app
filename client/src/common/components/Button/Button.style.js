import styled from 'styled-components'
import Button from './index'

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-color);
  border-radius: 4.5px;
  color: var(--background-color);
  padding: 0.3em 0;
  font-size: 1.3em;
  font-weight: 700;
  height: 3em;
  border: none;
`
export default StyledButton
