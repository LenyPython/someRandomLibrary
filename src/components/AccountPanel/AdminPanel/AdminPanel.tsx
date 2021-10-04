import AdminMenu from './AdminMenu'
import AddingForm from './AddingForm'
import  BookEntry from '../../BookEntry/BookEntry'
import { ListPropsInterface } from '../../Browse/Browse'
import { BookInterface } from '../../../slices/books/booksSlice'
import {
  List,
  PanelGrid
} from '../Styled/Styled'
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom'


const AdminPanel: React.FC<ListPropsInterface> = ({ bookList }) =>{
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
      {
        bookList.map((item: BookInterface) => (
          <BookEntry key={`${item.id}.${item.title}`} 
          { ...item }
          />))
      }
      </List>
      </Route>
    </Switch>
    </PanelGrid>
  )
}
export default AdminPanel

