import React from 'react';

// components
import Header from '../components/Header';
import { MainTemplate } from '../components/Template';
import UserListPage from './UserListPage';

const IntroPage = () => {
  return (
    <>
      <MainTemplate>
        {/* <Header /> */}
        <Header page="headermenu" />
      </MainTemplate>
      <UserListPage />
    </>
  );
};

export default IntroPage;
