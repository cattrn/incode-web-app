import styled from 'styled-components'

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #163888;
  border-radius: 4.5px;
  color: #f5f5f7;
  padding: 0.3em 0;
  font-size: 1.3em;
  font-weight: 700;
  height: 3em;
  border: none;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 500px) {
    font-size: 0.9em;
  }
`
export default StyledButton
