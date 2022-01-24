import React from 'react';
import styled from 'styled-components';

const TeamMemberPage = () => {
  return (
    <MemberCard>
      <p>Front-end <br /> <b>LEA</b></p>
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
  // line-height: 200px;
  padding: 130px 0;

  color: #ffffff;
`;

export default TeamMemberPage;
