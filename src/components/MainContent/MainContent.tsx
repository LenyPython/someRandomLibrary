import Welcome from '../Welcome/Welcome'
import Browse from '../Browse/Browse'
import AccountPanel from '../AccountPanel/AccountPanel'
import LoginForm from '../LoginForm/LoginForm'
import { Switch, Route } from 'react-router-dom'

const MainContent = () => {
  return(
      <Switch>
        <Route path='/browse'>
          <Browse />
          </Route>
        <Route path='/account'>
          <AccountPanel />
          </Route>
        <Route path='/home'>
          <Welcome />
        </Route>
        <Route path='/login'>
          <LoginForm />
        </Route>
        <Route path='/register'>
          <LoginForm reg />
        </Route>
        <Route path='/LenyPython/someRandomLibrary' exact>
          <Welcome />
          </Route>
        <Route path='/' exact>
          <Welcome />
          </Route>
        <Route path='*'>
          <h1>Error 404 route does not exist</h1>
          </Route>
      </Switch>
  )
}

export default MainContent
