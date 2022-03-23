// import React from 'react';
// import styled from 'styled-components';

// // components
// import {
//   logo,
//   menu,
//   mainTitle,
//   subTitle,
//   body,
//   desc,
//   button,
//   sans,
// } from '../../common/styles/textStyle';

// const Text = ({ children, ...rest }) => {
//   return <Wrapper {...rest}>{children}</Wrapper>;
// };

// const Wrapper = styled.div`
//   ${({ type }) => {
//     switch (type) {
//       case 'logo':
//         return `${logo}`;
//       case 'menu':
//         return `${menu}`;
//       case 'mainTitle':
//         return `${mainTitle}`;
//       case 'subTitle':
//         return `${subTitle}`;
//       case 'body':
//         return `${body}`;
//       case 'desc':
//         return `${desc}`;
//       case 'button':
//         return `${button}`;
//       case 'sans':
//         return `${sans}`;
//       default:
//         return;
//     }
//   }};
//   /* color: ${(props) =>
//     props.color ? `var(--${props.color})` : `#f69269`}; */
//   /* color: ${(props) =>
//     props.color ? `var(--${props.color})` : `#f69269`}; */
//   color: ${(props) => props.color};
//   width: ${(props) => props.width};
//   margin: ${(props) => props.margin};
//   margin-bottom: ${(props) => props.marginBottom};
//   font-size: ${(props) => props.fontSize};
//   font-weight: ${(props) => props.fontWeight};
//   white-space: ${(props) => props.whiteSpace};
//   ${({ theme }) => theme.device.mobile} {
//     ${(props) => (props.center ? `text-align: center;` : '')}
//   }
// `;

// export default Text;
