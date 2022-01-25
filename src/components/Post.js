import React from 'react';
import styled from 'styled-components';

const Post = (props) => {
  return (
    <PostBox>
      <ImageWrapper>
        <Image src={props.image_url} alt="" />
      </ImageWrapper>
      <TextWrapper>
        <Text>{props.description}</Text>
        <Text style={{ color: 'var(--gray)' }}>{props.insert_dt}</Text>
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
  padding: 1rem 1rem 1rem 0;
  ${({ theme }) => theme.device.mobile} {
    min-width: 28rem;
    padding: 0;
  }
`;

const Image = styled.img`
  width: 25rem;
  /* min-width: 21rem; */
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  ${({ theme }) => theme.device.mobile} {
    width: 100%;
    min-width: 28rem;
    padding: 0;
  }
`;

const TextWrapper = styled.div`
  margin: 0 auto;
  padding: 1rem 0 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Text = styled.p`
  margin: 0;
`;

Post.defaultProps = {
  // user_info: {
  //   user_name: 'nickname',
  //   user_profile:
  //     'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80',
  // },
  image_url:
    'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80',
  description:
    'The cat (Felis catus) is a domestic species of a small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.[4] A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.[5] Domestic cats are valued by humans for companionship and their ability to kill rodents.',
  insert_dt: '2022-01-25 22:00:00',
  // title: "제목",
  // description: "글 요약",
  // thumbnail:" 썸네일 사진 경로",
  // created_at:"포스팅 날짜",
  // updated_at:"수정 날짜",
  // user:{
  //       name:"작성자이름"
  // }
};

export default Post;
