import UserMenu from './UserMenu'
import BorrowBook from './BorrowBook/BorrowBook'
import BorrowedBooks from './BorrowedBooks/BorrowedBooks'
import { useAppSelector } from '../../../appStore/hooks'
import { selectBooks } from '../../../slices/books/booksSlice'
import { toBooksList } from '../../../customFunc/Funcs'
import { 
  Switch,
  useRouteMatch,
  Route
} from 'react-router-dom'
import {
  List,
  PanelGrid
} from '../../Styled/Styled'


const UserPanel: React.FC = () =>{
  let { url } = useRouteMatch()
  let booksObj = useAppSelector(selectBooks)
  const list = toBooksList(booksObj)

  return(
    <PanelGrid>
    <UserMenu />
    <Switch>
      <Route exact path={url} >
      <List>
        {list}
      </List>
      </Route>
      <Route path={`${url}/borrow/:id`}>
        <BorrowBook />
      </Route>
      <Route path={`${url}/borrowed`}>
        <BorrowedBooks />
      </Route>
    </Switch>
    </PanelGrid>
  )
}
export default UserPanel

