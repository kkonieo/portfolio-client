import React, { useEffect } from 'react';
import styled from 'styled-components';

// redux
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../../common/redux/modules/user';

// components
import { Container, Text } from '../../common/components';
// import Spinner from './Spinner';

const CallBackPage = (props) => {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get('code');

  // 카카오에서 받은 인가코드 서버에 넘긴다.
  useEffect(() => {
    dispatch(userActions.kakaoLogin(code));
  }, []);

  return (
    <Container>
      <Text>로그인 중입니다. 잠시만 기다려주세요.</Text>
    </Container>
  );
};

export default CallBackPage;
