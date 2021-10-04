import styled from 'styled-components'
import ImgScreener from './ImgScreener/ImgScreener'
import EntryPanel from './EntryPanel/EntryPanel'
import { BookInterface } from '../../slices/books/booksSlice'

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


const BookEntry: React.FC<BookInterface> = props =>{
  let { id, title, image, author, available } = props
  return(
<StyledEntry>
  <ImgScreener image={image} title={title} />
  <EntryPanel 
    id={id}
    title={title} 
    author={author}
    available={available} 
  />
</StyledEntry>
  )
}

export default BookEntry
