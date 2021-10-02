import styled from 'styled-components'
import Menu from './Menu'
import {
  selectBooks,
  BookInterface
} from '../../slices/books/booksSlice'
import { useAppSelector } from '../../appStore/hooks'
import  BookEntry from '../BookEntry/BookEntry'


const PanelGrid = styled.div`
  background: red;
  opacity: .7;
  width: 100%;
  height: 100%;
  padding: 2em;
  display: grid;
  grid-template-columns: 150px 1fr;
`
const List = styled.div`
grid-column: 2;
`

const Panel = () =>{
  let bookList = useAppSelector(selectBooks)
  return (
    <PanelGrid>
      <Menu />
      <List>
      {
        bookList.map((item: BookInterface) => (
          <BookEntry 
          { ...item }
          />))
      }
      </List>
    </PanelGrid>

  )
}

export default Panel
