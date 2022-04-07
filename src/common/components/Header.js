import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// components
import { logo, menu_head_1 } from '../styles/textStyle';
import { Modal, Grid, Button } from './';
import { KAKAO_AUTH_URL } from '../utils/OAuth';

// redux
import { history } from '../redux/configureStore';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../../common/redux/modules/user';

const Header = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.user);
  const is_login = useSelector((state) => state.user.is_login);
  
  useEffect(() => {
    if (!is_login) {
      dispatch(userActions.loginCheck('/'));
    }
  }, [is_login]);

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
                  {!is_login && props ? (
                    <>
                      <Item
                        onClick={() => {
                          setModalOpen(true);
                        }}
                      >
                        Log In
                      </Item>
                    </>
                  ) : (
                    <>
                      <Item
                        onClick={() => {
                          dispatch(userActions.logOut());
                        }}
                      >
                        {userInfo?.username}님
                      </Item>
                    </>
                  )}
                </List>
              </Nav>
            ) : null}
          </RightSide>
        </InsideBox>
      </Container>
      {modalOpen && (
        <Modal width="31rem" height="31rem" setOpenModal={setModalOpen}>
          <Grid display="flex" justifyContent="center" margin="1rem 0 3rem 0">
            JS ON으로 <br />
            포트폴리오 준비 끝
          </Grid>

          <Wrapper>
            <Button
              width="25rem"
              padding="0.5rem"
              bg="#FEE500"
              color="var(--white)"
              radius="5px"
              cursor
              onClick={() => {
                window.location.href = KAKAO_AUTH_URL;
                // dispatch(userActions.loginCheck());
              }}
            >
              <h1>카카오톡으로 시작하기</h1>
            </Button>
          </Wrapper>
        </Modal>
      )}
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
  white-space: nowrap;
  :hover {
    color: var(--lightgray);
  }
  /* padding: 0.3rem 2rem; */
  /* border:1px solid green; */
`;

const Wrapper = styled.div`
  ${({ theme }) => theme.device.mobile} {
    display: flex;
    justify-content: center;
  }
`;

export default Header;
