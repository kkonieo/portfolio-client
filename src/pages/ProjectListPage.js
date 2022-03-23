import React, { useEffect } from 'react';
import styled from 'styled-components';

// components & elements
import Header from '../components/Header';
import { PostTemplate } from '../components/Template';
import { head_2 } from '../shared/textStyle';
// import Post from '../components/Post';
import Project from '../components/Project';
import { Button } from '../elements';
import { project_list } from '../data/ProjectData';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';

const ProjectListPage = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  // const post_list = useSelector((state) => state.post.list);
  // const isLogin = useSelector((state) => state.user.isLogin);

  useEffect(() => {
    if (project_list.length === 0) {
      dispatch(postActions.getPostAX());
    }
  }, []);

  return (
    <PostTemplate>
      <Header page="headermenu" />
      <BtnWrapper>
        <Title>Project</Title>
        {/* {!isLogin ? ( */}
        <Button
          size="1.5rem"
          cursor="pointer"
          bg="transparent"
          color="var(--main)"
          _onClick={() => history.push('/editor')}
          // _onClick={() => {
          //   history.push(`/editor/${p.id}`);
          // }}
        >
          글쓰기
        </Button>
        {/* ) : null} */}
      </BtnWrapper>
      {project_list.map((p, idx) => (
        <Project key={p.id} {...p}>
          {p.description}
        </Project>
      ))}
    </PostTemplate>
  );
};

const BtnWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.device.mobile} {
    width: 100%;
    min-width: 28rem;
  }
`;

const Title = styled.h2`
  ${head_2};
  color: var(--main);
`;

export default ProjectListPage;
