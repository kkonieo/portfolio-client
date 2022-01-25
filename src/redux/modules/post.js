import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';

// Action
const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';
// const EDIT_POST = "EDIT_POST";
// const LOADING = "LOADING";

// Action Creator
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
// const editPost = createAction(EDIT_POST, (post_id, post) => ({
//   post_id,
//   post,
// }));
// const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

// InitialState // reducer가 사용할 intialState
const initialState = {
  list: [],
  // is_loading: false,
};

// middleware
// const addPostAX = (post) => {
//   return function (dispatch, getState, { history }) {
//     const user = getState().user.user;
//     const user_info = {
//       user_id: 1,
//       user_email: "user_email",
//       user_nickname: "user_nickname",
//     };

//     let form = new FormData();
//     form.append("title", post.title);
//     form.append("file", post.image);
//     form.append('user_id', user.user_id);

//     const headers = {
//       "Content-Type": "multipart/form-data",
//     };

//     axios
//       .post(`http://api/photos`, form, { headers: headers })

//       .then(function (res) {
//         console.log(res);
//         const post = {
//           ...user_info,
//           post_id: res.data.id,
//           title: res.data.title,
//           // image_url: `${axiosInfo.config}/image/${res.data.fname}`,
//           // user_id: res.data.user_id,
//         };
//         dispatch(addPost(post));
//         window.alert("게시글 작성 완료");
//         window.location.replace("/");
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
// };

const getPostAX = () => {
  return function (dispatch, getState, { history }) {
    // const user = getState().user.user;
    // const user_info = {
    //   user_id: 1,
    //   user_email: 'user_email',
    //   user_nickname: 'user_nickname',
    // };

    axios
      // .get('https://jsonplaceholder.typicode.com/photos')
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        // console.log(res.data);

        let post_list = [];

        res.data.forEach((_post) => {
          let post = {
            post_id: _post.id,
            // contents: _post.title,
            contents: _post.body,
            images: _post.thumbnailUrl,
            // url: _post.url,
          };
          post_list.push(post);
          // console.log(post);
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
      }),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
  },
  initialState,
);

const actionCreators = {
  setPost,
  addPost,
  getPostAX,
};

export { actionCreators };
