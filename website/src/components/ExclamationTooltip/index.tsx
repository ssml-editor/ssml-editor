import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import type { ReactElement, ReactNode } from 'react';

interface Props {
  readonly children: ReactElement;
}

export default function ExclamationTooltip({ children }: Props): ReactNode {
  return (
    <Tooltip
      color="#ffffff"
      placement="bottom"
      trigger="click"
      title={children}
      styles={{ root: { maxWidth: 'max-content' } }}
    >
      <Button type="text" icon={<ExclamationCircleOutlined />} />
    </Tooltip>
  );
}
