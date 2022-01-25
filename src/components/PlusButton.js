import React from 'react';
import styled from 'styled-components';

const PlusButton = () => {
  return (
  <UserPlusButton>
    <p>ME</p>
  </UserPlusButton>);
};

const UserPlusButton = styled.div`

  width: 200px;
  height: 200px;
  cursor: pointer;
  overflow: hidden;

  background-color: #ffffff;
  border-radius: 50%;

  color: var(--main);
  text-align: center;
  line-height: 120px;

  &:hover {
    color: #ffffff;
    background: #39bbd3;
  }

  p {
    font-size: 40px;
  }

`;

export default PlusButton;
