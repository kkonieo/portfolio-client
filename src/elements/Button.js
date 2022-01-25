import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const {
    _onClick,
    children,
    margin,
    width,
    height,
    padding,
    bg,
    color,
    radius,
    size,
    cursor,
    border,
  } = props;

  const styles = {
    margin: margin,
    width: width,
    height: height,
    padding: padding,
    bg: bg,
    color: color,
    radius: radius,
    size: size,
    cursor: cursor,
    border: border,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  children: null,
  _onClick: () => {},
  margin: false,
  width: '',
  // height: '',
  size: false,
  padding: false,
  bg: false,
  color: false,
  radius: false,
  cursor: false,
  border: false,
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.size ? `font-size: ${props.size}` : '')};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : '')};
  ${(props) => (props.color ? `color: ${props.color};` : '')};
  box-sizing: border-box;
  border: none;
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : '')};
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  ${(props) => (props.cursor ? `cursor: pointer;` : '')};
  ${(props) => (props.border ? `border: ${props.border}` : '')};
`;

export default Button;
