import { css } from 'styled-components';

export const logo = css`
  font-size: 1.8rem;
  font-weight: 600;
`;

export const menu = css`
  font-size: 1.1rem;
  ${({ theme }) => theme.device.mobile} {
    font-size: 1rem;
  }
`;

export const mainTitle = css`
  font-size: 1.6rem;
  font-weight: 600;
`;

export const subTitle = css`
  font-size: 1.3rem;
  font-weight: 400;
`;

export const body = css`
  font-size: 1rem;
  line-height: 2rem;
`;

export const desc = css`
  font-size: 0.8rem;
  /* line-height: 1rem; */
`;

export const button = css`
  font-size: 1rem;
`;

export const sans = css`
  font-family: IBM Plex Sans KR;
`;
