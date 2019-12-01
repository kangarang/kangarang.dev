import React, { useState } from 'react'
import styled from 'styled-components'
import { space, layout, typography } from 'styled-system'
import { Link } from 'gatsby'

const NavLink = styled(Link)`
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  color: black;
  box-shadow: none;
  opacity: 0.9;
  cursor: pointer;
`

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;

  margin-top: ${({ active }) => (active ? '0px' : '9px')};
  background-color: ${({ active }) => (active ? '#C4C4C4' : '#333333')};
  height: ${({ active }) => (active ? '30px' : '21px')};

  @media (min-width: 40em) {
    height: ${({ active }) => (active ? '62px' : '42px')};
    margin-bottom: ${({ active }) => (active ? '0px' : '20px')};
    align-items: flex-start;
    align-self: ${({ active }) => active && 'flex-end'};
  }

  ${space};
  ${layout};
`

const Icon = styled.img`
  ${space};
  ${layout};
`

const Title = styled.div`
  ${space};
  ${typography};

  color: ${({ active }) => (active ? '#222222' : '#C4C4C4')};
`

const NavItem = ({ icon, iconActive, text, route }) => {
  const [active, setActive] = useState('')

  function isActive({ isCurrent, href }) {
    if (isCurrent) {
      setActive(href)
    }
  }

  return (
    <NavLink to={route} getProps={isActive}>
      <Wrapper active={active === route} width={['80px', '160px']} mx={[1, 2]}>
        <Icon
          src={active ? iconActive : icon}
          width={['15px', '30px']}
          height={['15px', '30px']}
          m={['3px', '6px']}
        />
        <Title
          active={active}
          fontFamily="Fira Mono"
          fontSize={['13px', '18px']}
          m={['3px 0', '10px 0']}
        >
          {text}
        </Title>
      </Wrapper>
    </NavLink>
  )
}

export default NavItem
