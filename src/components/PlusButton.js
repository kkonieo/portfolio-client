import React from 'react';
import styled from 'styled-components';

const PlusButton = () => {
  return (
  <UserPlusButton>
    <p>+</p>
  </UserPlusButton>);
};

const UserPlusButton = styled.div`

  width: 220px;
  height: 220px;
  cursor: pointer;
  overflow: hidden;

  background-color: #ffffff;
  border-radius: 50%;

  color: var(--main);
  text-align: center;
  line-height: 140px;

  &:hover {
    color: #ffffff;
    background: #39bbd3;
  }

  p {
    font-size: 40px;
    font-weight: bold;
  }

`;

export default PlusButton;
