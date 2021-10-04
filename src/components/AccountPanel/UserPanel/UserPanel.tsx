import BookEntry from '../../BookEntry/BookEntry'
import UserMenu from './UserMenu'
import BorrowBook from './BorrowBook/BorrowBook'
import { 
  Switch,
  useRouteMatch,
  Route
} from 'react-router-dom'
import { BookInterface } from '../../../slices/books/booksSlice'
import { ListPropsInterface } from '../../Browse/Browse'
import {
  List,
  PanelGrid
} from '../Styled/Styled'


const UserPanel: React.FC<ListPropsInterface> = ({ bookList }) =>{
  let { url } = useRouteMatch()
  return(
    <PanelGrid>
    <UserMenu />
    <Switch>
      <Route exact path={url} >
      <List>
      {
        bookList.map((item: BookInterface) => (
          <BookEntry 
          { ...item }
          />))
      }
      </List>
      </Route>
      <Route path={`${url}/borrow/:id`}>
      <BorrowBook />
      </Route>
    </Switch>
    </PanelGrid>
  )
}
export default UserPanel

