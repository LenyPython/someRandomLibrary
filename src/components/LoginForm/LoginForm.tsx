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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if(name === 'email') setEmail(value)
    if(name === 'pass1') setPass1(value)
    if(name === 'pass2') setPass2(value)
  }
  const handleSubmit = async () => {
    if(!email || !pass1 || !pass2) return
   reg
     ?createUserWithEmailAndPassword(auth, email, pass1)
     : await signInWithEmailAndPassword(auth, email, pass1)
        setEmail('')
        setPass1('')
        setPass2('')
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