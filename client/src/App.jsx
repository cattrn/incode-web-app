import { Switch, Route } from 'react-router'
import routes from './routes'

const App = () => {
  return (
    <div className="App">
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
    </div>
  )
}

export default App
