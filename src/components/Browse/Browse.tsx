import styled from 'styled-components'
import BookEntry from '../BookEntry/BookEntry'
import { BookInterface } from '../../slices/books/booksSlice'

const BrowserContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: hsla(0, 50%, 50%, .4);
  width: 100%;
  max-width: 1200px;
  border-radius: 20px;
  padding: 20px;
`
export interface ListPropsInterface {
  bookList: BookInterface[]
}

const Browse: React.FC<ListPropsInterface> = ({ bookList }) => {
  return(
    <BrowserContainer>
      {
        bookList.map((item: BookInterface) => (
          <BookEntry
          {...item}
          />
          ))
      }
    </BrowserContainer>
  )
}

export default Browse
