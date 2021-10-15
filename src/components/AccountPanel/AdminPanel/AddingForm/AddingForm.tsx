import styled from 'styled-components'
import SearchApi from  '../SearchApi/SearchApi'
import { useAppDispatch, useAppSelector } from '../../../../appStore/hooks'
import {
  selectAddForm,
  changeImg,
  changeTitle,
  changeAuthor,
  FormInputEnum
} from '../../../../slices/addBookForm/addBookForm'
import { 
  addBook,
} from '../../../../slices/books/booksSlice'

const Container = styled.div`
width: 90%;
text-align: center;
margin: auto;
form {
  background: var(--secondary-color);
  padding: 2em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  input {
    height: 2rem;
    font-size: 1.3rem;
    padding: 0 .4em;
    &:invalid {
      border: 2px solid var(--main-error-color);
    }
  }
  label {
    font-size: 1.5rem;
    margin: .4em;
    color: var(--main-font-color);
    }
  button {
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    width: 150px;
    background: var(--main-color);
    color: var(--main-button-font-color);
    margin: 1em auto;
    }
  }
`

const AddingForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const { author, title, img } = useAppSelector(selectAddForm)


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
      <SearchApi />
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