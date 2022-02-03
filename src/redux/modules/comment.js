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
const addComment = createAction(ADD_COMMENT, (comments) => ({
  comments,
}));

// initialState
const initialState = {
  list: [],
};

// 댓글 추가 API
const addCommentAX = (comments, name, content, profile_image) => {
  return function (dispatch, getState, { history }) {
    api
      .post(`/addcomment`, {
        comments: comments,
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
        draft.list.push(...action.payload.commentlist);
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.comment.push(action.payload.comment);
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
  setComment,
  getCommentAX,
  addCommentAX,
};

export { actionCreators };
