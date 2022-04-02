// import React, { useEffect } from 'react';
// import styled from 'styled-components';

// // components & elements
// import { Header, PostTemplate, Post, Button } from '../../common/components';
// import { head_2 } from '../../common/styles/textStyle';
// // import { post_list } from '../../common/data/PostData';

// // redux
// import { history } from '../../common/redux/configureStore';
// import { useSelector, useDispatch } from 'react-redux';
// import { actionCreators as postActions } from '../../common/redux/modules/post';

// const PostListPage = (props) => {
//   const dispatch = useDispatch();
//   // const post_list = useSelector((state) => {
//   //   console.log(state);
//   //   return state.post.list;
//   // });
//   // const post_list = useSelector((state) => state.post.list);
//   // const isLogin = useSelector((state) => state.user.isLogin);
//   const post_list = useSelector((state) => {
//     console.log(state);
//     return state.post.list;
//   });
//   // const isLogin = useSelector((state) => state.user.isLogin);

//   useEffect(() => {
//     if (post_list.length === 0) {
//       dispatch(postActions.getPostAX());
//     }
//   }, []);

//   return (
//     <PostTemplate>
//       <Header page="headermenu" />
//       <BtnWrapper>
//         <Title>Post</Title>
//         {/* {!isLogin ? ( */}
//         <Button
//           size="1.5rem"
//           cursor="pointer"
//           bg="transparent"
//           color="var(--main)"
//           onClick={() => history.push('/editor')}
//           // onClick={() => {
//           //   history.push(`/editor/${p.id}`);
//           // }}
//         >
//           글쓰기
//         </Button>
//         {/* ) : null} */}
//       </BtnWrapper>

//       {post_list.map((p, idx) => (
//         // <PostTitle key={p.post_id} {...p}></PostTitle>
//         <Post key={p.post_id} {...p}>
//           {p.title}
//           {p.description}
//           {p.createdDate}
//         </Post>
//       ))}
//     </PostTemplate>
//   );
// };

// const BtnWrapper = styled.section`
//   display: flex;
//   justify-content: space-between;
//   ${({ theme }) => theme.device.mobile} {
//     width: 100%;
//     min-width: 28rem;
//   }
// `;

// const Title = styled.h2`
//   ${head_2};
//   color: var(--main);
// `;

// export default PostListPage;
