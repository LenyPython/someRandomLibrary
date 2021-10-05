import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../../appStore/hooks'
import {
  selectAddForm,
  changeImg,
  changeTitle,
  changeAuthor,
  FormInputEnum
} from '../../../slices/addBookForm/addBookForm'
import { 
  addBook,
  noOfEntries
} from '../../../slices/books/booksSlice'

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

const AddingForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const { author, title, img } = useAppSelector(selectAddForm)
  // const { idx } = useAppSelector(noOfEntries)


  const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if(author === '' || title === '') return
    dispatch(addBook({
            author,
            title,
            available: true,
            image: img
          }))
    dispatch(changeTitle(''))
    dispatch(changeAuthor(''))
    dispatch(changeImg(''))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    switch(e.target.name){
      case FormInputEnum.author:
        dispatch(changeAuthor(e.target.value))
        break
      case FormInputEnum.title:
        dispatch(changeTitle(e.target.value))
        break
      case FormInputEnum.img:
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
      <input type="text" onChange={handleChange} name={FormInputEnum.author} value={author} />
      <label htmlFor='title'>Title</label>
      <input type="text" onChange={handleChange} name={FormInputEnum.title} value={title} />
      <label htmlFor='img'>Cover image</label>
      <input type="url" onChange={handleChange} name={FormInputEnum.img} value={img} />
      <button type='submit'>Add book</button>
    </form>
    </Container>
        )
}


export default AddingForm
