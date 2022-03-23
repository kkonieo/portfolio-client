import React, { useState } from 'react';
import styled from 'styled-components';

// type PositionType = 'front-end' | 'back-end';
// interface CardType {
//   id: number;
//   position: PositionType;
//   name: string;
// }
// interface IProps {
//   card: CardType;
// }

export const UserCards = ({ card, searchTerm }) => {
  // let [card, setCard] = useState(UserData); //처음 뜨는 카드

  function UserCardsList(props) {
    return (
      <UserCard>
        <img
          alt=""
          src={process.env.PUBLIC_URL + `/Image/image${props.card.id}.png`}
          width="500px"
        />
        <p>
          {props.card.position} <br /> <b>{props.card.name}</b>
        </p>
      </UserCard>
    );
  }

  const filteredCard = card.filter((membersdata) => {
    if (
      membersdata.name.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1 ||
      searchTerm === ''
    ) {
      return true;
    }
    return false;
  });

  return (
    <>
      {filteredCard.map((membersdata, i) => {
        return <UserCardsList card={membersdata} />;
      })}
    </>
  );
};

// const UserCards = styled.div``;

const UserCard = styled.div`
  width: 220px;
  height: 220px;
  cursor: pointer;
  overflow: hidden;

  float: left;

  background-color: var(--darkblue);
  border-radius: 50%;
  margin-right: 40px;
  margin-bottom: 50px;

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

  img:hover {
    opacity: 0.1;
    background-color: var(--darkblue);
  }
`;

export default UserCards;
