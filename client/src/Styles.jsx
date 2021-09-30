import { createGlobalStyle } from 'styled-components'

export const theme = {
  bodyFont: "'Inter', sans-serif",
  headingFont: "'Baloo Bhai 2', sans-serif",
  primaryColor: {
    light: '#163888',
    dark: '#81A4DF'
  },
  background: {
    light: '#FFFFFF',
    dark: '#37343A'
  },
  secondaryBackground: {
    light: '#EAEAEA',
    dark: '#4C4C4C'
  },
  text: {
    light: '#000000',
    dark: '#D8D5DB'
  },
  placeholderText: '#676767',
  link: '#6E87C1',
  icons: '#C3C3C3',
  arrows: '#D8D5DB',
  borderRadius: '15px'
}

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@800&family=Inter:wght@400;700&display=swap');

  *, *:after, *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 18px;
    font-family: ${({ theme }) => theme.bodyFont};
    background: ${({ theme }) => theme.background.light};
  }

  h1, h2 {
    font-family: ${({ theme }) => theme.headingFont};
    color: ${({ theme }) => theme.primaryColor.light};
  }

  h1 {
    font-size: 2.67rem;
  }

  h2 {
    font-size: 2rem;
  }

  a {
    color: ${({ theme }) => theme.link};
  }

  .module {
    background-color: ${({ theme }) => theme.secondaryBackground.light};
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`
