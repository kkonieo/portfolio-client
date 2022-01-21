import React from 'react';

// components
import Header from '../components/Header';
import { MainTemplate } from '../components/Template';

const MainPage = () => {
  return (
    <MainTemplate>
      {/* <Header /> */}
      <Header page="headermenu" />
    </MainTemplate>
  );
};

export default MainPage;
