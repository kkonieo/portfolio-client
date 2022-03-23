import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return <ContainerForm>{children}</ContainerForm>;
};

const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
`;

export default Container;
