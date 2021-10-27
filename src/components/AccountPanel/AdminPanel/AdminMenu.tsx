import { useRouteMatch } from 'react-router-dom'
import {useAppSelector} from '../../../appStore/hooks'
import {reqLength} from '../../../slices/requests/requestsSlice'
import {logOut} from '../../../firebase-config'
import { 
  StyledMenu,
  Button,
  LinkA,
} from '../../Styled/Styled'


const AdminMenu = () => {
  let { url } = useRouteMatch()
  const requestsNumber = useAppSelector(reqLength)

  return (
    <StyledMenu>
    <LinkA to={`${url}`}>Browse</LinkA>
    <LinkA to={`${url}/add`}>Add entry</LinkA>
    <LinkA to={`${url}/requests`}>
      Requests { requestsNumber > 0 && `${requestsNumber}` }
    </LinkA>
    <LinkA to={`${url}/show_users`}>Users</LinkA>
    <Button onClick={logOut}>Logout</Button>
    </StyledMenu>
  )

}


export default AdminMenu
