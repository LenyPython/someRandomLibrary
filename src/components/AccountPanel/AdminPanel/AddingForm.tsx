import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../../appStore/hooks'
import {
  selectAddForm,
  changeImg,
  changeTitle,
  changeAuthor
} from '../../../slices/addBookForm/addBookForm'

const Container = styled.div`
width: 90%;
text-align: center;
margin: auto;
form {
  display: flex;
  flex-direction: column;
  label {
    font-size: 1.5rem;
    margin: .4em;
    color: white;
    }
  button {
    margin: 1em;
    }
  }
`
const AUTHOR = 'author'
const TITLE = 'title'
const IMG = 'img'


const AddingForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const { author, title, img } = useAppSelector(selectAddForm)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.name, e.target.value)
    switch(e.target.name){
      case AUTHOR:
        dispatch(changeAuthor(e.target.value))
        break
      case TITLE:
        dispatch(changeTitle(e.target.value))
        break
      case IMG:
        dispatch(changeImg(e.target.value))
        break
      default:
        throw new Error('Something went wrong with filling the form...')

    }

  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
      <label htmlFor='author'>Author</label>
      <input type="text" onChange={handleChange} name={AUTHOR} value={author} />
      <label htmlFor='title'>Title</label>
      <input type="text" onChange={handleChange} name={TITLE} value={title} />
      <label htmlFor='img'>Cover image</label>
      <input type="url" onChange={handleChange} name={IMG} value={img} />
      <button type='submit'>Add book</button>
    </form>
    </Container>
        )
}


export default AddingForm
