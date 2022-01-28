import React, { useState } from 'react';
import styled from 'styled-components';

// components & elements
import Header from '../components/Header';
import { PostTemplate } from '../components/Template';
import { head_2, sub_2 } from '../shared/textStyle';
import { Button, Grid, Image } from '../elements';

const PostPage = (props) => {
  const [submit, setSubmit] = useState(false);
  const onClick = () => {
    setSubmit();
  };

  return (
    <PostTemplate>
      <Header page="headermenu" />

      <Grid M_width>
        <Title>Title</Title>
        <Text>
          et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad
          voluptatem doloribus vel accusantium quis pariatur molestiae porro
          eius odio et labore et ve
        </Text>
      </Grid>

      <Grid M_width>
        <Title>Keyword</Title>
        <Text>
          #et #iusto #sed #quo #iure #voluptatem #occaecati #omnis #eligendi
          #aut
        </Text>
      </Grid>

      <Grid M_width>
        <Title>Contents</Title>
        <Text>
          et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad
          voluptatem doloribus vel accusantium quis pariatur molestiae porro
          eius odio et labore et veet iusto sed quo iure voluptatem occaecati
          omnis eligendi aut ad voluptatem doloribus vel accusantium quis
          pariatur molestiae porro eius odio et labore et veet iusto sed quo
          iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus
          vel accusantium quis pariatur molestiae porro eius odio et labore et
          veet iusto sed quo iure voluptatem occaecati omnis eligendi aut ad
          voluptatem doloribus vel accusantium quis pariatur molestiae porro
          eius odio et labore et veet iusto sed quo iure voluptatem occaecati
          omnis eligendi aut ad voluptatem doloribus vel accusantium quis
          pariatur molestiae porro eius odio et labore et veet iusto sed quo
          iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus
          vel accusantium quis pariatur molestiae porro eius odio et labore et
          veet iusto sed quo iure voluptatem occaecati omnis eligendi aut ad
          voluptatem doloribus vel accusantium quis pariatur molestiae porro
          eius odio et labore et ve
        </Text>
      </Grid>

      <Grid M_width>
        <Title>Comments</Title>
        <CommentWrapper>
          <Grid is_flex_comment M_width>
            <Image size="4" />
            <Text>
              et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad
              voluptatem doloribus vel accusantium quis pariatur molestiae porro
              eius odio et labore et ve
            </Text>
          </Grid>
          <Grid is_flex_comment M_width>
            <Image size="4" />
            <Text>
              et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad
              voluptatem doloribus vel accusantium quis pariatur molestiae porro
              eius odio et labore et ve
            </Text>
          </Grid>
        </CommentWrapper>

        <CommentInputWrapper>
          <Grid is_flex_comment M_width>
            <Image size="4" />
            {/* <Text>
              et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad
              voluptatem doloribus vel accusantium quis pariatur molestiae porro
              eius odio et labore et ve
            </Text> */}
            <Input />
            <BtnWrapper>
              <Button
                width="3rem"
                border="1px solid var(--gray)"
                bg="transparent"
                margin="1rem"
                padding="5px 10px 5px 10px"
                radius="3px"
                cursor
                _onClick={onClick}
              >
                등록
              </Button>
            </BtnWrapper>
          </Grid>
        </CommentInputWrapper>
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
  ${sub_2};
  color: var(--main);
`;

const Input = styled.input`
  ${sub_2};
  color: var(--main);
  border: none;
`;

const CommentWrapper = styled.div`
  border: 1px solid var(--gray);
  margin-bottom: 1rem;
`;

const CommentInputWrapper = styled.div`
  border: 1px solid var(--gray);
`;

const BtnWrapper = styled.div``;

export default PostPage;
