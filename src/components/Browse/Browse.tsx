import styled from 'styled-components'
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

const BookEntry = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5em 1.3em;
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

const Browse = () => {
  let bookList = useAppSelector(selectBooks)
  return(
    <BrowserContainer>
      {
        bookList.map((item: BookInterface) => (
          <BookEntry key={item.title}>
          <p>{item.id}</p>
          <h3>{item.title}</h3>
          <p>{item.author}</p>
          <p>{item.available? 'available' : 'unavailable'}</p>
          </BookEntry>))
      }

    </BrowserContainer>
  )
}

export default Browse
