import React from 'react';
import styled from 'styled-components';

// components
import Header from '../components/Header';
import { PostTemplate } from '../components/Template';

const PortfolioListPage = () => {
  return (
    <PostTemplate>
      <Header page="headermenu" />
      <h1>PortfolioListPage</h1>
    </PostTemplate>
  );
};

export default PortfolioListPage;
