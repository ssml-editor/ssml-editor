import type { ReactElement, ReactNode } from 'react';

interface Props {
  readonly children: ReactElement;
  readonly inline: boolean;
}

export default function NoWrapCell({
  children,
  inline = true,
}: Props): ReactNode {
  const Tag = inline ? 'span' : 'div';
  return <Tag style={{ whiteSpace: 'nowrap' }}>{children}</Tag>;
}
