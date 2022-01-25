import React, {useState} from 'react';
import styled from 'styled-components';

import MembersData from '../Data/MembersData';

const TeamMemberPage = (props) => {

  let [card, setCard] = useState(MembersData);

  function MemberCards(props) {
    return (
      <MemberCard>
        <p>{props.card.position} <br /> <b>{props.card.name}</b></p>
      </MemberCard>
    )
  };

  return (
    <TeamSection>
      {
        card.map((membersdata, i)=> {
          return <MemberCards card={membersdata} />
        })
      }
    </TeamSection>
  )

};

const TeamSection = styled.div`
  margin-top: 80px;
  // display: flex;
  // flex-direction: row;
`;

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
  align-items: center;
`;

export default TeamMemberPage;
