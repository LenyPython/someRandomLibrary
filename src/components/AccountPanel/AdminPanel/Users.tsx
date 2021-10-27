import styled from 'styled-components'
import {useAppDispatch, useAppSelector} from '../../../appStore/hooks'
import {getUsersData} from '../../../slices/usersData/user'
import { Container } from '../../Styled/Styled'
import Button from '@mui/material/Button'
import {updateUserPrivlidge} from '../../../sagas/actions'


const UserContainer = styled.div`
  border: 2px solid var(--main-color);
  min-width: 350px;
  width: 30%;
  border-radius: 5px;
  padding: 20px;
  margin: 1em auto;
  p {
    margin: .5em
  }
`


const Users = () => {
  const users = useAppSelector(getUsersData)
  const dispatch = useAppDispatch()
  const usersList = users.map(item =>(
    <UserContainer key={item.id}>
      <p>Id: {item.id}</p>
      <p>Email: {item?.email ?? 'None'}</p>
      <p>Admin permison: {item.admin?'true':'false'}</p>
      <Button
      color="error"
      >Delete Account</Button>
      {
        item.admin?
          <Button 
          color="secondary"
            onClick={()=>{
              dispatch(updateUserPrivlidge(item.id!,false))
            }}
          >
          Take admin rights
          </Button>:
          <Button
          color="success"
            onClick={()=>{
              dispatch(updateUserPrivlidge(item.id!,true))
            }}
          >
          Give admin rights
          </Button>


      }
    </UserContainer>
  ))
  return(
    <Container>
    {usersList}
    </Container>
  )
}

export default Users
