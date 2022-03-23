import React from 'react';
import styled from 'styled-components';

import { Container } from '.';

const MainTemplate = ({ children }) => {
  return (
    <Container>
      <MainForm>{children}</MainForm>
    </Container>
  );
};

const MainForm = styled.main`
  width: 100%;
  position: relative;
  padding: 80px 80px 0 80px;
  min-height: calc(120vh - 100px);
  max-width: 1440px;
  /* border: 2px solid red; */
`;

export default MainTemplate;
