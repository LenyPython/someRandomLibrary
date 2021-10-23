import Navigation from './components/Navigation/Navigation'
import MainContent from './components/MainContent/MainContent'
import GlobalStyle from './components/Styled/GlobalStyle'
import Footer from './components/Footer/Footer'
import './App.css'
import styled from 'styled-components'
import { auth } from './firebase-config'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from './appStore/hooks'
import { onUserChange } from './slices/user/user'
import { selectTheme } from './slices/components/components'
import { getFirebaseData, emptyFirebaseData } from './sagas/actions'


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


  useEffect (() => onAuthStateChanged(auth, user => {
    const payload = user ? JSON.stringify(user) : null
    dispatch(onUserChange(payload))
    if(payload) {
      console.log('login')
      dispatch(getFirebaseData())
    }
    else {
      console.log('logout')
      dispatch(emptyFirebaseData())
    }
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
         )
}

export default App;
