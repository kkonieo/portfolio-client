import React from 'react';
import styled from 'styled-components';
import { button } from '../shared/textStyle';

const Button = (props) => {
  const {
    hoverToMain,
    commonSize,
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
    hoverToMain: hoverToMain,
    commonSize: commonSize,
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
  hoverToMain: '',
  commonSize: false,
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
  ${(props) => (props.commonSize ? `${button}: ${button}` : '')};
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
  ${(props) =>
    props.hoverToMain
      ? `&:hover {
      background-color: white;
      border: 0.1rem solid var(--main);
      color: var(--main);
    }`
      : ''}/* :active {
    opacity: 0.7;
  } */
`;

export default Button;
