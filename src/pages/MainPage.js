import React from 'react';
import ProjectCard from '../components/ProjectCard';

// components
import Header from '../components/Header';
import { MainTemplate } from '../components/Template';

const MainPage = () => {
  return (
    <MainTemplate>
      {/* <Header /> */}
      {/* start */}
      <Header page="headermenu" />
      <ProjectCard />
    </MainTemplate>
  );
};

export default MainPage;
