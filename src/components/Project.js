import React from 'react';
import styled from 'styled-components';

// redux
import { history } from '../redux/configureStore';

const Project = (props) => {
  return (
    <ProjectBox onClick={() => history.push(`/post/1`)}>
      <ImageWrapper>
        <Image src={props.thumbnail} alt="" />
      </ImageWrapper>
      <TextWrapper>
        <Text>{props.description}</Text>
        <Date style={{ color: 'var(--gray)' }}>{props.insert_dt}</Date>
      </TextWrapper>
    </ProjectBox>
  );
};

const ProjectBox = styled.section`
  width: 100%;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  border: 1px solid pink;
  margin: 0 auto;
  margin-bottom: 2rem;
  ${({ theme }) => theme.device.mobile} {
    min-width: 28rem;
    flex-wrap: wrap;
  }
`;

const ImageWrapper = styled.div`
  ${({ theme }) => theme.device.mobile} {
    min-width: 28rem;
  }
`;

const Image = styled.img`
  width: 25rem;
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  ${({ theme }) => theme.device.mobile} {
    width: 100%;
    min-width: 28rem;
  }
`;

const TextWrapper = styled.div`
  padding: 0.3rem 0 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Text = styled.p`
  margin: 0;
  color: var(--main);
  :hover {
    text-decoration: underline;
  }
  ${({ theme }) => theme.device.mobile} {
    padding-bottom: 0.9rem;
  }
`;

const Date = styled.p`
  margin: 0;
`;

Project.defaultProps = {
  // user_info: {
  //   name: 'nickname',
  //   profile:
  //     'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80',
  // },
  thumbnail:
    'https://media.istockphoto.com/photos/friends-red-cat-and-corgi-dog-walking-in-a-summer-meadow-under-the-picture-id1324099927?b=1&k=20&m=1324099927&s=170667a&w=0&h=_jRsZpMNYr--izDfsMtCB7MV97R-yMphyDTjcav85xc=',
  description:
    'The dog or domestic dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of the wolf which is characterized by an upturning tail. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog s nearest living relative. The dog was the first species to be domesticated, by hunter–gatherers over 15,000 years ago, before the development of agriculture.',
  insert_dt: '2022-01-25 22:00:00',
};

export default Project;
