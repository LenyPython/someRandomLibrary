import styled from 'styled-components'
import EntryData from './EntryData/EntryData'
import { Link } from 'react-router-dom'
import { DisabledBtn } from '../Styled/Styled'
import { useAppDispatch } from '../../appStore/hooks'
import { returnBook } from '../../slices/borrowedBooks/borrowedBooks'
import { removeBook } from '../../slices/books/booksSlice'
import { BookInterface } from '../../constants/interface/bookSlice'

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
const DelBtn = styled.button`
  background: var(--main-error-color);
  border: none;
  padding: .5em;
  color: var(--main-button-font-color);
  font-size: 1.2rem;
  border-radius: 10px;
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

export interface Props extends BookInterface {
  id: number
  adminUser?: boolean
}

const BookEntry: React.FC<Props> = props => {
  const { id, adminUser, available } = props
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(removeBook(id))
    dispatch(returnBook(id))
  }
  
  return(
<StyledEntry>
  <EntryData {...props}/>
  <div>
  { 
  adminUser ?  <DelBtn onClick={handleClick}>Delete Entry</DelBtn>:
   available?
  <StyledLink to={`/account/user/borrow/${id}`}>Borrow It!</StyledLink> :
  <DisabledBtn>Unavailable</DisabledBtn>
  }
  </div>
</StyledEntry>
  )
}

export default BookEntry
