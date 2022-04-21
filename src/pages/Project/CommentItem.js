import React from 'react';
import styled from 'styled-components';

//components & elements
import { Grid, Image } from '../../common/components';
import { sub_2 } from '../../common/styles/textStyle';

export const CommentItem = (props) => {
  const { content, profile_image } = props;

  return (
    <Grid is_flex_start>
      <Image src={profile_image} size="4" />
      <CommentsText>{content}</CommentsText>
    </Grid>
  );
};

const CommentsText = styled.p`
  ${sub_2};
  font-family: normal;
  color: var(--main);
  padding: 0px 20px 0px 20px;
`;

CommentItem.defaultProps = {
  comment_id: 1,
  name: '김프로그',
  profile_image:
    'https://mblogthumb-phinf.pstatic.net/MjAxOTA0MTFfMyAg/MDAxNTU0OTY0NDExODM3.yq8kEVXlmOBw6q-5jyZceq2rxtUAfmCn00KjOfjf6CEg.K3qeB83x7EnikNTcr7XyDiB9Li9VOHcXV6t_6JUo7iog.PNG.goproblem/2gsjgna1uruvUuS7ndh9YqVwYGPLVszbFLwwpAYXZ1rkyz7vKAbhJvHdPRzCvhGfPWQdhkcqKLhnajnHFpGdgkDq3R1XmTFaFxUfKbVyyA3iDi1Fzv.png?type=w2',
  content:
    'sample laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
};

export default CommentItem;
