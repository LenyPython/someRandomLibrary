import { createGlobalStyle } from 'styled-components'

interface StyleProps {
	dark: boolean
}

const GlobalStyle = createGlobalStyle<StyleProps>`
:root {
  --main-color: ${props => props.dark ? 'hsl(243,100%,10%)' : 'hsl(243,100%,30%)'}
  --main-header-color: ${props => props.dark ? 'hsl(0, 0%,100%)': 'hsl(0,0%,0%)' }
  --main-font-color: ${props => props.dark ? 'hsl(0,0%,70%)': "hsl(0,0%,0%)"}
  --bg-color: ${props => props.dark ? 'hsl(243, 40%, 10% )' : 'hsl(0,0%,100%)' }
}
* {
  box-sizing: border-box;
	padding:0;
	margin: 0;
}

body {
	margin: 0;
	padding: 100px 0 0 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
}

#root {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 100vw;
}
`

export default GlobalStyle
