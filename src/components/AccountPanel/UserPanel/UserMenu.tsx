import { useRouteMatch } from 'react-router-dom'
import {logOut} from '../../../firebase/firebase-config'
import { StyledMenu, 
  Button,
  LinkA
} from '../../Styled/Styled'

const UserMenu = () => {
  let match = useRouteMatch()
  return (
    <StyledMenu>
    <LinkA to={`${match.url}`}>Browse</LinkA>
    <LinkA to={`${match.url}/borrowed`}>My Borrowed</LinkA>
    <Button onClick={logOut}>Log out</Button>
    </StyledMenu>
  )

}


export default UserMenu
