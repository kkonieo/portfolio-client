import React, {useState} from 'react';
import styled from 'styled-components';

import MembersData from '../data/MembersData';


const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";


const TeamMemberPage = (props) => {

  let [card, setCard] = useState(MembersData);

  function MemberCards(props) {
    return (
      <MemberCard>
        <img alt="" src={process.env.PUBLIC_URL + `/Image/image${props.card.id}.png`} width="370px" />
        <p>{props.card.position} <br /> <b>{props.card.name}</b></p>
      </MemberCard>
    )
  };

  return (
    <TeamSection>

      <p>안녕하세요. JS ON 입니다.</p>

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
  width: 100%;
  height: 100vh;
  text-align: center;

  // background-color: var(--main);

`;

const MemberCard = styled.div`

  justify-content: center;
  width: 280px;
  height: 280px;
  cursor: pointer;
  overflow: hidden;

  float: left;

  background-color: var(--main);
  border-radius: 50%;
  dispaly: flex;
  margin-left: 60px;
  margin-bottom: 30px;

  // text-align: center;
  font-size: 30px;
  // line-height: 200px;
  // padding: 130px 0;

  color: #ffffff;
  align-items: center;
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


`;

export default TeamMemberPage;
