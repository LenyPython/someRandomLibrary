import { useRouteMatch } from 'react-router-dom'
import {useAppSelector} from '../../../appStore/hooks'
import { selectBorrowedBooksLength } from '../../../slices/borrowedBooks/borrowedBooks'
import {logOut} from '../../../firebase/firebase-config'
import { StyledMenu, 
  Button,
  LinkA
} from '../../Styled/Styled'

const UserMenu = () => {
  let match = useRouteMatch()
  const myBorrowedLength = useAppSelector(selectBorrowedBooksLength)
  const linkColor = myBorrowedLength > 0 ? 'event' : ''
  return (
    <StyledMenu>
    <LinkA to={`${match.url}`}>Browse</LinkA>
    <LinkA className={linkColor} to={`${match.url}/borrowed`}>
      My Borrowed {myBorrowedLength > 0 ? {myBorrowedLength}:''}</LinkA>
    <Button onClick={logOut}>Log out</Button>
    </StyledMenu>
  )

}


export default UserMenu
