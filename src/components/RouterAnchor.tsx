import { forwardRef } from 'react';
import { createLink, type LinkComponentProps } from '@tanstack/react-router';
import { Anchor, type AnchorProps } from '@mantine/core';

export type RouterAnchorProps = LinkComponentProps & AnchorProps;

const RouterAnchor = createLink(
  forwardRef(({ children, ...props }: RouterAnchorProps, ref) => {
    return (
      <Anchor {...props} ref={ref as any}>
        {children as any}
      </Anchor>
    );
  })
);

export { RouterAnchor };
