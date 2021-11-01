import styled from 'styled-components'
import EntryData from './EntryData/EntryData'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../appStore/hooks'
import { BookInterface } from '../../constants/interface/bookSlice'
import {addToDelete} from '../../slices/requests/requestsSlice'
import {getUser} from '../../slices/user/user'
import Button from '@mui/material/Button'

export const StyledEntry = styled.div`
  display: flex;
  justify-content: space-between;
  padding: .9em 1.3em;
  margin: 0 1.2em 1.2em;
  border-radius: 15px;
  background: var(--secondary-color);
  & > * {
    margin: auto 2em;
  }
  h3 {
    font-size: 1.5rem;
  }
  p{
    font-size: 1rem;
  }
`
const StyledLink = styled(Link)`
  border-radius: 10px;
  text-decoration: none;
  display: inline-block;
  border: none;
  font-size: 1.3rem;
  margin: auto .5em;
  padding: .2em .4em;
  background: var(--main-color);
  color: var(--main-button-font-color);
  cursor: pointer;
`

const BookEntry: React.FC<BookInterface> = props => {
  const { id, available } = props
  const { admin } = useAppSelector(getUser)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(addToDelete(props))
  }
  
  return(
<StyledEntry>
  <EntryData {...props}/>
  <div>
  { 
  admin ?  <Button 
    color="error"
    variant="contained"
    onClick={handleClick}>Delete Entry</Button>:
   available?
  <StyledLink to={`/account/borrow/${id}`}>Borrow It!</StyledLink> :
  <Button
  variant="contained" disabled>Unavailable</Button>
  }
  </div>
</StyledEntry>
  )
}

export default BookEntry
