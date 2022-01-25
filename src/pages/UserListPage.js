import React, { useState } from 'react';
import styled from 'styled-components';
import UserData from '../data/UserData';
import CurrentUser from '../components/CurrentUser';
import PlusButton from '../components/PlusButton';



const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";


const UserListPage = (props) => {

  let [card, setCard] = useState(UserData);

  function UserCards(props) {
    return (
      <UserCard>
        <img alt="" src={process.env.PUBLIC_URL + `/Image/image${props.card.id}.png`} width="500px" />
        <p>{props.card.position} <br /> <b>{props.card.name}</b></p>
      </UserCard>
    )
  }


  return (
    <UserWrapper>

      <p>안녕하세요. JS ON 입니다.</p>

      <CurrentUser />

      {
        card.map((membersdata, i)=> {
          return <UserCards card={membersdata} />
        })
      }

      <PlusButton />

  </UserWrapper>

  )};

const UserWrapper = styled.div`
margin-top: 80px;
width: 100%;
height: 100vh;
text-align: center;

background-color: var(--main);

`;

const UserCard = styled.div`

  // justify-content: center;
  width: 220px;
  height: 220px;
  cursor: pointer;
  overflow: hidden;

  float: left;

  background-color: #39bbd3;
  border-radius: 50%;
  // dispaly: flex;
  margin-right: 40px;
  margin-bottom: 30px;

  // text-align: center;
  font-size: 30px;


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

export default UserListPage;
