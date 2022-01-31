import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';

import api from '../../shared/API';

// Action
const WRITE_TEXT = 'review/WRITE_TEXT';
const SET_COMMENT = 'SET_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';

// ActionCreator
// const writeText = createAction(WRITE_TEXT, (text) => ({ text }));
const setComment = createAction(SET_COMMENT, (comment_list) => ({
  comment_list,
}));
const addComment = createAction(ADD_COMMENT, (comments) => ({
  comments,
}));

// initialState
const initialState = {
  comments: [],
  text: null,
};

// const writeTextPage = (value) => {
//   return function (dispatch, getState, { history }) {
//     dispatch(writeText(value));
//   };
// };

const addCommentAX = (comments, name, content, profile_image) => {
  return function (dispatch, getState, { history }) {
    api
      .post(`/comment`, {
        content: comments,
        name: name,
        // content: content,
        // profile_image: profile_image,
      })
      .then((response) => {
        // dispatch(writeTextPage(response.data.comments));
        dispatch(addComment(response.data.comments));
        // window.location.reload();
      })
      .catch((error) => {
        console.log('댓글 작성 실패', error);
      });
  };
};

const getCommentAX = () => {
  return function (dispatch, getState, { history }) {
    // const user = getState().user.user;
    // const user_info = {
    //   user_id: 1,
    //   user_email: "user_email",
    //   user_nickname: "user_nickname",
    // };
    api
      .get(`/comment`)
      .then((res) => {
        let comment_list = [];

        res.data.forEach((_comment) => {
          let comment = {
            // ...user_info,
            comment_id: _comment.id,
            name: _comment.name,
            profile_image: _comment.profile_image,
            content: _comment.content,
          };
          comment_list.push(comment);
        });
        dispatch(setComment(comment_list));
        // dispatch(setComment(comment_list.content));
      })
      .catch((e) => {
        console.log('불러오기 에러', e);
      });
  };
};

// Reducer
export default handleActions(
  {
    // [WRITE_TEXT]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.text = action.payload.text;
    //   }),
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.commentlist);
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.comment.unshift(action.payload.comments);
      }),
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
  // writeTextPage,
  setComment,
  getCommentAX,
  addCommentAX,
};

export { actionCreators };
