import React, { useState } from 'react';
import styled from 'styled-components';

const PlusButton = () => {
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(8);

  const loadMoreHandler = () => {};

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
