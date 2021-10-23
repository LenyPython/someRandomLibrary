import styled from 'styled-components'
import FoundEntries from './FoundEntries'
import { useAppDispatch } from '../../../../appStore/hooks'
import { useState } from 'react'
import { getBook } from '../../../../sagas/actions'

const Container = styled.div`
  background: var(--secondary-color);
  padding: 2em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom:  35px;
  a {
    text-decoration: none;
  }
  .search-bar {
    display: flex;
  }
  input {
    height: 1.8rem;
    font-size: 1.1rem;
    padding: 0 .4em;
    margin: .4em;
    &:invalid {
      border: 2px solid var(--main-error-color);
    }
    }
  label {
    font-size: 1.2rem;
    margin: .4em;
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
    #error-msg{
      font-size: 1.3rem;
      color: var(--main-error-color);
      margin: .5em;
    }
`

const SearchApi = () => {
  const [ISBN, setISBN] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>{
    const string = e.target.value
    if(string.match(/\D+/)) return
    setISBN(string)
  }

  const handleClick = () => {
    if(ISBN.length !== 10 && ISBN.length !== 13) return
    dispatch(getBook(ISBN))
  }

  return(
    <Container>
      <div className='search-bar'>
      <label htmlFor="ISBN">
        Search <a href='https://openlibrary.org/explore'>OpenLibrary </a>
        by ISBN( 10 or 13 char):  
      <input type="text" onChange={handleChange} name="ISBN" value={ISBN}/>
      </label>
      <button onClick={handleClick}>Search...</button>
      </div>
      <div id="error-msg"></div>
      <h2>Latest search: </h2>
      <FoundEntries />
    </Container>

  )
}

export default SearchApi
