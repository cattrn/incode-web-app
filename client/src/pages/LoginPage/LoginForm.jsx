import Button from '../../common/components/Button'
import {
  Container,
  FormH1,
  FormWrapper,
  Form,
  FormLabel,
  FormInput,
  LinksWrapper,
  Link
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
          <Button name="Login" />
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
