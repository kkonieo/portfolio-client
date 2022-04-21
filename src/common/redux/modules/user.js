import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import api from '../../utils/API';

// Action
const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';
const GET_USER = 'GET_USER';

// Action Creator
const setUser = createAction(SET_USER, (user_info) => ({ user_info }));
const logOut = createAction(LOGOUT, () => {});
const getUser = createAction(GET_USER, (user_cookie) => ({ user_cookie }));

// initial State
const initialState = {
  user: null,
  is_login: false,
  // is_cookie: false,
};

// middleware
const getUserAX = () => {
  return function (dispatch, getState, { history }) {
    console.log('getuser 들어옴');
    api
      // (
      .get('/user/login')
      .then((res) => {
        console.log(res);
        // let token = res.res;
        // sessionStorage.setItem('token', token);
        dispatch(
          setUser({
            is_res_token: res.res,
            user_id: res.user_id,
            user_email: res.user_email,
          }),
        );
        history.replace('/');
        window.alert(`환영합니다!`);
      })
      .catch((e) => {
        console.log('유저 정보 확인 에러', e);
      });
  };
};

// 카카오 로그인
const kakaoLogin = (code) => {
  return function (dispatch, getState, { history }) {
    console.log('test');
    api({
      method: 'GET',
      url: `/Oauth/user/kakao/callback?code=${code}`,
    })
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임
        const ACCESS_TOKEN = res.data.token;

        localStorage.setItem('token', ACCESS_TOKEN); //예시로 로컬에 저장함

        history.replace('/main'); // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)

        api
          .get('/user/info', {
            // headers: header,
          })
          .then((res) => {
            console.log(res);
            dispatch(
              setUser({
                is_login: res.data.res,
                user_email: res.data.user_email,
              }),
            );

            window.alert(`로그인에 성공하였습니다.`);
            // history.replace('/');
            window.location.replace('/');
          })
          .catch((e) => {
            console.log('user 정보 조회 에러', e);
          });
      })
      .catch((err) => {
        console.log('소셜로그인 에러', err);
        window.alert('로그인에 실패하였습니다.');
        history.replace('/'); // 로그인 실패하면 서비스 소개 화면으로 돌려보냄
      });
  };
};

const loginCheck = () => {
  return function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem('token');
    if (token) {
      const header = {
        'X-AUTH-TOKEN': `${token}`,
      };
      api
        .get('/user/login', { headers: header })
        .then((res) => {
          if (res.data.res) {
            dispatch(
              setUser({
                is_login: res.data.res,
                user_id: res.data.user_id,
                user_email: res.data.user_email,
              }),
            );
          } else {
            dispatch(logOut());
          }
        })
        .catch((e) => {
          console.log('에러발생', e);
        });
    }
  };
};

// Reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        // setCookie('is_login', 'success');
        draft.user = action.payload.user_info;
        draft.is_login = true;
        console.log(draft.user);
      }),
    [LOGOUT]: (state, action) =>
      produce(state, (draft) => {
        sessionStorage.removeItem('token');
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) =>
      produce(state, (draft) => {
        // let cookie = action.payload.user_cookie;
        // setCookie("JSESSIONID", cookie);
        // draft.is_cookie = true;
      }),
  },
  initialState,
);

const actionCreators = {
  logOut,
  getUser,
  getUserAX,
  kakaoLogin,
  loginCheck,
};

export { actionCreators };