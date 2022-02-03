import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

//state 헷갈려서 지금 잠시 멈춤

const PlusButton = () => {
  const loadMoreHandler = () => {
    axios.get('api/user').then((res) => {
      console.log();
    });
  };

  return (
    <UserPlusButton onClick={loadMoreHandler}>
      <p>+</p>
    </UserPlusButton>
  );
};

const UserPlusButton = styled.div`
  width: 220px;
  height: 220px;
  cursor: pointer;
  overflow: hidden;

  background-color: #ffffff;
  border-radius: 50%;
  border: 4px solid var(--darkblue);

  color: var(--main);
  text-align: center;
  line-height: 140px;

  &:hover {
    color: #ffffff;
    background: var(--darkblue);
  }

  p {
    font-size: 40px;
    font-weight: bold;
  }
`;

export default PlusButton;
