import React from 'react';
import ProjectCard from '../components/ProjectCard';

// components
import Header from '../components/Header';
import { MainTemplate } from '../components/Template';
import Post from '../components/Post';

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
