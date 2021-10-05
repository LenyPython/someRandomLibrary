import styled from 'styled-components'
import ImgScreener from './ImgScreener/ImgScreener'
import EntryPanel from './EntryPanel/EntryPanel'
import { useAppDispatch } from '../../appStore/hooks'
import { 
  BookInterface,
  removeBook
} from '../../slices/books/booksSlice'

export const StyledEntry = styled.div`
  display: flex;
  padding: .9em 1.3em;
  margin: .6em 1.2em;
  border-radius: 15px;
  background: hsla(0, 50%, 100%, .8);
  & > * {
    margin: 0;
  }
  h3 {
    font-size: 1.5rem;
  }
  p{
    font-size: 1rem;
  }
`
const DelBtn = styled.button`
  background: red;
  border: none;
  color: white;
  font-size: 1.2rem;
  border-radius: 10px;
`

interface Props extends BookInterface {
  id: number
  adminUser?: boolean
}

const BookEntry: React.FC<Props> = props => {
  let { id, author, title, image, available } = props
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(removeBook(id))
  }
  
  return(
<StyledEntry>
  <ImgScreener
    title={title}
    image={image}
  />
  <EntryPanel
    id={id}
    author={author}
    title={title}
    available={available}
  />
  {
    props.adminUser &&  <DelBtn onClick={handleClick}>Delete Entry</DelBtn>

  }
</StyledEntry>
  )
}

export default BookEntry
