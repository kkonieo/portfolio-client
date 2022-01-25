import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// components
import { logo, head_1 } from '../shared/textStyle';

const Header = (props) => {
  const history = useHistory();

  return (
    <Container>
      <InsideBox>
        <LeftSide>
          <LogoBox onClick={() => history.push('/')}>
            <TextLogo>JS ON</TextLogo>
          </LogoBox>
        </LeftSide>
        <RightSide>
          {props.page === 'headermenu' ? (
            <Nav>
              <List>
                <Item onClick={() => history.push('/projectlist')}>
                  Project
                </Item>
                <Item onClick={() => history.push('/postlist')}>Blog</Item>
                <Item onClick={() => history.push('/main')}>MyPage</Item>
              </List>
            </Nav>
          ) : null}
        </RightSide>
      </InsideBox>
    </Container>
  );
};

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 80px;
  background-color: white;
  /* border: 1px solid black; */
`;

const InsideBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 0 80px;
  ${({ theme }) => theme.device.tablet} {
    /* margin: 0 3rem 0 3rem; */
  }
  ${({ theme }) => theme.device.mobile} {
    /* margin: 0 3rem 0 3rem; */
  }
`;

const LeftSide = styled.section`
  flex-shrink: 0;
`;

const RightSide = styled.section`
  margin-right: -1rem;
`;

const LogoBox = styled.div`
  cursor: pointer;
`;

const TextLogo = styled.p`
  ${logo}
  color: var(--main);
`;

const Nav = styled.nav`
  margin-top: 1.6rem;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  ${head_1}
  cursor: pointer;
  list-style: none;
  color: var(--main);
  margin: 0.3rem 2rem;
  /* padding: 0.3rem 2rem; */
  /* border:1px solid green; */
`;

export default Header;
