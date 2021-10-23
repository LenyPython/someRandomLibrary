import styled from 'styled-components'
import LogMenu from '../Navigation/LogMenu'
import { useAppSelector } from '../../appStore/hooks'
import { selectBooks } from '../../slices/books/booksSlice'
import { toBooksList } from '../../customFunc/Funcs'
import { getUser } from '../../slices/user/user'

const BrowserContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: var(--secondary-color);
  width: 100%;
  min-height: 500px;
  max-width: 1200px;
  border-radius: 20px;
  padding: 20px;
  h1{
    margin: 3em auto;
  }
`

const Browse: React.FC = () => {
  let bookObj = useAppSelector(selectBooks)
  let user = useAppSelector(getUser)
  const list = toBooksList(bookObj)


  return(
    <BrowserContainer>
      {
        list.length > 0 || user
        ?list
        :
    <div>
      <h1>Please Login or Register to browse content...</h1>
      <LogMenu />
        </div>
      }
    </BrowserContainer>
  )
}

export default Browse

