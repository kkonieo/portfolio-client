import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
// import axios from 'axios';

// Action
const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';

// Action Creator
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (test) => ({ test }));

// InitialState
const initialState = {
  list: [],
};

// middleware
const addPostAX = (post) => {
  return function (dispatch, getState, { history }) {};
};

const getPostAX = () => {
  return function (dispatch, getState, { history }) {};
};

// Reducer
export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {}),

    [ADD_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState,
);

const actionCreators = {
  setPost,
  addPost,
  addPostAX,
  getPostAX,
};

export { actionCreators };
