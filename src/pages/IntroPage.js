import React from 'react';
import styled from 'styled-components';

// components
import Header from '../components/Header';
import { MainTemplate } from '../components/Template';
import UserListPage from './UserListPage';
import useMotion from '../utils/useMotion';

const IntroPage = () => {
  return (
    <>
      <MainTemplate>
        {/* <Header /> */}
        <Header page="headermenu" />
        <IntroSection>
          <TitleSection>
            <p dark {...useMotion('down', 1, 0.2)}>
              당신의 포트폴리오를
              <br /> 가장 쉽고 직관적이게 <br /> 관리하세요.
            </p>
          </TitleSection>
        </IntroSection>
      </MainTemplate>
      <UserListPage />
    </>
  );
};

const IntroSection = styled.div`
  position: relative;
  width: 100%;
  height: 580px;

  margin-top: 3%;
  background-color: var(--main);

  display: flex;
`;

const TitleSection = styled.div`
  position: absolute;

  width: 49%;
  height: 100%;

  background-color: #ffffff;

  font-size: 50px;
  color: var(--main);

  p {
    margin-top: 30%;
  }
`;

export default IntroPage;
