import Navigation from './components/Navigation/Navigation'
import MainContent from './components/MainContent/MainContent'
import GlobalStyle from './components/Styled/GlobalStyle'
import Footer from './components/Footer/Footer'
import AlertArea from './components/AlertArea/AlertArea'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import './App.css'
import styled from 'styled-components'
import { auth } from './firebase/firebase-config'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from './appStore/hooks'
import { onUserChange } from './slices/user/user'
import { selectTheme } from './slices/components/components'
import { selectIsLoading } from './slices/components/components'
import { 
  getFirebaseData,
  emptyFirebaseData,
  checkAdminPriv,
} from './sagas/actions'
import ReadBookContainer from './components/ReadBookContainer/ReadBookContainer'
import {getCurrentRead} from './slices/currentBook/currentBook'


const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
  width: 90%;
	min-height: 65vh;
`

function App() {
  const theme = useAppSelector(selectTheme)
  const isLoading = useAppSelector(selectIsLoading)
  const currentBook = useAppSelector(getCurrentRead)
  const dispatch = useAppDispatch()


  useEffect (() => onAuthStateChanged(auth, user => {
    const payload = {
      id: user ? user.uid : null,
      email: user ? user.email : null
    } 
    dispatch(onUserChange(payload))
    if(user) {
      dispatch(getFirebaseData())
      dispatch(checkAdminPriv(user.uid))
    }
    else {
      dispatch(emptyFirebaseData())
    }
  })
  , []) 


  return (<>
    <GlobalStyle dark={theme} />
    <AlertArea />
    <Navigation />
      <Container role='main'>
        <MainContent />
      </Container>
    <Footer />
    {currentBook.open && <ReadBookContainer />}
    {isLoading && <LoadingScreen />}
  </>
         )
}

export default App;
