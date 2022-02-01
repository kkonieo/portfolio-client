import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

// API
import api from '../../shared/API';

// Action
const SET_COMMENT = 'SET_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';

// ActionCreator
const setComment = createAction(SET_COMMENT, (comment_list) => ({
  comment_list,
}));
const addComment = createAction(ADD_COMMENT, (comment) => ({
  comment,
}));

// initialState
const initialState = {
  list: [],
  comment: [],
};

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
        console.log('댓글 작성 성공');
        console.log(response.data);
        dispatch(addComment(response.data.content));
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
        console.log('2222');
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
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = [];
        draft.list.push(...action.payload.comment_list);
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        draft.comment.unshift(action.payload.comment);
      }),
  },
  initialState,
);

// ActionCreator export
const actionCreators = {
  setComment,
  getCommentAX,
  addComment,
  addCommentAX,
};

export { actionCreators };
