import AdminPanel from './AdminPanel/AdminPanel'
import UserPanel from './UserPanel/UserPanel'
import { useAppSelector } from '../../appStore/hooks'
import { getUser } from '../../slices/user/user'
import { Redirect } from 'react-router-dom'


const AccountPanel:React.FC = () =>{
  const { id, email, admin } = useAppSelector(getUser)
  
  if(!id || !email) return <Redirect to='/home' />
  if(admin) return <AdminPanel />
  return <UserPanel />
}

export default AccountPanel
