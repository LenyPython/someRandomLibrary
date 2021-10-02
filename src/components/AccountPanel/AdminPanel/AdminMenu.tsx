import { useAppDispatch } from '../../../appStore/hooks'
import { 
  StyledMenu,
  Button
} from '../Styled/Styled'
import { 
  addBook, 
  removeBook, 
  borrowReturn
  }
  from '../../../slices/books/booksSlice'


const AdminMenu = () => {
  const dispatch = useAppDispatch()
  const handleAddRubish = () =>{
    dispatch(addBook({
      id: 1,
      title: 'BarKochba',
      author: 'Some Random Dude',
      available: Math.random() > 0.5
    }))
  }
  return (
    <StyledMenu>
    <Button>Add entry</Button>
    <Button onClick={handleAddRubish}>Add rubbish</Button>
    </StyledMenu>
  )

}


export default AdminMenu
