import NextLink from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

const Link = ({ href, children, ...rest }) => {
  return (
    <NextLink href={href}>
      <a href={href} {...rest}>
        {children}
      </a>
    </NextLink>
  );
};

Link.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
};

export default Link;
