import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'
import Card from '../components/Card'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Title from '../components/Title'

const Container = styled.div`
  @media (min-width: ${theme.breakpoints[0]}) {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }
`

const Quest = () => {
  return (
    <Layout>
      <SEO title="Quest" />
      <Title mainText="PROJECTS" />
      <Container>
        <Card
          title="ConsenSys"
          desc="ConsenSys is a global organism building tools, applications, and infrastructure that enable a decentralized world."
          link="https://consensys.net"
        />
        <Card
          title="Treum"
          desc="Treum helps businesses build trust with their customers by bringing transparency, traceability and tradability to supply chains."
          link="https://treum.io"
        />
        <Card
          title="Panvala"
          desc="Panvala is a decentralized foundation that helps fund the work that the whole Ethereum community depends on."
          link="https://panvala.com"
        />
        <Card
          title="Crypto Product Lab"
          desc="The mission of CPL is to move beyond theory and discover the limits and real properties of novel cryptosystems by observing them in production, and using that data to improve them through design and engineering."
          link="https://tcr.team"
        />
        <Card
          title="Token-Curated Registries"
          desc="A token-curated registry is a decentralized list which uses an intrinsic token to incentivize users to curate the list's contents judiciously."
          link="https://medium.com/@ilovebagels/token-curated-registries-1-0-61a232f8dac7"
        />
      </Container>
    </Layout>
  )
}

export default Quest
