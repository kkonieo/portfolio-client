import React from 'react';
import styled from 'styled-components';

// components & elements
import Header from '../components/Header';
import { PostTemplate } from '../components/Template';
import { head_2 } from '../shared/textStyle';

const PostListPage = (props) => {
  return (
    <PostTemplate>
      <Header page="headermenu" />
      <Title>Project</Title>
      <PostWrapper>
        <ImageBox>
          <PostImage src={props.image_url} alt="" />
        </ImageBox>
        <TextWrapper>
          <Text size="1.2" margin="0">
            {props.contents}
          </Text>
          <Text margin="0" size="1.2" bold color="gray">
            {props.insert_dt}
          </Text>
        </TextWrapper>
      </PostWrapper>
    </PostTemplate>
  );
};

const Title = styled.h2`
  ${head_2};
  color: var(--main);
`;

const PostWrapper = styled.section`
  width: 100%;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  border: 1px solid pink;
  margin: 0 auto;
`;

const ImageBox = styled.div`
  padding: 1rem;
`;

const PostImage = styled.img`
  width: 100%;
  min-width: 21rem;
  background-position: center;
  background-size: cover;
  border-radius: 8px;
`;

const TextWrapper = styled.div`
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Text = styled.p`
  margin: 0;
`;

PostListPage.defaultProps = {
  image_url:
    'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80',
  contents:
    'The cat (Felis catus) is a domestic species of a small carnivorous mammal.[1][2] It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.[4] A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.[5] Domestic cats are valued by humans for companionship and their ability to kill rodents.',
  insert_dt: '2022-01-25 22:00:00',
};

export default PostListPage;
