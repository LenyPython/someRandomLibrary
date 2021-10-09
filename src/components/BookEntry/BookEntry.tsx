import styled from 'styled-components'
import EntryData from './EntryData/EntryData'
import { useAppDispatch } from '../../appStore/hooks'
import { returnBook } from '../../slices/borrowedBooks/borrowedBooks'
import { 
  BookInterface,
  removeBook
} from '../../slices/books/booksSlice'

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

export interface Props extends BookInterface {
  id: number
  adminUser?: boolean
}

const BookEntry: React.FC<Props> = props => {
  const { id, adminUser } = props
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(removeBook(id))
    dispatch(returnBook(id))
  }
  
  return(
<StyledEntry>
  <EntryData {...props}/>
  {
    adminUser &&  <DelBtn onClick={handleClick}>Delete Entry</DelBtn>
  }
</StyledEntry>
  )
}

export default BookEntry
