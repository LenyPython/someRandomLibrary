import { StyledMenu, 
  Button,
  LinkA
} from '../Styled/Styled'

const UserMenu = () => {
  return (
    <StyledMenu>
    <LinkA to='/user'>Browse</LinkA>
    <LinkA to='/user/borrowed'>My Borrowed</LinkA>
    <LinkA to='/home'>Log out</LinkA>
    </StyledMenu>
  )

}


export default UserMenu
