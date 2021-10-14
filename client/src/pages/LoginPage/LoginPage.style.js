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
  padding: 5% 0 5% 0;
`
// Login form styling

export const Container = styled.div`
  display: flex;
  background-color: #f5f5f7;
  box-shadow: 0px 4px 6px 1px rgba(0, 0, 0, 0.25);
  border-radius: 0.95em;
  width: 100%;
  max-width: 1107px;
  justify-content: center;
  align-items: flex-start;
  padding: 5% 10%;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`

export const FormH1 = styled.h1`
  margin-top: 0;
  font-size: 3.3em;
  color: 163888;
  @media (max-width: 500px) {
    font-size: 2em;
  }
`

export const FormWrapper = styled.div`
  justify-self: start;
  padding-top: 2em;
  width: 80%;
  @media (max-width: 1000px) {
    justify-self: center;
  }
  @media (max-width: 850px) {
    width: 100%;
    padding-top: 0.7em;
  }
`

export const Form = styled.div`
  display: grid;
  align-content: center;
  grid-gap: 2em;
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
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
  @media (max-width: 850px) {
    text-align: center;
  }
  @media (max-width: 500px) {
    font-size: 1em;
  }
`

export const FormInput = styled.input`
  width: 13em;
  border: none;
  width: 100%;
  background-color: #ffffff;
  height: 2.5em;
  border-radius: 3px;
  padding-left: 5px;
  color: #163888;
  &:focus {
    border: none;
    outline: none;
  }
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
  @media (max-width: 500px) {
    width: ;
  }
`

export const LinksWrapper = styled.div`
  color: #6e87c1;
  text-align: center;
  font-size: 1.2em;
  grid-column: 2/3;
  grid-row: 4;
  @media (max-width: 500px) {
    font-size: 0.9em;
  }
`

export const Link = styled.a`
  text-decoration: none;
  color: #6e87c1;
  font-weight: 700;
`
