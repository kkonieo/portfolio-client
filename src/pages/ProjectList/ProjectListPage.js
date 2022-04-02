import React, { useEffect } from 'react';
import styled from 'styled-components';

// components & elements
import { Button, Header, PostTemplate, Project } from '../../common/components';
import { head_2 } from '../../common/styles/textStyle';
// import { project_list } from '../../common/data/ProjectData';

// redux
import { history } from '../../common/redux/configureStore';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as projectActions } from '../../common/redux/modules/project';

const ProjectListPage = () => {
  const dispatch = useDispatch();
  const project_list = useSelector((state) => state.project.project_list);
  // const isLogin = useSelector((state) => state.user.isLogin);

  useEffect(() => {
    if (project_list.length === 0) {
      dispatch(projectActions.getProjectListAX());
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
          onClick={() => history.push('/editor')}
          // onClick={() => {
          //   history.push(`/editor/${p.id}`);
          // }}
        >
          글쓰기
        </Button>
        {/* ) : null} */}
      </BtnWrapper>
      {project_list.map((p, idx) => (
        <Project key={p.project_id} {...p}>
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
