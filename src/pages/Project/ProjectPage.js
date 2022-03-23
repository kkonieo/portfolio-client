import React, { useEffect } from 'react';
import styled from 'styled-components';

// components & elements
import {
  Button,
  Grid,
  Image,
  Header,
  PostTemplate,
} from '../../common/components';
import { head_2, body_2 } from '../../common/styles/textStyle';
import { project } from '../../common/data/ProjectData';

// redux
import { useDispatch } from 'react-redux';
import { history } from '../../common/redux/configureStore';

const ProjectPage = () => {
  const dispatch = useDispatch();

  return (
    <PostTemplate>
      <Header page="headermenu" />

      <Grid M_width padding="0 0 2rem 0">
        <Title>Project</Title>
        <Text>{project.title}</Text>
      </Grid>

      <Grid M_width padding="0 0 2rem 0">
        <Title>스킬</Title>
        <Text>{project.skills}</Text>
      </Grid>

      <Grid M_width padding="0 0 2rem 0">
        <Title>내용</Title>
        <Text>{project.description}</Text>
      </Grid>

      <ImageWrapper>
        <Image
          M_width
          // size="25"
          shape="rectangle"
          src={project.mainimage}
          cursor="pointer"
        />
      </ImageWrapper>

      <ImageWrapper>
        <Image
          M_width
          // size="25"
          shape="rectangle"
          src={project.LiveDemogif}
          cursor="pointer"
        />
      </ImageWrapper>

      <Grid M_width padding="0 0 2rem 0">
        <Title>내가 맡은 역할</Title>
        <Text>{project.role}</Text>
      </Grid>

      <Grid M_width padding="0 0 2rem 0">
        <Title>배운 점</Title>
        <Text>{project.learned}</Text>
      </Grid>

      <Grid M_width padding="0 0 2rem 0">
        <Title>어려웠던 점 / 해결 방법</Title>
        <Text>{project.difficulty}</Text>
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
          onClick={() => history.push('/projectlist')}
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

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  /* object-fit: cover; */
  /* background-size: cover; */
  ${({ theme }) => theme.device.mobile} {
    min-width: 28rem;
  }
`;

export default ProjectPage;
