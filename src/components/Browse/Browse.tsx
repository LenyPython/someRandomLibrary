import styled from 'styled-components'
import BookEntry from '../BookEntry/BookEntry'
import {
  selectBooks,
  BookInterface
} from '../../slices/books/booksSlice'
import { useAppSelector } from '../../appStore/hooks'

const BrowserContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: hsla(0, 50%, 50%, .4);
  width: 100%;
  max-width: 1200px;
  border-radius: 20px;
  padding: 20px;
`



const Browse: React.FC = () => {
  let bookList = useAppSelector(selectBooks)
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
