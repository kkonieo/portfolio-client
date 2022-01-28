import React from 'react';
import styled from 'styled-components';

//components & elements
import { Image } from '../elements';
import { head_1, sub_1 } from '../shared/textStyle';
// redux
import { history } from '../redux/configureStore';

const Post = (props) => {
  return (
    <PostBox onClick={() => history.push(`/post/${props.id}`)}>
      <ImageWrapper>
        <Image
          M_width
          size="25"
          shape="rectangle"
          radius="10px"
          src={props.thumbnail}
        />
      </ImageWrapper>
      <TextWrapper>
        <PostWrapper>
          <Title>{props.title}</Title>
          <Text>{props.description}</Text>
        </PostWrapper>
        <Date style={{ color: 'var(--gray)' }}>{props.insert_dt}</Date>
      </TextWrapper>
    </PostBox>
  );
};

const PostBox = styled.section`
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

const TextWrapper = styled.div`
  padding: 0.3rem 0 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PostWrapper = styled.div`
  :hover {
    color: var(--main);
    text-decoration: underline;
  }
`;

const Title = styled.p`
  margin: 0;
  color: var(--main);
  ${head_1};

  ${({ theme }) => theme.device.mobile} {
    padding-bottom: 0.9rem;
  }
`;

const Text = styled.p`
  /* margin: 0; */
  color: var(--main);
  ${sub_1}
  /* :hover {
    text-decoration: underline;
  } */
  ${({ theme }) => theme.device.mobile} {
    padding-bottom: 0.9rem;
  }
`;

const Date = styled.p`
  margin: 0;
`;

Post.defaultProps = {
  // user_info: {
  //   name: 'nickname',
  //   profile:
  //     'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80',
  // },
  thumbnail:
    'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80',
  description:
    'The cat (Felis catus) is a domestic species of a small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.[4] A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.[5] Domestic cats are valued by humans for companionship and their ability to kill rodents.',
  insert_dt: '2022-01-25 22:00:00',
};

export default Post;
