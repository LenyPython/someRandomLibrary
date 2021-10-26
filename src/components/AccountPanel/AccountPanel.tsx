import AdminPanel from './AdminPanel/AdminPanel'
import UserPanel from './UserPanel/UserPanel'
import { useAppSelector } from '../../appStore/hooks'
import { getUser } from '../../slices/user/user'


const AccountPanel:React.FC = () =>{
  const { admin } = useAppSelector(getUser)
  
  if(admin) return <AdminPanel />
  return <UserPanel />
}

export default AccountPanel
