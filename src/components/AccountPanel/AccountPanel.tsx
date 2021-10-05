import AdminPanel from './AdminPanel/AdminPanel'
import UserPanel from './UserPanel/UserPanel'
import { 
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom'

const AccountPanel:React.FC = () =>{
  let match = useRouteMatch()
  return (<>
    <div>
    <Link to={`${match.url}/admin`}>Admin</Link>
    <Link to={`${match.url}/user`}>User</Link>
    </div>
<Switch>
        <Route path={`${match.path}/admin`}>
        <AdminPanel />
        </Route>
        <Route path={`${match.path}/user`}>
        <UserPanel />
        </Route>
</Switch>
    </>
  )
}

export default AccountPanel
