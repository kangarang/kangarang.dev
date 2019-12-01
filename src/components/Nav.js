import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import questIcon from '../assets/icon-quest.svg'
import questIconActive from '../assets/icon-quest-active.svg'
import itemIcon from '../assets/icon-item.svg'
import itemIconActive from '../assets/icon-item-active.svg'
import logIcon from '../assets/icon-log.svg'
import logIconActive from '../assets/icon-log-active.svg'
import systemIcon from '../assets/icon-system.svg'
import systemIconActive from '../assets/icon-system-active.svg'
import NavItem from './NavItem'
import { colors } from '../theme'
import { space } from 'styled-system'

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-family: 'Fira Mono';
  z-index: 5000;
  background-color: #111111;

  border-top: none;
  border-bottom: 2px solid ${colors.grey};

  @media (max-width: 40em) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    border-top: 1px solid ${colors.grey};
    border-bottom: none;
  }

  ${space};
`

const Nav = props => {
  const [active, setActive] = useState('/')

  function isActive({ isCurrent, href, location, isPartiallyCurrent }) {
    if (isCurrent) {
      setActive(href)
    }
  }

  return (
    <NavWrapper
      pt={['0', '12px']}
      pb={['28px', '0']}
    >
      <NavItem icon={questIcon} iconActive={questIconActive} text="QUEST" route="/quest" />
      <NavItem icon={itemIcon} iconActive={itemIconActive} text="ITEM" route="/item" />
      <NavItem icon={logIcon} iconActive={logIconActive} text="LOG" route="/log" />
      <NavItem icon={systemIcon} iconActive={systemIconActive} text="SYSTEM" route="/" />
    </NavWrapper>
  )
}

export default Nav
