import React from 'react';
import { node, string } from 'prop-types';

import {
  StyledText,
} from './Text.styles';

function Text({
  children,
  tag,
  type,
  margin,
  ...props
}) {
  const Component = StyledText(tag);
  return (
    <Component {...props} type={type} margin={margin}>
      {children}
    </Component>
  );
}

Text.Title = props => <Text type="title" tag="h1" {...props} />;
Text.Subtitle = props => <Text type="subtitle" tag="h2" {...props} />;
Text.Paragraph = props => <Text type="paragraph" tag="p" {...props} />;
Text.Small = props => <Text type="small" tag="span" {...props} />;

Text.defaultProps = {
  children: null,
  tag: 'span',
  type: 'paragraph',
};

Text.propTypes = {
  children: node,
  tag: string,
  type: string,
};

export default Text;
