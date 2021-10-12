import AdminMenu from './AdminMenu'
import AddingForm from './AddingForm'
import SearchApi from  './SearchApi'
import { toBooksList } from '../../../customFunc/Funcs'
import { useAppSelector } from '../../../appStore/hooks'
import { selectBooks } from '../../../slices/books/booksSlice'
import {
  List,
  PanelGrid
} from '../../Styled/Styled'
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom'


const AdminPanel: React.FC = () =>{
  let match = useRouteMatch()
  const booksObj = useAppSelector(selectBooks)
  const list = toBooksList(booksObj, true)
  
  return(
  <PanelGrid>
      <AdminMenu />
    <Switch>
      <Route path={`${match.path}/add`}>
        <AddingForm />
      </Route>
      <Route path={`${match.path}/browse`} >
      <List>
        {list}
      </List>
      </Route>
      <Route path={`${match.path}`} exact>
      <List>
        {list}
      </List>
      </Route>
    </Switch>
    </PanelGrid>
  )
}
export default AdminPanel

