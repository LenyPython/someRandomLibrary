
import BookEntry from '../../BookEntry/BookEntry'
import UserMenu from './UserMenu'
import { useAppSelector } from '../../../appStore/hooks'
import {
  selectBooks,
  BookInterface
} from '../../../slices/books/booksSlice'
import {
  List,
  PanelGrid
} from '../Styled/Styled'


const UserPanel: React.FC = () =>{
  let bookList = useAppSelector(selectBooks)
  return(
    <PanelGrid>
      <UserMenu />
      <List>
      {
        bookList.map((item: BookInterface) => (
          <BookEntry 
          { ...item }
          />))
      }
      </List>

    </PanelGrid>
  )
}
export default UserPanel

