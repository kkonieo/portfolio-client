import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import api from '../../../common/utils/API';

// Action
const SET_PROJECT_LIST = 'SET_PROJECT_LIST';
const SET_PROJECT_PAGE = 'SET_PROJECT_PAGE';
// const ADD_POST = 'ADD_POST';
// const EDIT_POST = "EDIT_POST";
// const LOADING = "LOADING";

// Action Creator
const setProjectList = createAction(SET_PROJECT_LIST, (project_list) => ({
  project_list,
}));
const setProjectPage = createAction(SET_PROJECT_PAGE, (project_page) => ({
  project_page,
}));
// const addPost = createAction(ADD_POST, (comment_list) => ({ comment_list }));
// const editPost = createAction(EDIT_POST, (post_id, post) => ({
//   post_id,
//   post,
// }));
// const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

// InitialState
const initialState = {
  project_list: [],
  project_page: [],
};

// const initialProject = {
//   project_list: [
//     {
//       id: 1,
//       title: '이것의 제목은 알파벳입니다.',
//       description:
//         '문자 체계의 유형으로서, 알파벳은 아부기다나 아브자드와 함께 음소 문자에 속한다. 다만 서양에서는, 이러한 3가지를 알파벳이라고 부르는 경우도 있다.',
//       thumbnail:
//         'https://images.unsplash.com/photo-1643533453176-29fe50049959?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
//       started_at: '2022-01-25 22:00:00',
//       ended_at: '2022-03-25 22:00:00',
//       user: {
//         name: 'Chicken',
//         profile:
//           'https://images.unsplash.com/photo-1643133277936-9f93d8792522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
//       },
//     },
//   ],
// };

// middleware
const getProjectListAX = () => {
  return function (dispatch, getState, { history }) {
    api
      .get(`/projects`)
      // .get(`${PostData}`)
      .then((res) => {
        const project_list = [];
        // console.log(res);
        res.data.forEach((_project) => {
          const project = {
            // ...user_info,
            project_id: _project.project_id,
            title: _project.title,
            description: _project.content,
            thumbnail: _project.images,
            started_at: _project.started_at,
            ended_at: _project.ended_at,
          };
          project_list.push(project);
        });
        dispatch(setProjectList(project_list));
      })
      .catch((e) => {
        console.log('불러오기 에러', e);
      });
  };
};

const getProjectPageAX = () => {
  return function (dispatch, getState, { history }) {
    // const project_id = project_list.project_id
    api
      .get(`/projects`)
      // .get(`/projects/${project_id}`)
      .then((res) => {
        const project_page = [];

        res.data.forEach((_project) => {
          const project = {
            // post: _project.post,
            // ...user_info,
            // project_id: _project.post.project_id,
            title: _project.post.title,
            description: _project.post.content,
            mainimage: _project.post.images,
            livedemo: _project.post.gif,
            started_at: _project.post.started_at,
            ended_at: _project.post.ended_at,
            skills: _project.post.skills,
            role: _project.post.role,
            takeaway: _project.post.takeaway,
            difficulty: _project.post.difficulty,
            // title: res.data.post.title,
            // description: res.data.post.content,
            // mainimage: res.data.post.images,
            // livedemo: res.data.post.gif,
            // started_at: res.data.post.started_at,
            // ended_at: res.data.post.ended_at,
            // skills: res.data.post.skills,
            // role: res.data.post.role,
            // takeaway: res.data.post.takeaway,
            // difficulty: res.data.post.difficulty,
          };
          project_page.push(project);
        });
        // dispatch(setProjectPage(res.data.user_project)); 
        dispatch(setProjectPage(project_page));
      })
      // .then((res) => {
      //   dispatch(setProjectPage(res.data));
      // })
      .catch((e) => {
        console.log('불러오기 에러', e);
      });
  };
};

// Reducer // immer 사용해서 불변성 유지
export default handleActions(
  {
    [SET_PROJECT_LIST]: (state, action) =>
      produce(state, (draft) => {
        // draft.project_list.push(...action.payload.project_list);
        draft.project_list = action.payload.project_list;
        // console.log('project list handleActions', action.payload);
      }),
    [SET_PROJECT_PAGE]: (state, action) =>
      produce(state, (draft) => {
        // draft.project_page.push(...action.payload.project_page);
        draft.project_page = action.payload.project_page;
      }),
    // [ADD_POST]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.list.unshift(action.payload.comment_list);
    //   }),
  },
  initialState,
);

const actionCreators = {
  setProjectList,
  getProjectListAX,
  setProjectPage,
  getProjectPageAX,
  // setProject,
  // setComment,
  // addPost,
  // addPostAX,
  // getProjectAX,
  // getCommentAX,
};

export { actionCreators };
