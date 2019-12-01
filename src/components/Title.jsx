import React from 'react'
import styled from 'styled-components'
import Box from './Box'

const MainText = styled.div`
  color: #ffbf42;
  font-family: 'Superior Title';
  font-size: ${({ mainText }) => (mainText === 'ISAAC KANG' ? '64px' : '48px')};
  margin-bottom: ${({ mainText }) => (mainText === 'ISAAC KANG' ? '0' : '30px')};
`

const SubText = styled.div`
  font-family: 'Pragmata Pro';
  font-size: 14px;
  color: #ffbf42;
`

const Title = ({ mainText, subText }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={['flex-start']}
      width={'100%'}
      p={['1rem']}
    >
      <MainText mainText={mainText}>{mainText}</MainText>
      {subText && <SubText>{subText}</SubText>}
    </Box>
  )
}

export default Title
