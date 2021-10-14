import LoginForm from './LoginForm.jsx'
import Logo from '../../common/components/Logo'
import { PageLayout, PageHeader, PageContent } from './LoginPage.style'

const LoginPage = () => {
  return (
    <PageLayout>
      <PageHeader>
        <Logo />
      </PageHeader>
      <PageContent>
        <LoginForm />
      </PageContent>
    </PageLayout>
  )
}

export default LoginPage
