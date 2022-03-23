import React from 'react';
import styled from 'styled-components';
import { button } from '../../common/styles/textStyle';

const Button = (props) => {
  const {
    hoverMain,
    commonSize,
    onClick,
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
    is_flex_center,
    foldSize,
  } = props;

  const styles = {
    hoverMain: hoverMain,
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
    is_flex_center,
    foldSize,
  };

  return (
    <ButtonForm {...styles} onClick={onClick}>
      {children}
    </ButtonForm>
  );
};

Button.defaultProps = {
  hoverMain: '',
  commonSize: false,
  children: null,
  onClick: () => {},
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

const ButtonForm = styled.button`
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
    props.hoverMain
      ? `&:hover {
      background-color: white;
      border: 0.1rem solid var(--main);
      color: var(--main);
    }`
      : ''}
  ${(props) =>
    props.is_flex_center
      ? `display: flex; align-items: center; justify-content: center;`
      : ''}
  ${({ theme }) => theme.device.fold} {
    ${(props) => (props.foldSize ? `--size: 3rem;` : '')};
  }
`;

export default Button;
