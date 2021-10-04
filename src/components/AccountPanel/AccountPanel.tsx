import AdminPanel from './AdminPanel/AdminPanel'
import UserPanel from './UserPanel/UserPanel'
import { ListPropsInterface } from '../Browse/Browse'
import { 
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom'

const AccountPanel:React.FC<ListPropsInterface> = ({ bookList }) =>{
  let match = useRouteMatch()
  return (<>
    <div>
    <Link to={`${match.url}/admin`}>Admin</Link>
    <Link to={`${match.url}/user`}>User</Link>
    </div>
<Switch>
        <Route path={`${match.path}/admin`}>
        <AdminPanel bookList={bookList}/>
        </Route>
        <Route path={`${match.path}/user`}>
        <UserPanel bookList={bookList}/>
        </Route>
</Switch>
    </>
  )
}

export default AccountPanel
