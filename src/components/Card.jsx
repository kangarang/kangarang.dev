import React from 'react';
import styled from 'styled-components';
import { layout } from 'styled-system';
import { theme } from '../theme';

const CardWrapper = styled.div`
  box-sizing: border-box;
  width: 315px;
  background-color: #333333;
  opacity: 0.9;
  padding: 15px 15px 20px;
  margin-bottom: 1.5rem;
  max-height: 100%;
  @media (min-width: ${theme.breakpoints[0]}) {
    margin: 0 12px 24px;
    /* grow, shrink, basis */
    flex: 0 1 auto;
    max-width: 750px;
  }
  color: #c4c4c4;
  ${layout};
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Superior Title';
  font-size: 18px;
  color: #ffbf42;
`;
const Description = styled.div`
  margin-top: 15px;
  font-family: 'Pragmata Pro';
  font-size: 12px;
  line-height: 1.5em;
`;
const More = styled.a`
  font-family: 'Pragmata Pro';
  font-size: 12px;
  text-decoration: none;
  color: #c4c4c4;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const Date = styled.div`
  margin-top: 5px;
  font-family: 'Pragmata Pro';
  font-style: italic;
  font-size: 12px;
`;

const Card = ({ title, desc, link, icons, date, width }) => {
  return (
    <CardWrapper width={width}>
      <Title>
        {title} {icons ? icons : <div></div>}
      </Title>
      {date && <Date>{date}</Date>}
      <Description>{desc}</Description>
      {link && (
        <More href={link} target="_blank">
          ==>
        </More>
      )}
    </CardWrapper>
  );
};

export default Card;
