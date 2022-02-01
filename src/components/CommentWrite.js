import React, { useState } from 'react';
import styled from 'styled-components';

//components & elements
import { Button, Grid, Image } from '../elements';
import { body_2 } from '../shared/textStyle';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as commentActions } from '../redux/modules/comment';
import CommentItem from './CommentItem';

const CommentWrite = (props) => {
  const dispatch = useDispatch();
  const [comments, setComments] = useState('');
  const comment_list = useSelector((state) => state.comment.list);
  // 1
  console.log(comment_list);
  const changeContents = (e) => {
    setComments(e.target.value);
  };

  const write = (e) => {
    e.preventDefault();
    console.log('------------댓글 작성------------');
    dispatch(commentActions.addCommentAX(comments));
    setComments('');
    dispatch(commentActions.getCommentAX());
  };

  return (
    <>
      <CommentWrapper>
        {comment_list.map((c) => (
          <Grid is_flex_comment M_width>
            <CommentItem key={c.comment_id} {...c} />
          </Grid>
        ))}
      </CommentWrapper>
      <CommentInputWrapper>
        <Grid is_flex_comment M_width>
          <Image size="4" />
          <Input
            placeholder="와 ~ 댓 글 을 작 성 하 자"
            value={comments}
            onChange={changeContents}
            multiLine
          />
          <BtnWrapper>
            <Button
              commonSize
              width="4rem"
              border="1px solid var(--gray)"
              bg="transparent"
              margin="1rem"
              padding="5px 10px 5px 10px"
              radius="3px"
              cursor="cursor"
              _onClick={write}
            >
              등록
            </Button>
          </BtnWrapper>
        </Grid>
      </CommentInputWrapper>
    </>
  );
};

const CommentWrapper = styled.div`
  border: 2px solid var(--lightgray);
  border-radius: 3px;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  ${body_2};
  color: var(--main);
  /* font-family: normal; */
  border: none;
  width: 100%;
  height: 5rem;
  padding: 0 0 0 20px;
  font-size: 1.5rem;
  color: var(--gray); // 입력했을때 글자색
  :focus {
    outline: none;
  }
  :focus::-webkit-input-placeholder {
    color: transparent;
  }
`;

const CommentInputWrapper = styled.div`
  border: 2px solid var(--lightgray);
  border-radius: 3px;
`;

const BtnWrapper = styled.div``;

export default CommentWrite;
