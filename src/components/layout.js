import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { space, flexbox } from 'styled-system'
import './layout.css'
import { theme, colors } from '../theme'
import Nav from './Nav'

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  min-height: 100vh;
  background-color: ${colors.black};

  @media (max-width: 40em) {
    margin-bottom: 2rem;
  }
`

const Main = styled.main`
  display: flex;
  flex-flow: column wrap;

  ${flexbox};
  ${space};
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Nav />
        <Main p={['2rem 1rem', '6rem']} alignItems={['center', 'flex-start']}>
          {children}
        </Main>
      </ThemeProvider>
    </Wrapper>
  )
}

export default Layout

// function getTitleText(path) {
//   switch (path) {
//     case '/quest':
//       return 'PROJECTS'
//     case '/item':
//       return 'CODE'
//     case '/log':
//       return 'BLOG'
//     default:
//       return ''
//   }
// }
