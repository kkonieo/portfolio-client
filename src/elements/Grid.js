import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
  const {
    is_flex,
    is_flex_start,
    is_flex_center,
    is_flex_end,
    flexDirection,
    display,
    justifyContent,
    alignItems,
    width,
    margin,
    padding,
    bg,
    children,
    center,
    height,
    M_width,
  } = props;

  const styles = {
    is_flex: is_flex,
    is_flex_start: is_flex_start,
    is_flex_center: is_flex_center,
    is_flex_end: is_flex_end,
    display: display,
    justifyContent: justifyContent,
    alignItems: alignItems,
    flexDirection: flexDirection,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
    M_width: M_width,
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
  ${(props) => (props.display ? `display: ${props.display};` : '')}
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems};` : '')}
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}
  ${(props) =>
    props.flexDirection ? `flex-direction: ${props.flexDirection};` : ''}
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : '')}
  ${(props) => (props.center ? `text-align: center;` : '')}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between;`
      : ''}
  ${(props) =>
    props.is_flex_start
      ? `display: flex; align-items: center; justify-content: flex-start;`
      : ''}
    ${(props) =>
    props.is_flex_center
      ? `display: flex; align-items: center; justify-content: center;`
      : ''}
  ${(props) =>
    props.is_flex_end
      ? `display: flex; align-items: center; justify-content: flex-end;`
      : ''}
  ${(props) => (props.M_width ? `width: 100%; min-width: 28rem;` : '')}
`;

export default Grid;
