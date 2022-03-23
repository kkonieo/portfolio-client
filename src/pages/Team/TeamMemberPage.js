import React, { useState } from 'react';
import styled from 'styled-components';

// components
import MembersData from '../../common/data/MembersData';
import { MainTemplate } from '../../common/components';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || '';

const TeamMemberPage = (props) => {
  let [card, setCard] = useState(MembersData);

  function MemberCards(props) {
    return (
      <MemberCard>
        <img
          alt=""
          src={process.env.PUBLIC_URL + `/Image/image${props.card.id}.png`}
          width="370px"
        />
        <p>
          {props.card.position} <br /> <b>{props.card.name}</b>
        </p>
      </MemberCard>
    );
  }

  return (
    <TeamMembers>
      <MainTemplate>
        <TeamSection>
          {/* <TeamTitle>Hi! We ard JS ON Members</TeamTitle> */}

          <CardSection>
            {card.map((membersdata, i) => {
              return <MemberCards card={membersdata} />;
            })}
          </CardSection>
        </TeamSection>
      </MainTemplate>
    </TeamMembers>
  );
};

const TeamMembers = styled.div`
  background-color: var(--main);
`;

const TeamSection = styled.div`
  text-align: center;
  width: 100%;
  height: 580px;
  display: flex;

  p {
    color: #ffffff;
    font-size: 35px;
  }
`;

const CardSection = styled.div`
  margin: auto 0;
  align-items: center;
  position: absolute;
  margin-left: 90px;
`;

const MemberCard = styled.div`
  width: 300px;
  height: 300px;
  cursor: pointer;
  margin-right: 60px;
  overflow: hidden;

  float: left;

  background-color: var(--main);
  border-radius: 50%;

  text-align: center;
  margin-bottom: 30px;

  font-size: 30px;

  color: #ffffff;
  position: relative;

  img {
    object-fit: cover;
    background-size: contain;

    position: absolute;

    top: 0px;
    left: 0px;

    width: 100%;
    height: 100%;
  }

  img:hover {
    opacity: 0.1;
    background-color: var(--darkblue);
  }
`;

export default TeamMemberPage;
