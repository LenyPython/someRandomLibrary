import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import styled from 'styled-components'
import { 
  signIn,
  createUser
} from '../../firebase/firebase-config'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import {sendError} from '../../sagas/actions'
import {useAppDispatch} from '../../appStore/hooks'
import {changeIsLoading} from '../../slices/components/components'

const StyledForm = styled.form`
  background: white;
  border-radius: 10px;
  padding: 8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
interface Props {
  reg?: boolean
}

const LoginForm: React.FC<Props> = ( { reg } ) => {
  const dispatch = useAppDispatch()
  const history = useHistory()
  const [email, setEmail] = useState<string>('')
  const [pass1, setPass1] = useState<string>('')
  const [pass2, setPass2] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if(name === 'email') setEmail(value)
    if(name === 'pass1') setPass1(value)
    if(name === 'pass2') setPass2(value)
  }
  const handleSubmit = async () => {
    try {
        dispatch(changeIsLoading(true))
        if(reg && pass2) {
            await createUser(email, pass1)
            dispatch(sendError({
              alert: 'success',
              message: 'User created'
            }))
        } else await signIn(email,pass1)
        setEmail('')
        setPass1('')
        setPass2('')
        history.push('/account')
    } catch (e) {
        let error = 'Error during signIn'
        if(e instanceof Error) error = e.message
        dispatch(sendError({
          alert: 'error',
          message: error
        }))
        dispatch(changeIsLoading(false))
    } 
  }
  return(
    <StyledForm>
      <TextField 
        label="Email" 
        margin="normal"
        variant="standard"
        type="email"
        name='email'
        value={email}
        onChange={handleChange}
        required
      />              
      <TextField
        label="Password"
        margin="normal"
        variant="standard"
        type="password"
        name='pass1'
        value={pass1}
        onChange={handleChange}
        required
      />
      {
        reg&&
        <TextField
          label="Retype Password"
          margin="normal"
          variant="standard"
          type="password"
          name='pass2'
          value={pass2}
          onChange={handleChange}
          required
        />
      }
      <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
      >
      {reg?'Register':'SignIn'}
      </Button>

    </StyledForm>
  )
}

export default LoginForm
