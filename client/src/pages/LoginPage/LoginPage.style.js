import styled from 'styled-components'

// page layout styling (which will be changed later on to be uniform for all the pages)

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`

export const PageHeader = styled.div`
  width: 8em;
  margin-top: 2em;
  margin-left: 3em;
  align-self: flex-start;
  background-color: #ffffff;
`

export const PageContent = styled.div`
  display: flex;
  justify-content: center;
  width: 76.87%;
  background-color: #ffffff;
`
// Login form styling

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 29% 70%;
  gap: 1%;
  background-color: #f5f5f7;
  box-shadow: 0px 4px 6px 1px rgba(0, 0, 0, 0.25);
  border-radius: 0.95em;
  margin-top: 13%;
  width: 100%;
  max-width: 1107px;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
  padding: 4em 0px 4em;
`

export const FormH1 = styled.h1`
  justify-self: end;
  align-self: start;
  margin-top: 0;
  font-size: 3.3em;
  color: 163888;
`

export const FormWrapper = styled.div`
  justify-self: start;
  padding-top: 2em;
  width: 80%;
`

export const Form = styled.div`
  display: grid;
  align-content: center;
  grid-gap: 2em;
`

export const FormLabel = styled.label`
  color: #163888;
  text-align: end;
  font-size: 1.4em;
  font-weight: 700;
  &:nth-of-type(1) {
    grid-column: 1;
    grid-row: 1;
  }
  &:nth-of-type(2) {
    grid-column: 1;
    grid-row: 2;
  }
`

export const FormInput = styled.input`
  width: 13em;
  border: none;
  width: 100%;
  background-color: ffffff;
  height: 2.5em;
  border-radius: 3px;
  &:nth-of-type(1) {
    grid-column: 2/3;
    grid-row: 1;
  }
  &:nth-of-type(2) {
    grid-column: 2/3;
    grid-row: 2;
  }
`

export const ButtonContainer = styled.div`
  grid-column: 2/3;
  grid-row: 3;
`

export const LinksWrapper = styled.div`
  color: #6e87c1;
  text-align: center;
  font-size: 1.2em;
  grid-column: 2/3;
  grid-row: 4;
`

export const Link = styled.a`
  text-decoration: none;
  color: #6e87c1;
  font-weight: 700;
`
