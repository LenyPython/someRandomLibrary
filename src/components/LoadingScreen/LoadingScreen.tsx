import Box from '@mui/material/Box';
import styled from 'styled-components'
import LinearProgress from '@mui/material/LinearProgress';

const ScreenShadow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0 0 0 0;
  background: var(--secondary-color);
`

const LoadingScreen = () => {
  return (
    <ScreenShadow>
    <Box sx={{
      minWidth: '300px',
      maxWidth: '1000px',
      width: '85%'
      }}>
      <LinearProgress color='inherit'/>
    </Box>
    </ScreenShadow>
  )
}

export default LoadingScreen
