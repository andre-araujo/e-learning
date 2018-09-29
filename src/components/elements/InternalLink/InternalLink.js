import React from 'react';
import { node, number, string } from 'prop-types';
import Link from 'next/link';

import {
  StyledAnchor,
} from './InternalLink.styles';

function InternalLink({
  children,
  href,
  gap,
  ...props
}) {
  return (
    href ? (
      <Link href={href}>
        <StyledAnchor gap={gap} {...props}>
          {children}
        </StyledAnchor>
      </Link>
    ) : (
      <StyledAnchor gap={gap} {...props} href="#">
        {children}
      </StyledAnchor>
    )
  );
}

InternalLink.defaultProps = {
  children: '',
  href: null,
  gap: 0,
};

InternalLink.propTypes = {
  children: node,
  href: string,
  gap: number,
};

export default InternalLink;
