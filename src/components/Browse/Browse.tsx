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
  width: 80%;
  max-width: 1200px;
  border-radius: 20px;
  padding: 20px;
  margin-top: 150px;
`

const BookEntry = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: .5em 1.3em;
  margin: .6em 1.2em;
  background: hsla(0, 50%, 100%, .8);
  h3 {
    font-size: 2rem;
  }
  p{
    font-size: 1.3rem;
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
          <p>{item.available? 'in stock' : 'unavailable'}</p>
          </BookEntry>))
      }

    </BrowserContainer>
  )
}

export default Browse
