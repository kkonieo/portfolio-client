import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import api from '../../../common/utils/API';

// Action
const SET_POST = 'SET_POST';
// const ADD_POST = 'ADD_POST';
// const EDIT_POST = "EDIT_POST";
// const LOADING = "LOADING";

// Action Creator
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
// const addPost = createAction(ADD_POST, (comment_list) => ({ comment_list }));
// const editPost = createAction(EDIT_POST, (post_id, post) => ({
//   post_id,
//   post,
// }));
// const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

// InitialState
const initialState = {
  list: [],
};

const initialPost = {
  post_list: [
    {
      id: 1,
      title: '이것의 제목은 알파벳입니다.',
      description:
        '문자 체계의 유형으로서, 알파벳은 아부기다나 아브자드와 함께 음소 문자에 속한다. 다만 서양에서는, 이러한 3가지를 알파벳이라고 부르는 경우도 있다.',
      thumbnail:
        'https://images.unsplash.com/photo-1643533453176-29fe50049959?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
      createdDate: '2022-01-25 22:00:00',
      user: {
        name: 'Chicken',
        profile:
          'https://images.unsplash.com/photo-1643133277936-9f93d8792522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
    },
  ],
};

// middleware
// const addPostAX = (comment_list) => {
//   return function (dispatch, getState, { history }) {
//     let form = new FormData();
//     form.append('comment', comment_list.comment);

//     axios
//       .post(``)

//       .then(function (res) {
//         console.log(res);
//         const comment = {
//           comment_id: res.data.id,
//           image_url: res.data.img,
//           // image_url: `${axiosInfo.config}/image/${res.data.fname}`,
//           // user_id: res.data.user_id,
//         };
//         dispatch(addPost(comment));
//         window.alert('게시글 작성 완료');
//         // window.location.replace('/');
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
// };

const getPostAX = () => {
  return function (dispatch, getState, { history }) {
    api
      .get(`/post`)
      // .get(`${PostData}`)
      .then((res) => {
        let post_list = [];
        // console.log(res);
        res.data.forEach((_post) => {
          let post = {
            // ...user_info,
            post_id: _post.id,
            title: _post.title,
            description: _post.description,
            thumbnail: _post.thumbnail,
            createdDate: _post.createdDate,
          };
          post_list.push(post);
        });

        dispatch(setPost(post_list));
      })
      .catch((e) => {
        console.log('불러오기 에러', e);
      });
  };
};

// Reducer // immer 사용해서 불변성 유지
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.post_list);
        console.log('post handleActions');
      }),

    // [ADD_POST]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.list.unshift(action.payload.comment_list);
    //   }),
  },
  initialState,
);

const actionCreators = {
  setPost,
  // setComment,
  // addPost,
  // addPostAX,
  getPostAX,
  // getCommentAX,
};

export { actionCreators };
