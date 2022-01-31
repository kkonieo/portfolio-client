import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// components & elements
import Header from '../components/Header';
import { PostTemplate } from '../components/Template';
import { head_2, sub_2 } from '../shared/textStyle';
import { Button, Grid } from '../elements';

// redux
import { useSelector, useDispatch } from 'react-redux';
// import { actionCreators as commentActions } from '../redux/modules/comment';
import { actionCreators as commentActions } from '../redux/modules/comment';
import CommentItem from '../components/CommentItem';
import CommentWrite from '../components/CommentWrite';

const PostPage = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const comment_list = useSelector((state) => state.comment_list);
  const [comments, setComments] = useState('');

  // // const [contents, setContents] = React.useState('');
  // const changeContents = (e) => {
  //   setComments(e.target.value);
  // };

  useEffect((e) => {
    dispatch(commentActions.getCommentAX());
  }, []);

  // // 댓글작성확인
  // // const onChange = (e) => {
  // //   setComments(e.target.value);
  // // };
  // const addPost = () => {
  //   console.log('------------댓글 작성------------');
  //   dispatch(commentActions.AddCommentAX(comments));
  // };

  // //댓글 작성
  // const write = (e) => {
  //   console.log('------------댓글 작성------------');
  //   dispatch(commentActions.writeTextPage(comments));
  //   // setComments(e.target.value);
  // };

  // const dict = useSelector((state) => state.word.word_list);
  // const [submit, setSubmit] = useState(false);
  // const handleChange = (e) => {
  //   // setSubmit(e.target.value);
  //   console.log(e.target.value);
  // };
  // const handleSubmit = (e) => {
  //   setSubmit(e.target.value);
  //   console.log(e.target.value);
  // };

  return (
    <PostTemplate>
      <Header page="headermenu" />

      <Grid M_width>
        <Title>Title</Title>
        <Text>
          et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad
          voluptatem doloribus vel accusantium quis pariatur molestiae porro
          eius odio et labore et ve
        </Text>
      </Grid>

      <Grid M_width>
        <Title>Keyword</Title>
        <Text>
          #et #iusto #sed #quo #iure #voluptatem #occaecati #omnis #eligendi
          #aut
        </Text>
      </Grid>

      <Grid M_width>
        <Title>Contents</Title>
        <Text>내용</Text>
      </Grid>
      <Grid M_width>
        <Title>Comments</Title>
        {/* <CommentWrapper> */}
        {/* <CommentItem key={comment_list} /> */}
        {/* <CommentList /> */}
        <CommentWrite />
        {/* </CommentWrapper> */}
      </Grid>
      <Grid M_width width="50%" is_flex_button margin="1.4rem 0 1.4rem 0">
        <Button
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
          width="7rem"
          height="2.4rem"
          margin="0 0 0 0.5rem"
          color="var(--white)"
          bg="var(--main)"
          cursor="cursor"
          _onClick={() => history.push('/postlist')}
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
  ${sub_2};
  color: var(--main);
`;

// const CommentsText = styled.p`
//   ${sub_2};
//   color: var(--main);
//   padding: 0px 20px 0px 20px;
// `;

// const Input = styled.input`
//   ${sub_2};
//   color: var(--main);
//   border: none;
//   width: 100%;
//   height: 5rem;
//   /* border: 2px solid rgba(29, 198, 209, 0.6); */
//   /* border-radius: 125px; */
//   padding: 0 0 0 20px;
//   font-size: 1.5rem;
//   color: var(--gray); // 입력했을때 글자색
//   :focus {
//     outline: none;
//   }
//   :focus::-webkit-input-placeholder {
//     color: transparent;
//   }
// `;

const CommentWrapper = styled.div`
  border: 1px solid var(--gray);
  margin-bottom: 1rem;
`;

// const CommentInputWrapper = styled.div`
//   border: 1px solid var(--gray);
// `;

// const BtnWrapper = styled.div``;

// const Comment = styled.div``;

export default PostPage;
