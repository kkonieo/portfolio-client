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

      <UserListTitle>JS ON과 함께하는 사람들</UserListTitle>

      <UserListSection>

        <CurrentUser />

        {
          card.map((membersdata, i)=> {
            return <UserCards card={membersdata} />
          })
        }

        <PlusButton />

      </UserListSection>

  </UserWrapper>

  )};

const UserWrapper = styled.div`

  margin: auto;
  width: 100%;
  height: 100vh;
  text-align: center;

  background-color: var(--main);
  position: relative;

`;

const UserListTitle = styled.div`

  position: absolute;
  color: #ffffff;
  font-size: 35px;

  margin-top: 80px;
  left: 6%;

`;

const UserListSection = styled.div`

  justify-content: center;
  position: absolute;

  margin-top: 250px;
  left: 6%;
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

  color: #ffffff;
  align-items: center;
  position: relative;

  p {
    font-size: 25px;
    margin-top: 75px;
  }

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
