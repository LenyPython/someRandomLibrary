import AdminMenu from './AdminMenu'
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



const AdminPanel: React.FC = () =>{
  let bookList = useAppSelector(selectBooks)
  return(
  <PanelGrid>
      <AdminMenu />
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
export default AdminPanel

