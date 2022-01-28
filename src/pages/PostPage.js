import React from 'react';
import styled from 'styled-components';

// components & elements
import Header from '../components/Header';
import { PostTemplate } from '../components/Template';
import { head_2, sub_1 } from '../shared/textStyle';
import { Grid, Image } from '../elements';

const PostPage = (props) => {
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
            <Text>
              et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad
              voluptatem doloribus vel accusantium quis pariatur molestiae porro
              eius odio et labore et ve
            </Text>
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
  ${sub_1};
  color: var(--main);
`;

const CommentWrapper = styled.div`
  border: 1px solid var(--gray);
  margin-bottom: 1rem;
`;

const CommentInputWrapper = styled.div`
  border: 1px solid var(--gray);
`;

export default PostPage;
