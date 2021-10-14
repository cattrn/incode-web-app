import Button from '../../common/components/Button'
import {
  Container,
  FormH1,
  FormWrapper,
  Form,
  FormLabel,
  FormInput,
  LinksWrapper,
  Link,
  ButtonContainer
} from './LoginPage.style'

function LoginForm() {
  return (
    <Container>
      <FormH1>Login</FormH1>
      <FormWrapper>
        <Form>
          <FormLabel htmlFor="username">Username</FormLabel>
          <FormInput name="username" />
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput name="password" />
          <ButtonContainer>
            <Button name="Login" />
          </ButtonContainer>
          <LinksWrapper>
            <Link href="#">Sign Up</Link>
            <span> | </span>
            <Link href="#">Forgot password</Link>
          </LinksWrapper>
        </Form>
      </FormWrapper>
    </Container>
  )
}

export default LoginForm
