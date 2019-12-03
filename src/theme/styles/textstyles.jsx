import { css } from 'styled-components';

export default {
  heading1: css`
    line-height: 1.4;
    font-size: 28px;
  `,

  heading2: css`
    letter-spacing: -0.56px;
    line-height: 1.14;
    font-size: 26px;
  `,

  heading3: css`
    letter-spacing: -0.52px;
    line-height: 1.15;
    font-size: 20px;
  `,

  navItem: css`
    color: ${({ theme }) => theme.colors.grey800};
    letter-spacing: -0.44px;
    line-height: 1.18;
    font-size: 22px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 700;
  `,

  tagText: css`
    color: ${({ theme }) => theme.colors.grey600};
    letter-spacing: -0.16px;
    line-height: 1;
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 400;
  `,

  buttonText: css`
    letter-spacing: -0.14px;
    line-height: 1;
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 700;
  `,
};
