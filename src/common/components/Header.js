import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// components
import { logo, menu_head_1 } from '../../common/styles/textStyle';

// redux
import { history } from '../redux/configureStore';

const Header = (props) => {
  return (
    <>
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
                  <Item onClick={() => history.push('/main')}>MyPage</Item>
                  <Item onClick={() => alert('로그인 준비 중')}>LogIn</Item>
                </List>
              </Nav>
            ) : null}
          </RightSide>
        </InsideBox>
      </Container>
    </>
  );
};

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 80px;
  background-color: transparent;
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
  ${menu_head_1}
  cursor: pointer;
  list-style: none;
  color: var(--main);
  margin: 0.3rem 2rem;
  :hover {
    color: var(--lightgray);
  }
  /* padding: 0.3rem 2rem; */
  /* border:1px solid green; */
`;

export default Header;
