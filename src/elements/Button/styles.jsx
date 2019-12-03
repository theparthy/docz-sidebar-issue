import React from 'react';
import styled from 'styled-components/macro';
import { buttonStyle, space, width } from 'styled-system';
import is, { match } from 'styled-is';
import { Button as ReakitBtn } from 'reakit';
import { Link } from 'react-router-dom';

import { partitionHTMLProps } from 'utils';
import theme from 'theme';
import { StyledHollowDots } from 'elements/Spinner';

const Button = ({ children, icon, iconRight, ...props }) => {
  const [inputProps] = partitionHTMLProps(props);
  return (
    <ReakitBtn {...inputProps}>
      {!!icon && !iconRight ? <IconWrapper>{icon}</IconWrapper> : null}
      <Content>{children}</Content>
      {!!icon && iconRight ? (
        <IconWrapper iconRight={iconRight}>{icon}</IconWrapper>
      ) : null}
    </ReakitBtn>
  );
};

const LinkButton = ({
  to,
  replace,
  target,
  innerRef,
  children,
  icon,
  iconRight,
  ...props
}) => {
  const [inputProps] = partitionHTMLProps(props);
  return (
    <Link
      {...inputProps}
      to={to}
      replace={replace}
      target={target}
      innerRef={innerRef}
    >
      {!!icon && !iconRight ? <IconWrapper>{icon}</IconWrapper> : null}
      <Content>{children}</Content>
      {!!icon && iconRight ? (
        <IconWrapper iconRight={iconRight}>{icon}</IconWrapper>
      ) : null}
    </Link>
  );
};

const StyledButton = styled.button.attrs(({ size, textOnly }) => ({
  size: !!textOnly ? 'text' : size,
}))`
  //display: inline-flex;
  //align-items: center;
  //text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  transition: all 0.1s ease-in-out 0s;
  position: relative;
  -webkit-appearance: none;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  i {
    opacity: .8;
  }
  ${is('iconOnly')`
    padding: 0;
    justify-content: center;
    flex-basis: 38px;
    width: 38px;
    flex-shrink: 0;
  `}
  ${is('isExpanded')`
    width: 100%;
  `}

  & > * {
    transition: .1s all;
  }
  ${is('isLoading')`
    & > * {
      opacity: 0;
    }
    & > ${StyledHollowDots}  {
      opacity: 1;
    }
  `}  
  padding: 11px 28px;
  ${theme.textStyles.buttonText}
  &:not(:disabled) {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  &:active {
    border-color: #eee;
    box-shadow: none;
    transform: translateY(0px);
  }
  /*Basic Appearence*/

  ${match('as', 'a')`
    & * {
      text-decoration: none;
      vertical-align: middle;
    }
  `}  
    text-decoration: none;
  
  ${is('isExpanded', 'icon')`
    padding-left: 40px;
    padding-right: 40px;
  `}
  
  ${is('icon')`
    padding-left: 14px;
  `}  
  
  ${is('iconRight')`
    padding-left: 28px;
    padding-right: 14px;
  `}

  ${space}
  ${width} 
  ${buttonStyle} 
`;

export const BaseButton = props => <StyledButton as={Button} {...props} />;
export const BaseLinkButton = props => (
  <StyledButton as={LinkButton} {...props} />
);

export const Content = styled.span`
  flex-grow: 1;
  height: 100%;
  display: inline-flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.span`
  margin-right: 28px;
  display: inline-block;
  ${is('iconRight')`
   margin-left: 28px;
   margin-right: 0;
  `}
  svg {
    width: 14px;
  }
`;
