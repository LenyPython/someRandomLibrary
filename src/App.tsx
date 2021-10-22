import Navigation from './components/Navigation/Navigation'
import MainContent from './components/MainContent/MainContent'
import GlobalStyle from './components/Styled/GlobalStyle'
import Footer from './components/Footer/Footer'
import './App.css'
import styled from 'styled-components'
import db from './firebase-config'
import { onSnapshot, collection } from 'firebase/firestore'
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from './appStore/hooks'
import { setState } from './slices/books/booksSlice'
import { selectTheme } from './slices/components/components'
import { BookInterface } from './constants/interface/bookSlice'


const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
  width: 90%;
	min-height: 65vh;
`

function App() {
  const theme = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()
  useEffect (() => onSnapshot(collection(db, 'BookEntry'), snapshot =>{
    const booksArray: BookInterface[] = snapshot.docs.map(doc=>{
      const { authors, title, ISBN, cover, available } = doc.data()
      return {
        authors,
        title,
        ISBN,
        cover,
        available
      }
    })
      dispatch(setState(booksArray))
                             
  })
  , []) 
  return (<>
    <GlobalStyle dark={theme} />
    <Navigation />
      <Container role='main'>
        <MainContent />
      </Container>
    <Footer />
  </>
         );
}

export default App;
