import React from 'react';
import styled from 'styled-components';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || '';

const ProjectCard = (props) => {
  const projectNums = [
    { name: 'project', id: '0' },
    { name: 'project', id: '1' },
    { name: 'project', id: '2' },
  ];

  function ProjectCards(props) {
    return (
      <ProjectCardList>
        <img
          alt=""
          src={process.env.PUBLIC_URL + `/Image/image13.png`}
          width="410px"
          height="200px"
        />
        <ProjectSection>
          <ProjectTitle>
            <span>이번 프로젝트 제목은?</span>
          </ProjectTitle>

          <ProjectContent>
            <span>
              이번에 도전하는 프로젝트는 이런 내용이에요. 저는 지금 프로젝트
              카드를 생성하고 있습니다. 허허허허. 얼른 자고 싶은데 언제
              완성할까요?
            </span>

            <p>2022/01/29 (작성일자 들어가는 공간)</p>
          </ProjectContent>
        </ProjectSection>
      </ProjectCardList>
    );
  }

  return (
    <>
      <ContentTitle>Project</ContentTitle>
      <ProjectCardWrapper>
        {projectNums.map((card, i) => {
          return <ProjectCards propjectNums={card} />;
        })}
      </ProjectCardWrapper>
    </>
  );
};

const ContentTitle = styled.div`
  width: 100%;
  height: 45px;
  color: var(--main);

  font-size: 20px;
  span {
  }
`;

const ProjectCardWrapper = styled.div`
  margin: auto;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProjectCardList = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  // margin-right: 25px;

  width: 410px;
  height: 350px;
  // background-color: var(--main);
`;

const ProjectSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 410px;
  height: 150px;
  // background-color: var(--darkblue);

  color: #686868;
`;

const ProjectTitle = styled.div`
  width: 400px;
  height: 35px;
  margin-top: 30px;

  span {
    font-size: 18px;
    font-weight: bold;
    color: var(--main);
    font-family: nomal;
  }
`;

const ProjectContent = styled.div`
  width: 410px;
  height: 100px;
  font-size: 14px;

  span {
    // color: #a2a2a2;
    font-weight: 300;
    line-height: 20px;
    font-family: nomal;
  }

  p {
    color: #a2a2a2;
    font-weight: 300;
    font-family: nomal;
  }
`;

export default ProjectCard;
