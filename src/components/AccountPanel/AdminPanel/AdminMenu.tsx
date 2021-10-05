import { useAppDispatch } from '../../../appStore/hooks'
import { useRouteMatch } from 'react-router-dom'
import { 
  StyledMenu,
  LinkA,
  Button
} from '../Styled/Styled'
import { addBook } from '../../../slices/books/booksSlice'


const AdminMenu = () => {
  let { url } = useRouteMatch()
  const dispatch = useAppDispatch()
  const handleAddRubish = () => {
    dispatch(addBook({
      title: 'BarKochba',
      author: 'Some Random Dude',
      available: Math.random() > 0.5
    }))
  }
  return (
    <StyledMenu>
    <LinkA to={`${url}/add`}>Add entry</LinkA>
    <Button onClick={handleAddRubish}>Add rubbish</Button>
    <LinkA to='/home'>Log out</LinkA>
    </StyledMenu>
  )

}


export default AdminMenu
