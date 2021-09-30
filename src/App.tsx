import Navigation from './components/Navigation/Navigation'
import Welcome from './components/Welcome/Welcome'
import Browse from './components/Browse/Browse'
import { BrowserRouter as Router,
    Switch, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route path='/home'>
          <Welcome />
          </Route>
        <Route path='/' exact>
          <Welcome />
          </Route>
        <Route path='/browse'>
          <Browse />
          </Route>
        <Route path='*'>
          <h1>Error 404 route does not exist</h1>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
