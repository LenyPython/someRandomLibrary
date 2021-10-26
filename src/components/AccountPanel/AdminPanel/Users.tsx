import {useAppSelector} from '../../../appStore/hooks'
import {getUsersData} from '../../../slices/usersData/user'
import { Container } from '../../Styled/Styled'



const Users = () => {
  const users = useAppSelector(getUsersData)
  const usersList = users.map(item =>(
    <div key={item.id}>
    <p>{item.id}</p>
      <p>{item.admin?'true':'false'}</p>
    </div>
  ))
  return(
    <Container>
    {usersList}
    </Container>
  )
}

export default Users
