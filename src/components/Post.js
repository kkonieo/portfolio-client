import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

//components & elements
import { Image } from '../elements';
import { head_1, body_1, sub_1, date } from '../shared/textStyle';
import useResizeObserver from '../components/UseResizeObserver';

// redux
// import { history } from '../redux/configureStore';

const Post = (props) => {
  const history = useHistory();
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
    <PostBox onClick={() => history.push(`/post/${props.post_id}`)}>
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
        <PostWrapper>
          <Title>{props.title}</Title>
          <Text ref={contentRef}>{props.description}</Text>
          <ButtonWrapper>
            {isShowReadMore && (
              <MoreButton onClick={onClick}>...더보기</MoreButton>
            )}
          </ButtonWrapper>
        </PostWrapper>
        <Date style={{ color: 'var(--gray)' }}>{props.createdDate}</Date>
      </TextWrapper>
    </PostBox>
  );
};

const PostBox = styled.section`
  width: 100%;
  display: flex;
  /* cursor: pointer; */
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

const TextWrapper = styled.div`
  padding: 0.3rem 1rem 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ theme }) => theme.device.mobile} {
    padding: 0.7rem 1rem 0.5rem 1rem;
  }
`;

const PostWrapper = styled.div`
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

const Title = styled.p`
  ${head_1};
  color: var(--main);
  margin: 0;
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

Post.defaultProps = {
  post_id: 1,
  title: '이것의 제목은 알파벳입니다.',
  description:
    '문자 체계의 유형으로서, 알파벳은 아부기다나 아브자드와 함께 음소 문자에 속한다. 다만 서양에서는, 이러한 3가지를 알파벳이라고 부르는 경우도 있다. 한국어에서 알파벳은, 세계에서 가장 널리 통용되고 있는 대표적인 알파벳인 라틴 문자를 가리킨다.알파벳은 자음과 모음으로 이루어진 문자를 의미하므로 한글도 알파벳의 일종이며 서양에서는 Korean alphabet이라고 한다. 알파벳에서는 원칙적으로 음성 언어의 음소 중 중 자음과 모음을 모두 서로 다른 자모(字母)로 표기한다. 반면 아브자드에서는 자음만을 표기해, 모음은 대부분 표기하지 않는다. 아부기다에서는 자음의 자모를 쓰면 특정 모음을 수반한 음절을 나타내, 그 이외의 모음이 수반한 음절을 나타내는 경우 등은 보조적인 기호를 부가하는 것으로 표기한다.알파벳의 대부분은 셈어를 위한 문자로 중동에서 탄생한 아브자드로부터 발전해 왔다고 생각되고 있다. 한편, 아부기다는 일찍이 음절문자와 알파벳의 중간 단계라고 생각하던 적도 있었지만, 오늘날은 알파벳과는 별도로 아브자드로부터 발전해 온 것이라고 생각되고 있다.',
  thumbnail:
    'https://images.unsplash.com/photo-1643533453176-29fe50049959?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
  createdDate: '2022-01-25 22:00:00',
  user: {
    name: 'Chicken',
    profile:
      'https://images.unsplash.com/photo-1643133277936-9f93d8792522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
};

export default Post;
