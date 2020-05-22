import React from 'react'
import styled from 'styled-components'
import { typography, color } from 'styled-system'

import ghIcon from '../assets/github.svg'
import twIcon from '../assets/twitter.svg'
import liIcon from '../assets/linkedin.svg'
import emIcon from '../assets/email.svg'
import Title from '../components/Title'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

const Summary = styled.div`
  font-family: 'Pragmata Pro';
  font-size: 12px;
  line-height: 1.1rem;
  margin: 2rem 1rem;
  ${typography};
  ${color};
`
const ContactIcons = styled.div`
  display: flex;
  align-self: flex-start;
  margin-left: 1rem;
`
const Icon = styled.img`
  height: 35px;
  margin-right: 30px;
  width: 35px;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="System" />
      <Title mainText="ISAAC KANG" subText="Programmer" />
      <Summary fontSize={[0, 1]} color="grey">
        I build tools and applications for the Ethereum network. Currently I am working on Treum at
        ConsenSys.
      </Summary>
      <ContactIcons>
        <a href="https://github.com/kangarang" target="_blank" rel="noopener noreferrer">
          <Icon src={ghIcon} />
        </a>
        <a href="https://twitter.com/_kangarang" target="_blank" rel="noopener noreferrer">
          <Icon src={twIcon} />
        </a>
        <a href="https://linkedin.com/in/isaackang" target="_blank" rel="noopener noreferrer">
          <Icon src={liIcon} />
        </a>
        <a href="mailto:isaac.kang@protonmail.ch">
          <Icon src={emIcon} />
        </a>
      </ContactIcons>
    </Layout>
  )
}

export default IndexPage
