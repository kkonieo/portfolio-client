import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';

// components & elements
import Header from '../components/Header';
import { PostTemplate } from '../components/Template';
import { head_2 } from '../shared/textStyle';
import Post from '../components/Post';

const PostListPage = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostAX());
    }
  }, []);

  return (
    <PostTemplate>
      <Header page="headermenu" />
      <Title>Project</Title>
      {/* <Post /> */}
      {post_list.map((p, idx) => (
        <Post key={p.post_id} {...p}>
          {p.description}
        </Post>
      ))}
    </PostTemplate>
  );
};

const Title = styled.h2`
  ${head_2};
  color: var(--main);
`;

export default PostListPage;
