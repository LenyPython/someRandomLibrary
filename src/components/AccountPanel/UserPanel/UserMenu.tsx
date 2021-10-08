import { useRouteMatch } from 'react-router-dom'
import { StyledMenu, 
  LinkA
} from '../../Styled/Styled'

const UserMenu = () => {
  let match = useRouteMatch()
  return (
    <StyledMenu>
    <LinkA to={`${match.url}`}>Browse</LinkA>
    <LinkA to={`${match.url}/borrowed`}>My Borrowed</LinkA>
    <LinkA to='/home'>Log out</LinkA>
    </StyledMenu>
  )

}


export default UserMenu
