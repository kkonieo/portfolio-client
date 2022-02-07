import React from 'react';
import styled from 'styled-components';

const CurrentUser = ({ isLoggedIN }) => {
  return (
    <CurrentUserCard
      isLoggedIN
      onClick={() => {
        if (isLoggedIN) {
          //
        } else {
          //
        }
      }}
    >
      <p>{isLoggedIN ? 'ME' : '나의 정보 등록하기'}</p>
    </CurrentUserCard>
  );
};

const CurrentUserCard = styled.div`
  width: 220px;
  height: 220px;
  cursor: pointer;
  float: left;
  overflow: hidden;

  background-color: #ffffff;
  border-radius: 50%;
  border: 4px solid var(--darkblue);

  color: var(--main);
  text-align: center;
  line-height: 140px;

  margin-right: 30px;

  &:hover {
    color: #ffffff;
    background: var(--darkblue);
  }

  p {
    font-size: ${(props) => (props.isLoggedIN ? '25px' : '40px')};
    font-weight: bold;
  }
`;
export default CurrentUser;
