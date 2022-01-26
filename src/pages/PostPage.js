import React from 'react';
import styled from 'styled-components';

// components & elements
import Header from '../components/Header';
import { PostTemplate } from '../components/Template';
import { head_2 } from '../shared/textStyle';

const PostPage = (props) => {
  return (
    <PostTemplate>
      <Header page="headermenu" />

      <TitleWrapper>
        <Title>Title</Title>
        <div></div>
      </TitleWrapper>

      <TitleWrapper>
        <Title>Keyword</Title>
        <div></div>
      </TitleWrapper>

      <TitleWrapper>
        <Title>Contents</Title>
        <div></div>
      </TitleWrapper>

      <TitleWrapper>
        <Title>Comments</Title>
        <div></div>
      </TitleWrapper>
    </PostTemplate>
  );
};

const TitleWrapper = styled.section`
  ${head_2};
`;

const Title = styled.h2`
  ${head_2};
  color: var(--main);
`;

export default PostPage;
