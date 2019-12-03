import React from 'react';
import PropTypes from 'prop-types';
import { HollowDots } from 'elements/Spinner';
import { BaseButton, BaseLinkButton } from './styles';

export const LinkButton = ({ isLoading, children, ...otherProps }) => (
  <BaseLinkButton label={isLoading ? 'Loading' : undefined} {...otherProps}>
    {isLoading ? <HollowDots /> : children}
  </BaseLinkButton>
);

const Button = ({ isLoading, children, ...otherProps }) => (
  <BaseButton label={isLoading ? 'Loading' : undefined} {...otherProps}>
    {isLoading ? <HollowDots /> : children}
  </BaseButton>
);
export default Button;

Button.defaultProps = {
  variant: 'primary',
};

Button.displayName = 'Button';
Button.propTypes = {
  id: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'textOnly']),
  isLoading: PropTypes.bool,
  iconOnly: PropTypes.bool,
  as: PropTypes.oneOf(['a', 'button']),
  isExpanded: PropTypes.bool,
  icon: PropTypes.element,
  iconRight: PropTypes.bool,
};

LinkButton.displayName = 'LinkButton';

LinkButton.propTypes = {
  id: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'textOnly']),
  isLoading: PropTypes.bool,
  iconOnly: PropTypes.bool,
  isExpanded: PropTypes.bool,
  icon: PropTypes.element,
  iconRight: PropTypes.bool,
};
LinkButton.defaultProps = {
  variant: 'primary',
};
