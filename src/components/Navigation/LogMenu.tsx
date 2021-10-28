import { StyledA } from '../Styled/Styled'
import { useAppSelector } from '../../appStore/hooks'
import { getUser } from '../../slices/user/user'
import { logOut } from '../../firebase/firebase-config'
import { useAppDispatch } from '../../appStore/hooks'
import { setState } from '../../slices/books/booksSlice'

const LogMenu = () => {
    const dispatch = useAppDispatch()
    const { id, email } = useAppSelector(getUser)
    const handleSignOut = () => {
        logOut()
        dispatch(setState([]))
    }
    return (
    <>
        {
    id && email
        ?<>
    <StyledA to='/account'> Account </StyledA>
    <StyledA 
            className='login'
            to='/home'
            onClick={handleSignOut}
    > LogOut </StyledA>
        </>
        :<>
    <StyledA className='login' to='/login'> Login </StyledA>
    <StyledA className='login' to='/register'> Register </StyledA>
        </>

        }
    </>
    )
}

export default LogMenu
