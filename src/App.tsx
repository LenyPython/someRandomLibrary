import Navigation from './components/Navigation/Navigation'
import Welcome from './components/Welcome/Welcome'
import Browse from './components/Browse/Browse'
import Footer from './components/Footer/Footer'
import './App.css'
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
        <Route path='LenyPython/someRandomLibrary' exact>
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
      <Footer />
    </Router>
  );
}

export default App;
