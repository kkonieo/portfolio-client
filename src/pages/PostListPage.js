import React, { useEffect } from 'react';
import styled from 'styled-components';

// components & elements
import Header from '../components/Header';
import { PostTemplate } from '../components/Template';
import { head_2 } from '../shared/textStyle';
import Post from '../components/Post';

const PostListPage = (props) => {
  return (
    <PostTemplate>
      <Header page="headermenu" />
      <Title>Project</Title>
      <Post />
    </PostTemplate>
  );
};

const Title = styled.h2`
  ${head_2};
  color: var(--main);
`;

export default PostListPage;
