import BookEntry from '../../BookEntry/BookEntry'
import UserMenu from './UserMenu'
import { useParams } from 'react-router-dom'
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
  // let { id } = useParams()
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

