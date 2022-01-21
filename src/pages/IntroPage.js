import React from 'react';

// components
import Header from '../components/Header';
import { MainTemplate } from '../components/Template';

const IntroPage = () => {
  return (
    <MainTemplate>
      {/* <Header /> */}
      <Header page="headermenu" />
    </MainTemplate>
  );
};

export default IntroPage;
