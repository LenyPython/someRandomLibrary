import AdminMenu from './AdminMenu'
import AddingForm from './AddingForm'
import  BookEntry from '../../BookEntry/BookEntry'
import { useAppSelector } from '../../../appStore/hooks'
import {
  selectBooks,
  BookInterface
} from '../../../slices/books/booksSlice'
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
  let {url} = useRouteMatch()
  let bookList = useAppSelector(selectBooks)
  return(
  <PanelGrid>
      <AdminMenu />
    <Switch>
      <Route path={`${url}/add`}>
        <AddingForm />
      </Route>
      <Route></Route>
      <Route path={url}>
      <List>
      {
        bookList.map((item: BookInterface) => (
          <BookEntry 
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

