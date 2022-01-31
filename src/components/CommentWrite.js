import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

//components & elements
import { Button, Grid, Image } from '../elements';
import { head_2, sub_2 } from '../shared/textStyle';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as commentActions } from '../redux/modules/comment';

const CommentWrite = () => {
  const [comments, setComments] = useState('');
  const changeContents = (e) => {
    setComments(e.target.value);
  };

  return (
    <CommentInputWrapper>
      <Grid is_flex_comment M_width>
        <Image size="4" />
        <Input
          placeholder="와 ~ 댓 글 을 작 성 하 자"
          value={comments}
          onChange={changeContents}
          multiLine
          // onChange={onChange}
          // value={comments}
          // type="text"
          // value={comments}
          // onChange={(e) => setComments(e.target.value)}
        />
        <BtnWrapper>
          <Button
            width="4rem"
            border="1px solid var(--gray)"
            bg="transparent"
            margin="1rem"
            padding="5px 10px 5px 10px"
            radius="3px"
            cursor="cursor"
            // _onClick={write}
            // _onClick={addComment}
          >
            등록
          </Button>
          {/* <Button
        cursor="cursor"
        // _onClick={addPost}
      >
        등록
      </Button> */}
        </BtnWrapper>
      </Grid>
    </CommentInputWrapper>
  );
};

const Input = styled.input`
  ${sub_2};
  color: var(--main);
  border: none;
  width: 100%;
  height: 5rem;
  /* border: 2px solid rgba(29, 198, 209, 0.6); */
  /* border-radius: 125px; */
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
  border: 1px solid var(--gray);
`;

const BtnWrapper = styled.div``;

// const Comment = styled.div``;
export default CommentWrite;
