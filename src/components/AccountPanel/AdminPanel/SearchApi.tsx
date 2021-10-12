import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.div`
  background: var(--secondary-color);
  padding: 2em;
  border-radius: 10px;
  display: flex;
  margin-bottom:  35px;
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

`

const SearchApi = () => {
  const [ISBN, setISBN] = useState<string>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>{
    const string = e.target.value
    if(string.match(/\D+/)) return
    setISBN(string)
  }

  return(
    <Container>
      <label htmlFor="ISBN">
        Search by ISBN:  
      <input type="text" onChange={handleChange} name="ISBN" value={ISBN}/>
      </label>
      <button>Search...</button>
    </Container>

  )
}

export default SearchApi
