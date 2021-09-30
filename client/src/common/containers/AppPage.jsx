import PropTypes from 'prop-types'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Logo from '../components/Logo'

const AppPage = ({ children }) => {
  return (
    <div className="container">
      <div className="header">
        <Logo />
        <Header />
      </div>
      <div>
        <Nav />
        <div className="body">{children}</div>
      </div>
    </div>
  )
}

AppPage.propTypes = {
  children: PropTypes.node
}

export default AppPage
