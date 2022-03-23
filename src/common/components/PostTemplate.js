import React from 'react';
import styled from 'styled-components';

import { Container } from '.';

const PostTemplate = ({ children }) => {
  return (
    <Container>
      <PostForm>{children}</PostForm>
    </Container>
  );
};

const PostForm = styled.main`
  width: 100%;
  position: relative;
  padding: 80px 80px 0 80px;
  min-height: calc(120vh - 100px);
  max-width: 1440px;
  /* border: 1px solid black; */
`;

export default PostTemplate;
