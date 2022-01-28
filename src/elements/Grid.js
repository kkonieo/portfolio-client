import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
  const {
    M_width,
    is_flex_comment,
    is_flex,
    width,
    margin,
    padding,
    bg,
    children,
    center,
    height,
  } = props;

  const styles = {
    M_width: M_width,
    is_flex_comment: is_flex_comment,
    is_flex: is_flex,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
  };
  return (
    <React.Fragment>
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  width: '100%',
  height: '',
  padding: false,
  margin: false,
  bg: false,
  center: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : '')}
  /* ${(props) => (props.min_width ? `min-width: ${props.bg};` : '')} */
  ${(props) => (props.center ? `text-align: center;` : '')}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ''}
  ${(props) =>
    props.is_flex_comment
      ? `display: flex; align-items: center; justify-content: flex-start; `
      : ''}
  ${(props) => (props.M_width ? `width:100%; min-width: 28rem;  ` : '')}
`;

export default Grid;
