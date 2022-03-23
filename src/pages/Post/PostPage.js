import React, { useEffect } from 'react';
import styled from 'styled-components';

// components & elements
import { head_2, body_2 } from '../../common/styles/textStyle';
import { Button, Grid, Header, PostTemplate } from '../../common/components';
import { post } from '../../common/data/PostData';
import CommentWrite from './CommentWrite';

// redux
import { useDispatch } from 'react-redux';
import { actionCreators as commentActions } from '../../common/redux/modules/comment';
import { history } from '../../common/redux/configureStore';

const PostPage = () => {
  const dispatch = useDispatch();

  useEffect((e) => {
    dispatch(commentActions.getCommentAX());
  }, []);

  return (
    <PostTemplate>
      <Header page="headermenu" />

      <Grid M_width padding="0 0 2rem 0">
        <Title>Title</Title>
        <Text>{post.title}</Text>
      </Grid>

      <Grid M_width padding="0 0 2rem 0">
        <Title>Keyword</Title>
        <Text>{post.keyword}</Text>
      </Grid>

      <Grid M_width padding="0 0 2rem 0">
        <Title>Contents</Title>
        <Text>{post.description}</Text>
      </Grid>

      <Grid M_width padding="0 0 2rem 0">
        <Title>Comments</Title>
        <CommentWrite />
      </Grid>

      <Grid M_width width="50%" is_flex_end margin="1.4rem 0 1.4rem 0">
        <Button
          hoverMain
          commonSize
          width="7rem"
          height="2.4rem"
          margin="0 0.5rem"
          color="var(--white)"
          bg="var(--main)"
          cursor="cursor"
        >
          카카오톡 공유
        </Button>
        <Button
          hoverMain
          commonSize
          width="7rem"
          height="2.4rem"
          margin="0 0.5rem"
          color="var(--white)"
          bg="var(--main)"
          cursor="cursor"
        >
          링크 복사하기
        </Button>
        <Button
          hoverMain
          commonSize
          width="7rem"
          height="2.4rem"
          margin="0 0 0 0.5rem"
          color="var(--white)"
          bg="var(--main)"
          cursor="cursor"
          onClick={() => history.push('/postlist')}
        >
          뒤로가기
        </Button>
      </Grid>
    </PostTemplate>
  );
};

const Title = styled.h2`
  ${head_2};
  color: var(--main);
  margin: 1.2rem 0 0.5rem 0;
`;

const Text = styled.p`
  ${body_2};
  color: var(--main);
  font-family: normal;
  margin: 0;
`;

export default PostPage;
