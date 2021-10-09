import AdminPanel from './AdminPanel/AdminPanel'
import UserPanel from './UserPanel/UserPanel'
import styled from 'styled-components'
import { 
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom'

const AccBtn = styled(Link)`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  margin: .5em 3em;
  background: var(--main-color);
  color: var(--main-button-font-color);
  border-radius: 5px;
  min-width: 80px;
  padding: 1em;
`

const AccountPanel:React.FC = () =>{
  let match = useRouteMatch()
  return (<>
    <div>
    <AccBtn to={`${match.url}/admin`}>Admin</AccBtn>
    <AccBtn to={`${match.url}/user`}>User</AccBtn>
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
