import {useAppSelector, useAppDispatch} from '../../appStore/hooks'
import {getCurrentRead, closeWindow} from '../../slices/currentBook/currentBook'
import Button from '@mui/material/Button'
import styled from 'styled-components'


const ReadContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  inset: 100px 150px;
  padding: 3em 5em;
  background: var(--secondary-color);
  border-radius: 10px;
  & > img {
    width: 30%;
  }
  & > div {
    *{
      margin: 1em 0;
    }
    padding: 2em;
    width: 60%;
    display: flex;
    flex-direction: column;
  }
`

const ReadBookContainer = () => {
  const { ISBN, authors, title, cover } = useAppSelector(getCurrentRead)
  const dispatch = useAppDispatch()
  return (
    <ReadContainer>
      <img src={cover} alt="Book Cover" />
      <div>
        <Button
          variant="contained"
          color="error"
          onClick={()=>{dispatch(closeWindow())}}
        >
        Close
        </Button>
      <h1>{title}</h1>
      <h2>{authors}</h2>
      <h3>ISBN: {ISBN}</h3>
      <p>
        {
        'jskdhfsahf;alshdfncxne\nasdhfashdfasdhfasldhfsadh' +
        'sdfhsjdhfkjashdfj' +
        'jskdhfsahf;alshdfncxne\nasdhfashdfasdhfasldhfsadh' +
        'sdfhsjdhfkjashdfj' +
        'jskdhfsahf;alshdfncxne\nasdhfashdfasdhfasldhfsadh' +
        'sdfhsjdhfkjashdfj' +
        'jskdhfsahf;alshdfncxne\nasdhfashdfasdhfasldhfsadh' +
        'sdfhsjdhfkjashdfj' +
        '\nEND'
        }
      </p>
      </div>
    </ReadContainer>
  )
}

export default ReadBookContainer
