import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { theme, colors } from '../theme'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Title from '../components/Title'

function Webs() {
  return (
    <>
      <div color="blue">Web 1.0: I can't recall</div>
      <div>Web 2.0: I can't remember</div>
      <div>Web 3.0: I can't forget</div>
    </>
  )
}

const Quote = styled.div`
  color: ${colors.orange};
`

function BitcoinOwnership() {
  return (
    <>
      <p>
        Bitcoin ownership is established through digital keys, digital signatures, and Bitcoin
        addresses.
      </p>
      <p>
        A Bitcoin address is the deterministic output of a cryptographic hash function that takes a
        private key as its input. Digital keys and Bitcoin addresses can be produced without being
        connected to the Bitcoin protocol or even the Internet! In fact, “accounts” are actually
        just abstractions we use to describe digital key pairs. It’s literally just two numbers that
        are related to one another. So technically, every account has always existed everywhere, and
        you can use any “wallet” to access any account as long as you know its private key.
      </p>
      <Quote>
        <p>
          “In bitcoin, there are no coins, no senders, no recipients, no balances, no accounts, and
          no addresses … Thus, a user’s bitcoin “balance” is the sum of all UTXO that user’s wallet
          can spend and which may be scattered among hundreds of transactions and hundreds of
          blocks.”
        </p>
        <p>- Andreas Antonopoulos, Mastering Bitcoin</p>
      </Quote>
      <p>So...</p>
      <p>
        You don’t own any value. You don’t really “own” anything. What you KNOW is this secret
        number, which has a specific connection with the Bitcoin network. And since there are SO
        many numbers in the Bitcoin network (2¹⁶⁰ addresses), we can rely on this ridiculous
        probability and assume no one else will know that secret number.
      </p>
      <p>
        So because you’re the only one that practically knows that secret number, you practically
        “own” that secret number, which means you practically “own” its specific connection with the
        Bitcoin network. And since the network is decentralized, you can use that secret connection
        to participate in the open network, bypassing borders, permissions, and ultimately trust.
      </p>
    </>
  )
}

const Container = styled.div`
  @media (min-width: ${theme.breakpoints[0]}) {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }
`

const Log = () => {
  return (
    <Layout>
      <SEO title="Log" />
      <Title mainText="BLOG" />
      <Container>
        <Card
          title='Bitcoin "ownership"'
          date="November 20, 2018"
          desc={<BitcoinOwnership />}
          width={['315px', '900px']}
        />
        <Card title="Web5" date="April 6, 2018" desc={<Webs />} />
      </Container>
    </Layout>
  )
}

export default Log
