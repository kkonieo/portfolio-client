import React, { useState } from 'react';
import styled from 'styled-components';

//components & elements
import { Image } from '../elements';
import { head_1, body_1, sub_1, date } from '../shared/textStyle';
import useResizeObserver from '../components/UseResizeObserver';

// redux
import { history } from '../redux/configureStore';

const Project = (props) => {
  const contentRef = React.useRef(null);
  const [isShowReadMore, setIsShowReadMore] = useState(false);
  const observeCallback = (entries) => {
    for (let entry of entries) {
      if (entry.target.scrollHeight > entry.contentRect.height) {
        setIsShowReadMore(true);
      } else {
        setIsShowReadMore(false);
      }
    }
  };
  useResizeObserver({ callback: observeCallback, element: contentRef });
  const onClick = (e) => {
    contentRef.current.classList.add('show');
    setIsShowReadMore(true);
  };
  return (
    <ProjectBox onClick={() => history.push(`/project/${props.id}`)}>
      <ImageWrapper>
        <Image
          M_width
          size="25"
          shape="rectangle"
          // radius="10px"
          src={props.thumbnail}
          cursor="pointer"
        />
      </ImageWrapper>
      <TextWrapper>
        <ProjectWrapper>
          <Title>{props.title}</Title>
          <Text ref={contentRef}>{props.description}</Text>
          <ButtonWrapper>
            {isShowReadMore && (
              <MoreButton onClick={onClick}>...더보기</MoreButton>
            )}
          </ButtonWrapper>
        </ProjectWrapper>
        <Date style={{ color: 'var(--gray)', fontFamily: 'normal' }}>
          {props.startDate}&nbsp;-&nbsp;{props.endDate}
        </Date>
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

// const Image = styled.img`
//   width: 25rem;
//   background-position: center;
//   background-size: cover;
//   border-radius: 8px;
//   ${({ theme }) => theme.device.mobile} {
//     width: 100%;
//     min-width: 28rem;
//   }
// `;

const ProjectWrapper = styled.div`
  cursor: pointer;
  /* :hover {
    color: var(--gray);
    text-decoration: underline;
  }
  :hover :first-child {
    color: var(--main);
    text-decoration: underline;
  }
  :hover :last-child {
    color: var(--gray);
  } */
`;

const TextWrapper = styled.div`
  padding: 0.3rem 1rem 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ theme }) => theme.device.mobile} {
    padding: 0.7rem 1rem 0.5rem 1rem;
  }
`;

const Title = styled.p`
  ${head_1};
  color: var(--main);
  margin: 0;
  font-family: normal;
`;

const Text = styled.p`
  ${body_1}
  color: var(--gray);
  font-family: normal;

  position: relative;
  display: -webkit-box;
  max-height: 6rem;
  line-height: 2rem;
  overflow: hidden;
  -webkit-line-clamp: 3;
  &.show {
    display: block;
    max-height: none;
    overflow: auto;
    -webkit-line-clamp: unset;
  }

  ${({ theme }) => theme.device.mobile} {
    margin-bottom: 0;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MoreButton = styled.button`
  ${sub_1}
  color: var(--gray);
  font-family: normal;

  max-height: 2rem;
  line-height: 2rem;
  border: none;

  background: transparent;
  &.hide {
    display: none;
  }
  :hover {
    cursor: pointer;
    /* text-decoration: underline; */
  }
`;
const Date = styled.p`
  ${date}
  margin: 0.5rem 0 0 0;
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
