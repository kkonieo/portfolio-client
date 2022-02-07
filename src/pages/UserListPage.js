import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import UserData from '../data/UserData';
import CurrentUser from '../components/CurrentUser';
import PlusButton from '../components/PlusButton';
import SearchBox from '../components/SearchBox';
import axios from 'axios';
// import { router } from 'json-server';
import UserCards from '../components/UserCards';
import UserData from '../data/UserData';

import { result } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || '';

const UserListPage = (props) => {
  const [card, setCard] = useState(UserData); //처음 뜨는 카드
  const [additionalCard, setAdditionalCard] = useState();

  const [skip, setSkip] = useState(0);
  const [seachList, setSecachList] = useState(); //검색시 나타나는 카드

  const [searchTerm, setSearchTerm] = useState('');
  // const isLoggedIN = useSelector();
  const isLoggedIN = true;

  // useEffect(() => {
  //   axios
  //     .get('api/userlist')
  //     .then((res) => {
  //       setCard(res.data.users);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const concatCard = () => {
    const temp = card.concat(UserData);
    setCard(temp);
    // axios.get('api/userlist/${number}').then((res) => {
    //   const temp = card.concat(res.data.users);
    //   setCard(temp);
    // })
  };

  const updateSearchTerm = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  // const userLoading = () => {
  //   axios
  //     .get('api/uselist')
  //     .then((res) => {
  //       console.log(res.data.users); //성공할 경우
  //       setCard([...card, ...result.data]);
  //     })
  //     .catch(() => {
  //       console.log('하..실패해쑴..');
  //     }); //실패할 경우
  // }; //Backend랑 연결

  function UserLoading(props) {
    useEffect(() => {});
  }

  return (
    <UserWrapper>
      <FlexRowBox>
        <UserListTitle>JS ON과 함께하는 사람들</UserListTitle>
        <SearchBox searchTerm={searchTerm} updateSearch={setSearchTerm} />
      </FlexRowBox>

      <UserListSection>
        <CurrentUser isLoggedIN />

        {/* {card.map((membersdata, i) => {
          return <UserCards card={membersdata} />;
        })} */}
        <UserCards card={card} searchTerm={searchTerm} />

        <PlusButton onClick={concatCard} />
      </UserListSection>
    </UserWrapper>
  );
};

// const UserCard = styled.div`
//   width: 220px;
//   height: 220px;
//   cursor: pointer;
//   overflow: hidden;

//   float: left;

//   background-color: var(--darkblue);
//   border-radius: 50%;
//   margin-right: 40px;
//   margin-bottom: 50px;

//   // text-align: center;

//   color: #ffffff;
//   align-items: center;
//   position: relative;

//   p {
//     font-size: 25px;
//     margin-top: 75px;
//   }

//   img {
//     object-fit: cover;
//     background-size: contain;

//     position: absolute;

//     top: 0px;
//     left: 0px;

//     width: 100%;
//     height: 100%;
//   }

//   img:hover {
//     opacity: 0.1;
//     background-color: var(--darkblue);
//   }
// `;

const FlexRowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 80px;
  margin-right: 80px;
`;

const UserWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: center;
  background-color: var(--main);
`;

const UserListTitle = styled.div`
  color: #ffffff;
  font-size: 35px;

  margin-top: 80px;
`;

const UserListSection = styled.div`
  margin-top: 130px;
  margin-left: 85px;
  left: 6%;
`;

export default UserListPage;
