import { createGlobalStyle } from 'styled-components'
import { ThemeType } from '../../slices/components/components'

interface StyleProps {
	dark: ThemeType
}

const GlobalStyle = createGlobalStyle<StyleProps>`
:root {
	--logo-font: 'Pacifico', cursive;
	--normal-font: 'Fira Sans Condensed', sans-serif;

  --main-color: ${props => props.dark === ThemeType.dark ? 'hsl(243, 50%, 5%)' : 'hsl(243,100%,30%)'};
	--secondary-color: ${props => props.dark === ThemeType.dark ? 'hsl(243,30%,20%)' : 'hsl(243,50%,80%)'}; 
  --bg-color: ${props => props.dark === ThemeType.dark ? 'hsl(243, 40%, 10% )' : 'hsl(0,0%,100%)' };
	--main-error-color: ${props => props.dark === ThemeType.dark ? 'hsl(0, 75%, 30% )' : 'hsl(0,100%,50%)' };

  --main-header-font-color: ${props => props.dark === ThemeType.dark ? 'hsl(0, 0%,70%)': 'hsl(0,0%,100%)' };
  --main-button-font-color: ${props => props.dark === ThemeType.dark ? 'hsl(0, 0%,70%)': 'hsl(0,0%,100%)' };
  --main-font-color: ${props => props.dark === ThemeType.dark ? 'hsl(0,0%,70%)': "hsl(0,0%,0%)"};


	--nav-height: 75px;
}
* {
  box-sizing: border-box;
	padding:0;
	margin: 0;
}

body {
	background: var(--bg-color);
	font-family: var(--normal-font);
	color: var(--main-font-color);
	margin: 0;
	padding: calc(var(--nav-height) + 45px) 0 0 0;
	display: flex;
	flex-direction: column;
	align-items: center;
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
