import React from 'react';
import styled from 'styled-components';

export const MainTemplate = ({ children }) => {
  return (
    <Container>
      <MainForm>{children}</MainForm>
    </Container>
  );
};

export const PostTemplate = ({ children }) => {
  return (
    <Container>
      <PostForm>{children}</PostForm>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const MainForm = styled.main`
  width: 100%;
  position: relative;
  padding: 80px 80px 0 80px;
  min-height: calc(120vh - 100px);
  max-width: 1440px;
  /* border: 2px solid red; */
`;

const PostForm = styled.main`
  width: 100%;
  position: relative;
  padding: 80px 80px 0 80px;
  min-height: calc(120vh - 100px);
  max-width: 1440px;
  /* border: 1px solid black; */
`;
