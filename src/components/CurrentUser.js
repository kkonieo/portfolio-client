import React from 'react';
import styled from 'styled-components';

const CurrentUser = () => {
  return (
    <CurrentUserCard>
      <p>ME</p>
    </CurrentUserCard>
  )
};

const CurrentUserCard = styled.div`

  width: 220px;
  height: 220px;
  cursor: pointer;
  float: left;
  overflow: hidden;

  background-color: #ffffff;
  border-radius: 50%;

  color: var(--main);
  text-align: center;
  line-height: 140px;

  margin-right: 30px;

  &:hover {
    color: #ffffff;
    background: #39bbd3;
  }

  p {
    font-size: 40px;
    font-weight: bold;
  }

`;
export default CurrentUser;
