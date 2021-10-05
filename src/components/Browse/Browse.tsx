import styled from 'styled-components'
import { useAppSelector } from '../../appStore/hooks'
import { selectBooks } from '../../slices/books/booksSlice'
import { toBooksList } from '../../customFunc/Funcs'

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
  let bookObj = useAppSelector(selectBooks)
  const list = toBooksList(bookObj)
  return(
    <BrowserContainer>
      {list}
    </BrowserContainer>
  )
}

export default Browse

