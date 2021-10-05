import AdminMenu from './AdminMenu'
import AddingForm from './AddingForm'
import {
  List,
  PanelGrid
} from '../Styled/Styled'
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom'


const AdminPanel: React.FC = () =>{
  let match = useRouteMatch()
  return(
  <PanelGrid>
      <AdminMenu />
    <Switch>
      <Route path={`${match.path}/add`}>
        <AddingForm />
      </Route>
      <Route path={`${match.path}`}>
      <List>
      </List>
      </Route>
    </Switch>
    </PanelGrid>
  )
}
export default AdminPanel

