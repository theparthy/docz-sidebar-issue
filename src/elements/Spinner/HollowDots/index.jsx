import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

export const StyledHollowDots = styled.div`
  height: ${props => props.size}px;
  width: ${props => 2 * props.size * 4}px;
  .dot {
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    margin: 0 calc(${props => props.size}px / 2);
    border: calc(${props => props.size}px / 5) solid
      ${p => p.theme.colors[p.color] || 'black'};
    border-radius: 50%;
    float: left;
    transform: scale(0);
    animation: hollow-dots-spinner-animation
      ${props => props.animationDuration}ms ease infinite 0ms;
  }
  .dot:nth-child(1) {
    animation-delay: calc(${props => props.animationDelay}ms * 1);
  }
  .dot:nth-child(2) {
    animation-delay: calc(${props => props.animationDelay}ms * 2);
  }
  .dot:nth-child(3) {
    animation-delay: calc(${props => props.animationDelay}ms * 3);
  }
  @keyframes hollow-dots-spinner-animation {
    50% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const HollowDots = ({
  size,
  color,
  animationDuration,
  className,
  style,
  ...props
}) => {
  const animationDelay = animationDuration * 0.3;

  return (
    <StyledHollowDots
      size={size}
      color={color}
      animationDuration={animationDuration}
      style={style}
      animationDelay={animationDelay}
      {...props}
    >
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
    </StyledHollowDots>
  );
};

HollowDots.propTypes = {
  size: PropTypes.number,
  animationDuration: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.object,
};
HollowDots.defaultProps = {
  size: 10,
  color: '#fff',
  animationDuration: 1000,
};
