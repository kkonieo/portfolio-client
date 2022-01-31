import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';

import api from '../../shared/API';

// Action
const SET_COMMENT = 'SET_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';

// ActionCreator
const setComment = createAction(SET_COMMENT, (comment_list) => ({
  comment_list,
}));

// initialState
const initialState = {
  list: [],
};

// const writeTextPage = (value) => {
//   return function (dispatch, getState, { history }) {
//     dispatch(writeText(value));
//   };
// };

// 댓글 추가 API
// const addReviewAPI = (comments, username, id, star) => {
//   return function (dispatch, getState, { history }) {
//     api
//       .post(`/comment`, {
//         comments: comments,
//         username: username,
//       })
//       .then((response) => {
//         dispatch(writeTextPage(response.data.comments));
//         dispatch(addReview(response.data));
//         window.location.reload();
//       })
//       .catch((error) => {
//         console.log('댓글 작성 실패', error);
//       });
//   };
// };

const getCommentAX = () => {
  return function (dispatch, getState, { history }) {
    api
      .get(`/Comment`)
      .then((res) => {
        let comment_list = [];

        res.data.forEach((_comment) => {
          let comment = {
            comment_id: _comment.id,
            name: _comment.name,
            profile_image: _comment.profile_image,
            content: _comment.content,
          };
          comment_list.push(comment);
        });
        dispatch(setComment(comment_list));
      })
      .catch((e) => {
        console.log('불러오기 에러', e);
      });
  };
};

// Reducer
export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.comment_list);
      }),
    // [ADD_COMMENT]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.comment.unshift(action.payload.comments);
    //   }),
    // [GET_COMMENT]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.comment = action.payload.comment;
    //   }),
    // [EDIT_COMMENT]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.comments = action.payload.comments;
    //   }),
    // [DELETE_COMMENT]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.comment = action.payload.comment;
    //   }),
  },
  initialState,
);

// ActionCreator export
const actionCreators = {
  setComment,
  getCommentAX,
};

export { actionCreators };
