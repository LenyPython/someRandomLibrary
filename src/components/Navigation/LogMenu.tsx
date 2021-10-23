import { StyledA } from '../Styled/Styled'
import { useAppSelector } from '../../appStore/hooks'
import { getUser } from '../../slices/user/user'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase-config'
import { useAppDispatch } from '../../appStore/hooks'
import { setState } from '../../slices/books/booksSlice'

const LogMenu = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(getUser)
    const handleSignOut = () => {
        signOut(auth)
        dispatch(setState([]))
    }
    return (
    <>
        {
    user
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
