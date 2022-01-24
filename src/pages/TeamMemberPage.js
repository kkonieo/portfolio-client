import React from 'react';
import styled from 'styled-components';

const TeamMemberPage = () => {
  return (
    <MemberCard>
      <p>Front-end, LEA</p>
    </MemberCard>
  );
};

const MemberCard = styled.div`
  width: 350px;
  height: 350px;

  background-color: var(--main);
  border-radius: 50%;

  text-align: center;
  font-size: 30px;
  line-height: 200px;

  color: #ffffff;
`;

export default TeamMemberPage;
