import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import styled from 'styled-components'
import { auth } from '../../firebase-config'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { useState } from 'react'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`
interface Props {
  reg?: boolean
}

const LoginForm: React.FC<Props> = ( { reg } ) => {
  const [email, setEmail] = useState<string>('')
  const [pass1, setPass1] = useState<string>('')
  const [pass2, setPass2] = useState<string>('')

  const handleChange = () => {}
  const handleClick = () => {
   reg
     ?createUserWithEmailAndPassword(auth, email, pass1)
     :signInWithEmailAndPassword(auth, email, pass1)
  }

  return(
    <StyledForm>
      <TextField 
        label="Email" 
        margin="normal"
        variant="standard"
        type="email"
        value={email}
        onChange={handleChange}
        required
      />              
      <TextField
        label="Password"
        margin="normal"
        variant="standard"
        type="password"
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
          value={pass2}
          onChange={handleChange}
          required
        />
      }
      <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
      >
      {reg?'Register':'SignIn'}
      </Button>

    </StyledForm>
  )
}

export default LoginForm
