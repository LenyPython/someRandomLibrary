import styled from 'styled-components'
import { useAppDispatch } from '../../appStore/hooks'
import { 
  addBook, 
  removeBook, 
  borrowReturn
  }
  from '../../slices/books/booksSlice'

const StyledMenu = styled.div`
  box-sizing: border-box;
  grid-column: 1;
  background: lightblue;
  border-radius 10px;
  width: 100%;
  max-height: 200px;
  padding: .6em;
  text-align: center;
  p{
    margin: .3em auto;
  }
`
const Button = styled.button`
  font-weight: bold;
  width: 90%;
  background: blue;
  border-radius: .4em;
  border: none;
  padding: .3em .6em;
  margin: .4em;
  color: white
`

const Menu = () => {
  const dispatch = useAppDispatch()
  const handleAddRubish = () =>{
    dispatch(addBook({
      id: 1,
      title: 'BarKochba',
      author: 'Some Random Dude',
      available: Math.random() > 0.5
    }))
    console.log('rubbish')

  }
  return (
    <StyledMenu>
    <Button>Add entry</Button>
    <Button onClick={handleAddRubish}>Add rubbish</Button>
    </StyledMenu>
  )

}


export default Menu
