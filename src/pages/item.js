import React from 'react'
import styled from 'styled-components'
import solIcon from '../assets/solidity.svg'
import jsIcon from '../assets/js.svg'
import tsIcon from '../assets/ts.svg'
import { theme } from '../theme'
import Card from '../components/Card'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Title from '../components/Title'

const Icon = styled.img`
  height: 15px;
  margin-left: 7px;
  width: 15px;
`

const Container = styled.div`
  @media (min-width: ${theme.breakpoints[0]}) {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    /* align-content: flex-start; */
  }
`

const Item = () => {
  return (
    <Layout>
      <SEO title="Item" />
      <Title mainText="CODE" />
      <Container>
        <Card
          title="Panvala Governance App"
          desc="Monorepo for smart contracts, client interface, api server, website donation integration, and various scripts."
          link="https://github.com/ConsenSys/panvala"
          icons={
            <div>
              <Icon src={solIcon} />
              <Icon src={tsIcon} />
            </div>
          }
        />
        <Card
          title="TCR"
          desc="Initially developed for the AdChain project, this smart contract system has become the canonical implementation of a generic hash-keyed token-curated registry."
          link="https://github.com/skmgoldin/tcr"
          icons={
            <div>
              <Icon src={solIcon} />
              <Icon src={jsIcon} />
            </div>
          }
        />
        <Card
          title="PLCR Voting"
          desc="Partial-lock Commit-Reveal Voting is an efficient system for token-weighted voting on the Ethereum blockchain."
          link="https://github.com/ConsenSys/PLCRVoting"
          icons={
            <div>
              <Icon src={solIcon} />
              <Icon src={jsIcon} />
            </div>
          }
        />
        <Card
          title="TCR UI"
          desc="Universal frontend user interface to interact with token-curated registries"
          link="https://github.com/kangarang/tcr-ui"
          icons={
            <div>
              <Icon src={jsIcon} />
            </div>
          }
        />
        <Card
          title="Eth Events"
          desc="Library for querying and decoding Ethereum event logs."
          link="https://github.com/kangarang/eth-events"
          icons={
            <div>
              <Icon src={tsIcon} />
            </div>
          }
        />
        <Card
          title="Inflating Supply TCR"
          desc="By removing the minimum deposit requirement, IS-TCR is a drastically simpler version of TCR."
          link="https://github.com/kangarang/is-tcr"
          icons={
            <div>
              <Icon src={solIcon} />
              <Icon src={jsIcon} />
            </div>
          }
        />
        <Card
          title="Participation Mined TCR"
          desc={`PM-TCR has the ability to inflate the token's liquid supply without increasing the token's total supply. Majority faction voters effectively earn inflation rewards for their curation participation per epoch.`}
          link="https://github.com/kangarang/pm-tcr"
          icons={
            <div>
              <Icon src={solIcon} />
              <Icon src={jsIcon} />
            </div>
          }
        />
        <Card
          title="TCR CLI"
          desc="TCR-CLI is a command-line tool to interact with token-curated registries"
          link="https://github.com/kangarang/tcr-cli"
          icons={
            <div>
              <Icon src={jsIcon} />
            </div>
          }
        />
      </Container>
    </Layout>
  )
}

export default Item
