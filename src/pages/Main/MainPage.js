import React from 'react';

// components
import { Header, MainTemplate, Post } from '../../common/components';
import ProjectCard from './ProjectCard';

const MainPage = () => {
  return (
    <MainTemplate>
      {/* <Header /> */}
      {/* start */}
      <Header page="headermenu" />
      <ProjectCard />
      <Post />
      <Post />
      <Post />
    </MainTemplate>
  );
};

export default MainPage;
