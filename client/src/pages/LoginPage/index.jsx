import LoginForm from './LoginForm.jsx'
import Logo from '../../common/components/Logo'
import './index.css'

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <header className="Login-page-header">
        <Logo />
      </header>
      <main>
        <LoginForm />
      </main>
    </div>
  )
}

export default LoginPage
